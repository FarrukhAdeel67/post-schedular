"use client";
import ButtonGroup from "@/components/GroupButton";
import usePostsStore from "@/store/usePostsStore";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import PostsGrid from "./PostsGrid";
import fetchUserPosts from "@/lib/apiHooks";
import { usePostPreference } from "@/store/usePostPreferenceStore";

const PostsClient = () => {
  const { setPosts, posts } = usePostsStore();
  const { user } = useUser();
  const userId = user?.id;
  const { postPreference } = usePostPreference();
  console.log("post Preference", postPreference);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetchUserPosts(
        userId,
        postPreference as "twitterPost" | "instagramPost"
      );
      if (res) {
        setPosts(res);
      }
    };

    fetchPosts();
  }, [userId, setPosts, postPreference]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center mt-2 w-full">
        <ButtonGroup />
      </div>
      <PostsGrid posts={posts} />{" "}
    </div>
  );
};

export default PostsClient;
