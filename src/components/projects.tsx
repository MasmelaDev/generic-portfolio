"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconX, IconTrash } from "@tabler/icons-react";
import { deleteFileFromS3 } from "@/actions/actions";
export const Projects = ({
  mode,
  videos,
}: {
  mode: "edit" | "show";
  videos: { url: string; title: string }[];
}) => {
  const [showVideo, setShowVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  if (mode === "edit") {
    return (
      <section className="flex flex-col gap-5 w-full" id="projects">
        <h2 className="text-4xl font-extrabold px-2">Proyectos</h2>

        <div className="flex justify-center gap-10 flex-wrap">
          {videos.map((video, index) => (
            <div
              key={index}
              className="w-[300px] h-[200px] bg-[#555] overflow-hidden rounded-md before:bg-black/50 flex justify-center items-center relative before:absolute before:w-[300px] before:h-[200px]"
            >
              <h3 className="absolute">{video.title}</h3>
              <form
                className="absolute top-3 right-3 z-30"
                action={deleteFileFromS3}
              >
                <input
                  type="text"
                  value={video.title}
                  readOnly
                  className="invisible"
                  name="fileTitle"
                />
                <button
                  type="submit"
                  className="z-30 bg-red-500  p-2 rounded-full"
                >
                  <IconTrash />
                </button>
              </form>
              <video
                className="w-full h-full object-cover "
                src={video.url}
              ></video>
            </div>
          ))}
        </div>
      </section>
    );
  }
  if (mode === "show") {
    return (
      <section
        className="flex flex-col gap-5 w-full min-h-screen"
        id="projects"
      >
        <h2 className="text-4xl font-extrabold px-2">Proyectos</h2>

        <div className="flex justify-center gap-10 flex-wrap">
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setShowVideo(videos[index])}
              className="w-[300px] h-[400px] bg-[#555] overflow-hidden rounded-md"
            >
              <video
                className="w-full h-full object-cover"
                src={video.url}
              ></video>
            </div>
          ))}
        </div>
        {showVideo && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#00000099] flex justify-center items-center z-50">
            <button
              onClick={() => {
                setShowVideo(null);
                videoRef.current?.pause();
              }}
              className="absolute top-5 right-5 bg-[#ffb400] p-2 rounded-full z-50"
            >
              <IconX />
            </button>
            <motion.video
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              ref={videoRef}
              className="w-[100%] h-[100%] object-contain relative z-20"
              src={showVideo.url}
              controls={true}
            ></motion.video>
          </div>
        )}
      </section>
    );
  }
};
