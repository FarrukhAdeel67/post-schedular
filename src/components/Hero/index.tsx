import Image from "next/image"
import React from "react"
import HeroImg from "../../assets/heroImg.svg"
import shareCircleImg from "../../assets/shareCircle.svg"
import TwitterCard from "../TwitterCard"

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
          <p className="text-left py-4  text-white/65">
            {" "}
            <span className="text-white">1</span>/5
          </p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
          <div className="pt-12">
            <TwitterCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
