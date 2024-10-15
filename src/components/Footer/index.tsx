"use client";

import Image from "next/image";
import Link from "next/link";
import arrowLeft from "@/assets/arrowLeft.svg";
import arrowRight from "@/assets/arrowRight.svg";
import ScheduleFooter from "./ScheduleFooter";
import { usePathname } from "next/navigation";

const Footer = () => {
  // Show different footer for composer page by checking the pathname
  const pathname = usePathname();
  const isComposePage = pathname.includes("composer");

  return (
    <footer className="  bg-blackLight text-white backdrop-blur-sm ">
      {isComposePage ? (
        <ScheduleFooter />
      ) : (
        <div className="flex flex-row justify-between items-center w-full p-4">
          <div className="flex flex-row items-center gap-4"></div>
          <div className="flex flex-row items-center gap-4">
            <button className=" flex items-center border border-[#FFFFFF26] justify-between gap-2 px-4 py-2 rounded-md">
              <Image src={arrowRight} className="" width={16} alt="previous" />
              Previous
            </button>
            <Link href="/composer">
              <button className=" flex items-center justify-between gap-2 bg-primary-gradient px-4 py-2 rounded-md">
                Continue
                <Image src={arrowLeft} width={16} alt="continue" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
