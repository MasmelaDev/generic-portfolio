"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { IconPlus } from "@tabler/icons-react";
export const UploadButton = () => {
  const { pending } = useFormStatus();
  const [file, setFile] = React.useState<File | null>(null);
  const [previewImage, setPreviewImage] = React.useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setPreviewImage(imageUrl);
    }
  };
  const handleClick = () => {
    setFile(null);
    setPreviewImage(null);
  };
  return (
    <div className="flex gap-8 items-center">
      <label
        htmlFor="newVideo"
        className="bg-[#ffb400] w-10 h-10 rounded-full
    flex justify-center items-center text-white font-bold cursor-pointer
    text-3xl"
      >
        <IconPlus />
      </label>
      <div className="flex justify-center items-center gap-2">
        {file && <p>{file.name}</p>}
        {previewImage && (
          <div className="w-10 h-10  rounded-xl overflow-hidden">
            <video src={previewImage} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
      <input
        className="hidden"
        type="file"
        id="newVideo"
        name="file"
        onChange={handleChange}
        placeholder="Subir video"
        accept="video/*"
      />
      <button
        className={`w-28 p-1 flex justify-center items-center font-bold  text-white rounded-md bg-[#ffb400] ${
          pending ? "cursor-not-allowed" : "cursor-pointer "
        }`}
        disabled={pending}
        onClick={handleClick}
        type="submit"
      >
        {pending ? "Subiendo..." : "Subir"}
      </button>
    </div>
  );
};
