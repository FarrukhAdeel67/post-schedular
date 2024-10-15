//  Purpose: Define the types for the store
export interface TweetState {
  title: string
  caption: string
  previewTweet: boolean
  image: File | null
  formattedDate: string
  formattedTime: string
  showOnboardModal: boolean

  previewInsta:boolean
  setPreviewInsta: (previewInsta: boolean) => void


  setTitle: (title: string) => void
  setCaption: (caption: string) => void
  setPreviewTweet: (previewTweet: boolean) => void
  setImage: (image: File) => void
  setDateAndTime: (date: Date) => void
  setShowOnboardModal: (showOnboardModal: boolean) => void
  resetForm: () => void
}




export interface MultiplePostsManager {
  tweets: TweetState[]
  
  addTweet: (tweet: TweetState) => void
  updateTweet: (index: number, updatedTweet: Partial<TweetState>) => void
  deleteTweet: (index: number) => void
  
  getTweet: (index: number) => TweetState | undefined
  getAllTweets: () => TweetState[]
  
  clearAllTweets: () => void
}