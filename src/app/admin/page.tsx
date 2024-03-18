"use server";
import { Projects } from "@/components/projects";
import { IconArrowLeft } from "@tabler/icons-react";
import { getProjects, uploadFileToS3 } from "@/actions/actions";
import { UploadButton } from "@/components/upload-button";
import Link from "next/link";
export default async function Page() {
  const videos = await getProjects();
  return (
    <>
      <main className="p-5 pt-20">
        <Link href="/" className="flex font-bold absolute top-3 left-3 pt-3">
          <IconArrowLeft />
          Portfolio
        </Link>
        <section className=" flex flex-col items-center gap-10">
          <Projects mode="edit" videos={videos} />
          <form className="" action={uploadFileToS3}>
            <UploadButton />
          </form>
        </section>

        <section className="flex flex-col gap-5 w-full pt-5">
          <h2 className="text-4xl font-extrabold px-2">Informacion</h2>
          <form action=""></form>
        </section>
      </main>
    </>
  );
}
