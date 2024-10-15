"use client";
import Image from "next/image";
import React from "react";
import photoIcon from "@/assets/photoIcon.svg";
import plusIcon from "@/assets/plusIcon.svg";
import { usePostStore } from "@/store/usePostStore";

const EditorHeader = () => {
  const { title, image, dateAndTime } = usePostStore();

  return (
    <div className="  flex items-center justify-between gap-6 bg-grayLight border-grayLightFull border">
      {/* First Section */}
      <div className=" bg-blackLight border-white/25 border-r flex-shrink-0 flex flex-col items-center p-3 gap-2">
        <button className=" text-white bg-primary-gradient rounded-full p-4">
          <Image src={plusIcon} width={20} alt="plus" />
        </button>
        <span className="text-white font-light text-sm">Create Post</span>
      </div>

      {/* Second Section */}
      <div className=" flex-1  border-grayDark border flex flex-col gap-2 items-start justify-start">
        <div className="text-gray-500 text-xs">{dateAndTime}</div>
        <div className="bg-grayLightFull  w-60 border-white/45 border rounded-md flex items-center justify-start p-2 px-4 gap-3">
          <div className="bg-white/45 p-2 rounded-full flex items-center justify-center">
            {image ? (
              <Image
                src={URL.createObjectURL(image)}
                width={25}
                height={25}
                className="object-fill rounded-full"
                alt="profile"
              />
            ) : (
              <Image
                src={photoIcon}
                width={25}
                className="object-cover "
                alt="profile"
              />
            )}
          </div>
          <div>
            <p className="text-white text-sm leading-3">{title}</p>
            <span className="text-white/45 font-extralight text-xs">
              {dateAndTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorHeader;
