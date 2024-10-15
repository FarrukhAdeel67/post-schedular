import Image from "next/image";
import React from "react";
import userIcon from "@/assets/userIcon.svg";
import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";

const Profile = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="cursor-pointer h-full flex items-center">
      <div className="flex items-center justify-between gap-6 py-2 px-4 rounded-md">
        <div className="flex gap-1 items-center justify-center">
          <details className="dropdown dropdown-end">
            <summary className="btn">
              <p className="text-white">{user ? user?.fullName : "Profile"}</p>
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <Image
                  src={user ? user.imageUrl : userIcon}
                  width={30}
                  height={30}
                  className="object-cover"
                  alt="profile"
                />
              </div>{" "}
            </summary>
            <ul className="menu dropdown-content bg-blackLight rounded-md z-[1] w-52 p-2 shadow">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/composer">Composer</Link>
              </li>
              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Profile;
