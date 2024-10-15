//  Purpose: Define the types for the store
export interface PostState {
  title: string
  caption: string
  twitterPost: boolean
  image: File | null 
  dateAndTime:string
  instagramPost:boolean
  setinstagramPost: (instagramPost: boolean) => void
  setTitle: (title: string) => void
  setCaption: (caption: string) => void
  settwitterPost: (twitterPost: boolean) => void
  setImage: (image: File) => void
  setDateAndTime: (date: Date) => void
  resetForm: () => void
}



export interface PostPreferenceState {
  postPreference: string;
  setPostPreference: (postPreference:string) => void;
}
