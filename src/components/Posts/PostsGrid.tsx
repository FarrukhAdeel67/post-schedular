import React from "react";
import InstaPostCard from "@/components/Posts/InstaPostCard";
import TwitterPostCard from "./TwitterPostCard";
import { usePostPreference } from "@/store/usePostPreferenceStore";

interface Post {
  title: string;
  caption: string;
  image: File | null;
  dateAndTime: string;
}

interface PostListProps {
  posts: Post[];
}

const PostsGrid: React.FC<PostListProps> = ({ posts }) => {
  const { postPreference } = usePostPreference();

  return (
    <>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <>
              {postPreference === "instagramPost" ? (
                <InstaPostCard
                  key={post.dateAndTime}
                  title={post.title}
                  caption={post.caption}
                  image={post.image}
                  dateAndTime={post.dateAndTime}
                />
              ) : (
                <TwitterPostCard
                  key={post.dateAndTime}
                  title={post.title}
                  caption={post.caption}
                  image={post.image}
                  dateAndTime={post.dateAndTime}
                />
              )}
            </>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">No posts available.</p>
      )}
    </>
  );
};

export default PostsGrid;
