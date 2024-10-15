import Image from "next/image";
import React from "react";
import HeroImg from "../../assets/heroImg.svg";
import shareCircleImg from "../../assets/shareCircle.svg";
import TwitterCard from "../TwitterCard";
import twitterLogo from "@/assets/twitterLogo.svg";
import instagramLogo from "@/assets/instagramColoredIcon.svg";

const Hero = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" w-1/2 flex flex-col items-center justify-center min-h-full gap-8 px-4 py-8">
        <Image
          src={HeroImg}
          width={286}
          height={256}
          alt="hero img"
          className=" object-cover pt-12"
        />
        <div className=" text-white">
          <div className="flex flex-row items-start justify-between gap-4">
            <Image
              src={shareCircleImg}
              width={18}
              height={18}
              alt="share img"
              className=" object-cover pt-1"
            />

            <div>
              <h1 className="text-2xl font-bold leading-8">
                Connect your social media Channel
              </h1>
              <p className=" text-[#CACACA] text-sm leading-6">
                Save time and get REAL results on social media. Hootsuite makes
                it easy.
              </p>
            </div>
          </div>
          <div className="pt-12 flex  gap-3">
            <TwitterCard title="Twitter" Icon={twitterLogo} />
            <TwitterCard title="Instagram" Icon={instagramLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
