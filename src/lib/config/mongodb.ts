import mongoose from 'mongoose'

export const dbConnect = async()=>{
    const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}
    await mongoose.connect(MONGODB_URI);
    console.log(`mongoose is connect with ${mongoose.connection.host}`)
}