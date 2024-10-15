import { create } from "zustand"
import { TweetState, MultiplePostsManager } from "../types/storeTypes"

const useMultiplePostsStore = create<MultiplePostsManager>((set, get) => ({
  tweets: [],

  addTweet: (tweet: TweetState) => set((state) => ({ 
    tweets: [...state.tweets, tweet] 
  })),

  updateTweet: (index: number, updatedTweet: Partial<TweetState>) => set((state) => ({
    tweets: state.tweets.map((tweet, i) => 
      i === index ? { ...tweet, ...updatedTweet } : tweet
    )
  })),

  deleteTweet: (index: number) => set((state) => ({
    tweets: state.tweets.filter((_, i) => i !== index)
  })),

  getTweet: (index: number) => {
    return get().tweets[index]
  },

  getAllTweets: () => {
    return get().tweets
  },

  clearAllTweets: () => set({ tweets: [] })
}))

export default useMultiplePostsStore;