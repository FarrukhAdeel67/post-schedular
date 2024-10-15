
import toast from "react-hot-toast";

const fetchUserPosts = async (userId: string | undefined, type: "twitterPost" | "instagramPost") => {

  if (!userId) {
    toast.error("Please enter a User ID.");
    return;
  }

  try {
    const response = await fetch(`/api/getUserPosts?userId=${userId}&type=${type}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const postsData = await response.json();
    return postsData;
  } catch (error) {
    console.error("Error fetching user posts:", error);
    toast.error("Error fetching posts.");
  }
};

export default fetchUserPosts;
