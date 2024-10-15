import { create } from "zustand"
import {  PostState } from "../types/storeTypes"

 export const usePostStore = create<PostState>((set) => ({
  title: "Untitled",
  caption:
    "Hello #world, this is a sample text.",
  twitterPost: false,
  instagramPost:false,
  image: null ,
  dateAndTime: new Date().toLocaleString(),
  showOnboardModal: true,
  setTitle: (title) => set(() => ({ title })),
  setCaption: (caption) => set(() => ({ caption })),
  settwitterPost: (twitterPost) => set(() => ({ twitterPost, instagramPost: false })),
  setinstagramPost: (instagramPost) => set(() => ({ instagramPost, twitterPost:false })),
  setImage: (image) => set(() => ({ image })),
  setDateAndTime: (date) => set(() => ({ dateAndTime: date.toLocaleString() })),
  resetForm: () =>
    set(() => ({
      title: "Untitled",
      caption: "",
      twitterPost: false,
      image: null,
      instagramPost:false
    })),
}))


