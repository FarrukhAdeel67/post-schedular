import Image from "next/image";
import verifiedBadge from "@/assets/verifiedBadge.svg";
import verticalDots from "@/assets/verticalDots.svg";
import heartReactIcon from "@/assets/heartReactIcon.svg";
import commentIcon from "@/assets/commentIcon.svg";
import shareIcon from "@/assets/shareIcon.svg";
import savedIcon from "@/assets/savedIcon.svg";
import { useUser } from "@clerk/nextjs";
import instagramIcon from "@/assets/instagram.svg";
import { formatText } from "@/components/FormatText";

interface InstaPostCardProps {
  title: string;
  caption: string;
  image: File | null;
  dateAndTime: string;
}

const InstaPostCard: React.FC<InstaPostCardProps> = ({
  title,
  caption,
  image,
  dateAndTime,
}) => {
  const { user } = useUser();

  return (
    <div className="flex justify-center">
      <div className="p-5 my-5 w-[25rem] bg-white text-black rounded-2xl">
        <div className="flex items-center py-2 border-b">
          <div className="w-[50px] aspect-square rounded-full overflow-hidden">
            <Image
              src={user ? user.imageUrl : instagramIcon}
              width={25}
              height={25}
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
            <p className=" text-[12px] text-slate-500">Texas, USA</p>
          </span>
          <Image
            src={verticalDots}
            width={20}
            height={20}
            className="object-cover ml-auto "
            alt="verticalDots"
          />
        </div>

        <div className=" flex flex-col gap-2" id="threadBox">
          {image ? (
            <Image
              src={URL.createObjectURL(image)}
              className=" h-52 mt-4 object-cover rounded-lg"
              alt="Image preview"
              width={400}
              height={200}
            />
          ) : (
            <Image
              src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
              className=" h-52 mt-4 object-cover rounded-lg"
              alt="Image preview"
              width={400}
              height={200}
            />
          )}

          <hr className="my-1" />
          <div className="flex justify-between items-center gap-4">
            <div className="flex justify-center items-center gap-6">
              <Image
                src={heartReactIcon}
                width={20}
                height={20}
                className="object-cover ml-auto "
                alt="likes"
              />{" "}
              <Image
                src={commentIcon}
                width={20}
                height={20}
                className="object-cover ml-auto "
                alt="comments"
              />
              <Image
                src={shareIcon}
                width={30}
                height={30}
                className="object-cover ml-auto "
                alt="share"
              />
            </div>
            <div>
              <Image
                src={savedIcon}
                width={25}
                height={25}
                className="object-cover ml-auto "
                alt="saved"
              />
            </div>
          </div>
          <div className="flex items-start  flex-col justify-start  ">
            <p className="text-[#657786] text-sm font-normal ">
              <span className="font-bold text-black">54</span> Likes
            </p>
            <p className="text-[#657786] text-sm font-normal ">
              <p className=" whitespace-pre-wrap">{formatText(caption)}</p>
            </p>
            <p className="text-[#657786] text-sm font-normal mt-2 ">
              Scheduled Date & Time: {dateAndTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaPostCard;
