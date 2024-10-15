import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Post Composer",
  description: "Compose and schedule posts for your social media channels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-blackDark`}
      >
        <ClerkProvider
          // To give some brand touch to the app, we can customize the appearance of the Clerk components.
          appearance={{
            variables: { colorPrimary: "#131313" },
            elements: {
              formButtonPrimary:
                "bg-black border border-black border-solid hover:bg-white hover:text-black",
              socialButtonsBlockButton:
                "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
              socialButtonsBlockButtonText: "font-semibold",
              formButtonReset:
                "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
              membersPageInviteButton:
                "bg-black border border-black border-solid hover:bg-white hover:text-black",
              card: "bg-[#fafafa]",
            },
          }}
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClerkProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
