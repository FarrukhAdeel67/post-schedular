"use client";
import React from "react";
import TweetPreviewIcon from "@/assets/tweetPreviewIcon.svg";
import infoCircleIcon from "@/assets/infoCircleIcon.svg";
import Image from "next/image";
import TweetCard from "./TweetCard";
import InstaPostCard from "./InstaPostCard";
import usePostStore from "@/store/usePostStore";

const PostPreview = () => {
  const { previewTweet, previewInsta } = usePostStore();
  return (
    <div className=" w-full md:w-2/5 relative bg-grayLightFull flex items-center justify-center py-4">
      {previewTweet ? (
        <TweetCard />
      ) : previewInsta ? (
        <InstaPostCard />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={TweetPreviewIcon}
            width={50}
            className="object-cover"
            alt="profile"
          />
          <p className=" text-xl text-white">
            Select a Channel to View Preview
          </p>
          <p className="font-normal text-sm text-white/50">
            The preview will only available once you selected the channel
          </p>
        </div>
      )}

      <Image
        src={infoCircleIcon}
        width={28}
        className="object-cover absolute top-3 right-2"
        alt="profile"
      />
    </div>
  );
};

export default PostPreview;
