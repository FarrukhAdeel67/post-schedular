
import { PostState } from '@/types/storeTypes';
import { create } from 'zustand';
interface PostStore {
  posts: PostState[];
  setPosts: (posts: PostState[]) => void;
}

const usePostsStore = create<PostStore>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));

export default usePostsStore;
