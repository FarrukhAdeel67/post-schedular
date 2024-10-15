import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  title: string;
  caption: string;
  twitterPost: boolean;
  instagramPost: boolean;
  image: string | null; 
  dateAndTime: string;
  userId: string; 
  createdAt: Date;
  updatedAt: Date;
}


const PostSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      default: 'Untitled',
    },
    caption: {
      type: String,
      required: true,
      default: 'Hello #world, this is a sample text.',
    },
    twitterPost: {
      type: Boolean,
      required: true,
      default: false,
    },
    instagramPost: {
      type: Boolean,
      required: true,
      default: false,
    },
    image: {
      type: String,
      default: null, 
    },
    dateAndTime: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
      required: true, 
    },
  },
  {
    timestamps: true, 
  }
);

export default mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
