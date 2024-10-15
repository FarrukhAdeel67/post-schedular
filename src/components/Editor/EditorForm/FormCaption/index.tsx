"use client";
import React from "react";
import Image from "next/image";
import infoCircle from "@/assets/infoCircle.svg";
import usePostStore from "@/store/usePostStore";

const FormCaption = () => {
  const { caption, setCaption } = usePostStore();
  return (
    <div className="collapse collapse-arrow border rounded-none border-grayLightFull ">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium  bg-blackLightFull">
        <h2 className="text-white font-normal text-xl">Caption</h2>
      </div>
      <div className="collapse-content">
        <div className="p-4 text-white/80 font-light text-sm flex item-center gap-2">
          <span>Type the caption yourself</span>
          <Image src={infoCircle} width={15} alt="info" />
        </div>

        <div className="mt-2">
          <textarea
            className="w-full bg-blackLightFull placeholder:text-sm placeholder:font-light outline-grayLight text-white rounded-md p-4 placeholder:text-grayLightFull resize-none"
            rows={4}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            maxLength={280}
            placeholder="The quick brown fox jumps over the lazy dog. #myfirsttweet twitter.com @twitter www.xample.com"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default FormCaption;
