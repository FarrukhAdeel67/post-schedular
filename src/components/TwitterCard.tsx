"use client"
import React from "react"
import twitterLogo from "../assets/twitterLogo.svg"
import Image from "next/image"
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"

const TwitterCard = () => {
  return (
    <div className=" w-52 h-44 flex flex-col items-center justify-between border border-gray-700 rounded-md  gap-4 bg-card-gradient p-4">
      <div className="flex flex-col items-center">
        <div className=" rounded-full p-2">
          <Image src={twitterLogo} width={42} height={42} alt="twitter logo" />
        </div>
        <p className="text-xs">Twitter</p>
      </div>
      <SignedIn>
        <button className="bg-button-gradient font-medium w-full  text-xs border border-gray-700 rounded-lg px-4 py-2">
          Connected ✅
        </button>
      </SignedIn>

      <SignedOut>
        <SignInButton>
          <button className="bg-button-gradient font-medium w-full  text-xs border border-gray-700 rounded-lg px-4 py-2">
            Connect
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  )
}

export default TwitterCard
