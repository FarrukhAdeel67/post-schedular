import React from "react";
import { useUser } from "@clerk/nextjs";
import fetchUserPosts from "@/lib/apiHooks";
import usePostsStore from "@/store/usePostsStore";
import { usePostStore } from "@/store/usePostStore";
import { usePostPreference } from "@/store/usePostPreferenceStore";

const ButtonGroup: React.FC = () => {
  const { setPosts } = usePostsStore();
  const { settwitterPost, setinstagramPost } = usePostStore();
  const { setPostPreference } = usePostPreference();

  const { user } = useUser();
  const userId = user?.id;

  const handleInstagramClick = async () => {
    settwitterPost(false);
    setinstagramPost(true);
    setPostPreference("instagramPost");
    setPosts([]);
    const posts = await fetchUserPosts(userId, "instagramPost");
    if (posts) {
      setPosts(posts);
    }
  };

  const handleTwitterClick = async () => {
    setinstagramPost(false);
    settwitterPost(true);
    setPostPreference("twitterPost");

    setPosts([]);
    const posts = await fetchUserPosts(userId, "twitterPost");
    if (posts) {
      setPosts(posts);
    }
  };

  return (
    <div className="inline-flex mx-auto rounded-md shadow-sm" role="group">
      <button
        type="button"
        onClick={handleInstagramClick}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Instagram
      </button>

      <button
        type="button"
        onClick={handleTwitterClick}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Twitter
      </button>
    </div>
  );
};

export default ButtonGroup;
