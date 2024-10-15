"use client";

import Image from "next/image";
import Link from "next/link";
import arrowDown from "@/assets/arrowDown.svg";
import calendarIcon from "@/assets/calendarIcon.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import usePostStore from "@/store/usePostStore";
import { useState } from "react";
import usePostToTikTok from "@/hooks/usePost";
import toast from "react-hot-toast";
import useMultiplePostsStore from "@/store/usePostsStore";

const ScheduleFooter = () => {
  const {
    title,
    caption,
    previewTweet,
    previewInsta,
    image,
    formattedDate,
    formattedTime,
    setTitle,
    setCaption,
    setPreviewTweet,
    setPreviewInsta,
    setImage,
    setDateAndTime,
    setShowOnboardModal,
    resetForm,
  } = usePostStore();
  const { addTweet } = useMultiplePostsStore();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date) => {
    setDateAndTime(date);
    setSelectedDate(date);
  };

  const { postToTikTok, loading } = usePostToTikTok({
    onSuccess: (data) => {
      toast.success("Content posted successfully");
      console.log("Content posted successfully:", data);
    },
    onError: (error: any) => {
      const message = error.response.data.error.message;
      toast.error(message);
      console.error("Error posting to TikTok:", error);
    },
  });

  const handlePost = () => {
    const newTweet = {
      title,
      caption,
      previewTweet,
      previewInsta,
      image,
      formattedDate,
      formattedTime,
      showOnboardModal: false,
      setTitle,
      setCaption,
      setPreviewTweet,
      setPreviewInsta,
      setImage,
      setDateAndTime,
      setShowOnboardModal,
      resetForm,
    };
    addTweet(newTweet);

    resetForm();
    toast.success("Content posted successfully");
    console.log("New tweet added successfully!", newTweet);
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
            onClick={handlePost}
            className=" flex items-center justify-between text-white  bg-primary-gradient rounded-md"
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
