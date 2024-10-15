import { create } from "zustand"
import moment from "moment"
import { TweetState } from "../types/storeTypes"

// Create a store with the initial state
const usePostStore = create<TweetState>((set) => ({

previewInsta:false,
setPreviewInsta: (previewInsta) => set(() => ({ previewInsta, previewTweet:false })),

  
  title: "Untitled",
  caption:
    "Hello #world, this is a sample text.",
  previewTweet: false,
  image: null,
  formattedDate: "",
  formattedTime: "",
  showOnboardModal: true,
  setTitle: (title) => set(() => ({ title })),
  setCaption: (caption) => set(() => ({ caption })),
  setPreviewTweet: (previewTweet) => set(() => ({ previewTweet, previewInsta: false })),
  setImage: (image) => set(() => ({ image })),
  setDateAndTime: (date) => {
    const formattedDate = moment(date).format("MMM D, YYYY")
    const formattedTime = moment(date).format("hh:mm A")
    set({ formattedDate, formattedTime })
  },
  setShowOnboardModal: (showOnboardModal: boolean) =>
    set(() => ({ showOnboardModal })),
  resetForm: () =>
    set(() => ({
      title: "Untitled",
      caption: "",
      previewTweet: false,
      image: null,
    })),
}))

export default usePostStore
