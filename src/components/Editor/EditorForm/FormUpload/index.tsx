"use client";
import React from "react";
import photoIcon from "@/assets/photoIcon.svg";
import Image from "next/image";
import { usePostStore } from "@/store/usePostStore";

const FormUpload = () => {
  const { setImage } = usePostStore();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="collapse collapse-arrow border rounded-none border-grayLightFull ">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium  bg-blackLightFull">
        <h2 className="text-white font-normal text-xl">Creative</h2>
      </div>
      <div className="collapse-content">
        <p className="p-4 text-white/80 font-light text-sm">
          Upload custom image or let AI create one for you. The selection of
          creatives have a limit of 10 at max.{" "}
        </p>

        <div className="mt-2">
          <div className="border border-gray-600 rounded-lg p-6 z-20 text-center bg-neutral-900 cursor-pointer">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center h-full"
            >
              <Image
                src={photoIcon}
                width={50}
                className="object-cover "
                alt="profile"
              />

              <h2 className="text-base text-gray-300">Select Image</h2>
              <p className="text-xs  text-gray-500">
                Upload now or choose from previously uploaded images
              </p>
              <input
                type="file"
                className="file-input mt-4 max-w-xs"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormUpload;
