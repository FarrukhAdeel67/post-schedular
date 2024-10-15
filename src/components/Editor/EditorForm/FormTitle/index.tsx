"use client";
import Image from "next/image";
import React, { useState } from "react";
import delIcon from "@/assets/deleteIcon.svg";
import xLogo from "@/assets/xLogo.svg.svg";
import xLogoPink from "@/assets/xLogoPink.svg.svg";
import penIcon from "@/assets/penIcon.svg";
import instagramIcon from "@/assets/instagram.svg";
import instagramColoredIcon from "@/assets/instagramColoredIcon.svg";
import { usePostStore } from "@/store/usePostStore";

const FormTitle = () => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    title,
    setTitle,
    resetForm,
    settwitterPost,
    twitterPost,
    instagramPost,
    setinstagramPost,
  } = usePostStore();
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    resetForm();
  };

  return (
    <div className="  flex flex-col text-white border-b border-white/25  p-4">
      <div className="flex items-start justify-between">
        <div className=" flex flex-col  gap-4">
          <div>
            <span className="text-xs text-white/80 ">IDEA</span>
            <div className="flex items-center justify-between gap-2">
              {isEditing ? (
                <input
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  onBlur={handleBlur}
                  autoFocus
                  className="bg-transparent text-white outline-none border-b border-gray-500"
                />
              ) : (
                <p className="">{title}</p>
              )}
              <Image
                src={penIcon}
                onClick={handleEditClick}
                alt="edit icon"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="">
            <span className="text-xs text-white/80">CHANNELS</span>
            <div className="flex items-center justify-between gap-4">
              <Image
                src={twitterPost ? xLogoPink : xLogo}
                onClick={() => settwitterPost(!twitterPost)}
                className="cursor-pointer"
                width={38}
                alt="x logo"
              />
              <Image
                src={instagramPost ? instagramColoredIcon : instagramIcon}
                onClick={() => setinstagramPost(!instagramPost)}
                className="cursor-pointer "
                width={38}
                alt="insta logo"
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            src={delIcon}
            alt="delete icon"
            onClick={handleDelete}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FormTitle;
