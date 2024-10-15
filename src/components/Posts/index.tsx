"use client";
import React, { useEffect, Suspense, lazy } from "react";
import { useUser } from "@clerk/nextjs";
import usePostsStore from "@/store/usePostsStore";
import { usePostPreference } from "@/store/usePostPreferenceStore";
import fetchUserPosts from "@/lib/apiHooks";
import ButtonGroup from "@/components/GroupButton";

const PostsGrid = lazy(() => import("./PostsGrid"));

const LoadingPosts = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  </div>
);

const PostsClient = () => {
  const { setPosts, posts } = usePostsStore();
  const { user } = useUser();
  const userId = user?.id;
  const { postPreference } = usePostPreference();

  useEffect(() => {
    const fetchPosts = async () => {
      if (userId) {
        const res = await fetchUserPosts(
          userId,
          postPreference as "twitterPost" | "instagramPost"
        );
        if (res) {
          setPosts(res);
        }
      }
    };

    fetchPosts();
  }, [userId, setPosts, postPreference]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center mt-2 w-full">
        <ButtonGroup />
      </div>
      <Suspense fallback={<LoadingPosts />}>
        <PostsGrid posts={posts} />
      </Suspense>
    </div>
  );
};

export default PostsClient;
