import { NextResponse } from "next/server"
import axios from "axios"
import { cookies } from "next/headers"

// A POST request to this Tiktok endpoint will create a new TikTok post
export async function POST(request: Request) {
  const body = await request.json()
  const { title, description } = body

  // Get the access token from the cookies
  const cookieStore = cookies()
  const accessToken = cookieStore.get("tiktokAccessToken")?.value

  // Tiktok API request body
  const requestBody = {
    post_info: {
      title,
      description,
      privacy_level: "PUBLIC_TO_EVERYONE",
      auto_add_music: true,
    },
    // Since Tiktok API only supports img URL(s)
    source_info: {
      source: "PULL_FROM_URL",
      photo_cover_index: 1,
      photo_images: [
        "https://images.pexels.com/photos/1629998/pexels-photo-1629998.jpeg",
      ],
    },
    post_mode: "DIRECT_POST",
    media_type: "PHOTO",
  }

  try {
    const response = await axios.post(
      "https://open.tiktokapis.com/v2/post/publish/content/init/",
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    )

    return NextResponse.json(response.data)
  } catch (error: any) {
    const statusCode = error.response?.status || 500

    const errorResponse = error.response?.data?.error || {
      code: "unknown_error",
      message: error.message,
    }

    // Return a meaningful error response
    return NextResponse.json(
      {
        error: {
          code: errorResponse.code,
          message: errorResponse.message,
        },
      },
      { status: statusCode }
    )
  }
}
