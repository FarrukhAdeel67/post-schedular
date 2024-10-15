"use client";

import Image from "next/image";
import Link from "next/link";
import arrowDown from "@/assets/arrowDown.svg";
import calendarIcon from "@/assets/calendarIcon.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { usePostStore } from "@/store/usePostStore";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";
import { usePostPreference } from "@/store/usePostPreferenceStore";
import { useRouter } from "next/navigation";

const ScheduleFooter = () => {
  const {
    title,
    caption,
    twitterPost,
    instagramPost,
    image,
    setDateAndTime,
    resetForm,
    dateAndTime,
  } = usePostStore();
  const router = useRouter();
  const { postPreference, setPostPreference } = usePostPreference();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const handleDateChange = (date: Date) => {
    setDateAndTime(date);
    setSelectedDate(date);
  };

  const handlePost = async () => {
    if (!user) {
      toast.error("User not authenticated");
      return;
    }
    const newTweet = {
      title,
      caption,
      twitterPost,
      instagramPost,
      image: null,
      dateAndTime,
      showOnboardModal: false,
      userId: user.id,
    };

    setLoading(true);

    try {
      const response = await fetch("/api/addPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTweet),
      });
      if (!response.ok) {
        throw new Error("Failed to post the content");
      }

      const data = await response.json();
      resetForm();
      if (instagramPost) {
        setPostPreference("instagramPost");
      } else if (twitterPost) {
        setPostPreference("twitterPost");
      }
      setLoading(false);
      toast.success("Content posted successfully");
      router.push("/posts");
    } catch (error) {
      console.error("Error posting content:", error);
      toast.error("Error posting content");
      setLoading(false);
    }
  };

  return (
    <footer className="  bg-blackLight text-white backdrop-blur-sm ">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full p-4">
        <div className="flex flex-row items-center gap-4">
          <Link href="/">
            <button className=" flex items-center border border-[#FFFFFF26] justify-between gap-2 px-4 py-2 rounded-md">
              Cancel
            </button>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className=" flex items-center border border-[#FFFFFF26] justify-between gap-2  rounded-md">
            <div className="bg-grayLightFull px-4 py-2">
              <Image src={calendarIcon} className="" width={25} alt="date" />
            </div>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => handleDateChange(date as Date)}
              showTimeSelect
              dateFormat="yyyy-MM-d h:mm aa"
            />
          </div>
          <button
            disabled={caption ? false : true}
            onClick={handlePost}
            className={`flex items-center justify-between text-white ${
              caption === "" ? "bg-gray-400" : "bg-primary-gradient "
            }  rounded-md`}
          >
            <p className="px-4 py-2 text-white">
              {loading ? "Posting..." : "Schedule"}
            </p>
            <div className=" border-l border-white/25 px-4 py-2">
              <Image src={arrowDown} width={16} alt="continue" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ScheduleFooter;
