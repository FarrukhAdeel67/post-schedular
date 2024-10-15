"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import Profile from "../Profile";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const Header = () => {
  const pathname = usePathname();
  const isComposePage = pathname.includes("composer");

  return (
    <header className="sticky top-0 z-[100] h-[56px] px-4 flex justify-between items-center bg-blackLight text-white backdrop-blur-sm">
      <div className="flex justify-between items-center h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image src={logo} alt="logo" width={35} />
          <p className="text-base font-bold ml-2">Post Composer</p>
        </Link>

        {/* Navigations */}
        <div className="hidden md:flex items-center justify-between pl-10 font-normal">
          <Link
            href="/"
            className={`px-3 text-md font-medium cursor-pointer hover:text-slate-300 ${
              !isComposePage ? "text-[#FEB5F3]" : "text-[#939292]"
            }`}
          >
            My Brand
          </Link>
          <Link
            href="/composer"
            className={`px-3 text-md font-medium cursor-pointer hover:text-slate-300 ${
              isComposePage ? "text-[#FEB5F3]" : "text-[#939292]"
            }`}
          >
            Post Composer
          </Link>
          <Link
            href="/posts"
            className={`px-3 text-md font-medium cursor-pointer hover:text-slate-300 ${
              isComposePage ? "text-[#FEB5F3]" : "text-[#939292]"
            }`}
          >
            Posts{" "}
          </Link>
          <Link
            href="/terms"
            className={`px-3 text-md font-medium cursor-pointer hover:text-slate-300 ${
              isComposePage ? "text-[#FEB5F3]" : "text-[#939292]"
            }`}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
      <SignedIn>
        <Profile />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <button className="px-4 py-2 rounded-md bg-[#131316] text-white text-md">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
    </header>
  );
};

export default Header;
