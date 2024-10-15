import { PostPreferenceState } from "@/types/storeTypes";
import { create } from "zustand";

export const usePostPreference = create<PostPreferenceState>((set) => ({
    postPreference:"instagramPost",  
    setPostPreference: (postPreference) => set({ postPreference }), 
  }));