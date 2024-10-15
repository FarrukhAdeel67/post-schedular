"use client";
import React from "react";
import Image from "next/image";
import xLogo from "@/assets/xLogo.svg";
import verifiedBadge from "@/assets/verifiedBadge.svg";
import { useUser } from "@clerk/nextjs";
import verticalDots from "@/assets/verticalDots.svg";
import { usePostStore } from "@/store/usePostStore";
import { formatText } from "@/components/FormatText";

const TweetCard = () => {
  const { user } = useUser();
  const { caption, image, dateAndTime } = usePostStore();
  const date = dateAndTime.toLocaleString();

  return (
    <div className="mockup-browser bg-base-300 ">
      <div className="mockup-browser-toolbar">
        <div className="input">https://twitter.com/posts</div>
      </div>
      <div className="flex justify-center">
        <div className="p-5 my-5 w-[25rem] bg-white text-black rounded-2xl">
          <div className="flex items-center">
            <div className="w-[50px] aspect-square rounded-full overflow-hidden">
              <Image
                src={user ? user.imageUrl : xLogo}
                width={30}
                height={30}
                className=" object-cover w-full h-full"
                alt="ProfileImage"
              />
            </div>
            <span className="ml-3">
              <div className=" flex items-center gap-1">
                <p className="text-[15px] font-semibold">
                  {user ? user.firstName : "User"}{" "}
                </p>
                <Image
                  src={verifiedBadge}
                  width={15}
                  className="object-cover"
                  alt="logo"
                />
              </div>
              <p className=" text-[12px] text-slate-500">
                @{user ? user.fullName : "username"}
              </p>
            </span>
            <Image
              src={verticalDots}
              width={25}
              height={25}
              className="object-cover ml-auto "
              alt="vertical dots"
            />
          </div>
          <div className="py-5 flex flex-col gap-2" id="threadBox">
            <p className=" whitespace-pre-wrap">{formatText(caption)}</p>
            {image && (
              <Image
                src={URL.createObjectURL(image)}
                className=" h-52 mt-4 object-cover rounded-lg"
                alt="Image preview"
                width={400}
                height={200}
              />
            )}
            <p className="text-[#657786] text-sm font-normal ">{date}</p>
            <hr className="my-1" />
            <div className="flex items-center justify-start gap-3">
              <p className="text-[#657786] text-sm font-normal ">
                <span className="font-bold text-black">173</span> Retweets
              </p>
              <p className="text-[#657786] text-sm font-normal ">
                <span className="font-bold text-black">54</span> Quote tweets
              </p>
              <p className="text-[#657786] text-sm font-normal ">
                <span className="font-bold text-black">936</span> Likes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
