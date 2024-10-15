import { dbConnect } from '@/lib/config/mongodb';
import Post from '@/lib/models/Post';


import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();
    const { title, caption, twitterPost, instagramPost, image,dateAndTime, showOnboardModal, userId } = body;

    if (!userId || !title || !caption || !dateAndTime ) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    const newPost = new Post({
      title,
      caption,
      twitterPost: twitterPost ?? false,
      instagramPost: instagramPost ?? false,
      image: image ?? null,
      dateAndTime,
      
      showOnboardModal: showOnboardModal ?? true,
      userId,
    });
    await newPost.save();
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
