"use client";
import React from "react";
import onBoardIcon from "../assets/onBoardIcon.svg";
import closeIcon from "../assets/closeIcon.svg";
import Image from "next/image";
import usePostStore from "@/store/usePostStore";

const OnBoardModal = () => {
  const { showOnboardModal, setShowOnboardModal } = usePostStore();
  return showOnboardModal ? (
    <div className="absolute w-[420px] bottom-8 right-4 rounded-md border border-[#1D7B3F4D] px-2 bg-onboard-gradient text-white">
      <div className="flex flex-col p-2 ">
        <div className="flex flex-row justify-between items-start ">
          <div className="flex flex-row items-center justify-between">
            <Image src={onBoardIcon} alt="onboard icon" width={64} />
            <h2 className="font-bold text-xl">Still worried!</h2>
          </div>
          <Image
            src={closeIcon}
            className="cursor-pointer"
            alt="close"
            width={24}
            onClick={() => setShowOnboardModal(false)}
          />
        </div>
        <div className="px-4">
          {/* two list items - bullet list */}
          <ul className="list-disc list-inside space-y-2 text-[#C8C8C8] text-sm">
            <li className="flex items-start">
              <span className="text-[#82D9A2] mr-2">•</span>
              <p>Disconnect social media anytime you want</p>
            </li>
            <li className="flex items-start">
              <span className="text-[#82D9A2] mr-2">•</span>
              <p>100% secure and not take any action without your permission</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

export default OnBoardModal;
