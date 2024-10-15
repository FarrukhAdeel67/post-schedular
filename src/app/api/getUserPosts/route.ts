
import { dbConnect } from '@/lib/config/mongodb';
import Post from '@/lib/models/Post';
import { NextResponse } from 'next/server';
interface PostQuery {
    userId: string;
    twitterPost?: boolean; 
    instagramPost?: boolean; 
  }
  
  export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId'); 
    const type = searchParams.get('type'); 
    if (!userId) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }
  
    try {
      await dbConnect();
        const query: PostQuery = { userId }; 
        if (type === 'twitterPost') {
        query.twitterPost = true; 
      } else if (type === 'instagramPost') {
        query.instagramPost = true; 
      }
        const posts = await Post.find(query);
  
      return NextResponse.json(posts, { status: 200 });
    } catch (error) {
      console.error('Error fetching posts:', error);
      return NextResponse.json({ message: 'Error fetching posts' }, { status: 500 });
    }
  }