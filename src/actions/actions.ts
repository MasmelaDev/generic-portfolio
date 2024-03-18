"use server";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { db } from "@/libs/prisma";
import { videos } from "@prisma/client";
import { revalidatePath } from "next/cache";
const s3 = new S3Client({
  region: `${process.env.AWS_REGION}`,
  credentials: {
    accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`,
    secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY}`,
  },
});

export const uploadFileToS3 = async (formData: FormData) => {
  const file = formData.get("file");
  console.log(file);
  if (!file || !(file instanceof File) || file.size === 0) return;
  const fileContent = await file.arrayBuffer();
  const fileContentBuffer = Buffer.from(fileContent);
  const command = new PutObjectCommand({
    Bucket: `${process.env.AWS_BUCKET_NAME}`,
    Key: file.name,
    Body: fileContentBuffer,
    ACL: "public-read",
  });
  try {
    const data = await s3.send(command);

    if (data.$metadata.httpStatusCode === 200) {
      const response = await db.videos.create({
        data: {
          title: file.name,
          url: `${process.env.AWS_BUCKET_URL}/${file.name}`,
        },
      });
      revalidatePath("/admin");
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteFileFromS3 = async (formData: FormData) => {
  const title = formData.get("fileTitle");
  console.log(title);
  if (!title) return;

  const command = new DeleteObjectCommand({
    Bucket: `${process.env.AWS_BUCKET_NAME}`,
    Key: `${title}`,
  });

  const data = await s3.send(command);
  console.log(data);
  if (data.$metadata.httpStatusCode === 204) {
    const video = await db.videos.findFirst({
      where: {
        title: `${title}`,
      },
    });
    console.log(video);
    await db.videos.delete({
      where: {
        id: video?.id,
      },
    });

    revalidatePath("/admin");
  }
};

export const getProjects = async () => {
  const data: videos[] = await db.videos.findMany();
  return data;
};
