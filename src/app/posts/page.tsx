"use client";

import InstaPostCard from "@/components/Posts/InstaPostCard";
import useMultiplePostsStore from "@/store/usePostsStore";
import React from "react";
// import InstaPostCard from "@/components/TweetPreview/InstaPostCard/index";

const Posts = () => {
  const { getAllTweets } = useMultiplePostsStore();
  const posts = getAllTweets();

  console.log("All tweets ", posts);

  return (
    <div className="container mx-auto px-4">
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <InstaPostCard
              key={index}
              title={post.title}
              caption={post.caption}
              image={post.image}
              formattedDate={post.formattedDate}
              formattedTime={post.formattedTime}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">No posts available.</p>
      )}
    </div>
  );
};

export default Posts;
