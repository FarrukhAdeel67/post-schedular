import { auth, clerkClient } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const { userId } = auth()

    if (!userId) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    // Get the OAuth access token for the user
    const provider = "oauth_tiktok"
    const clerkResponse = await clerkClient().users.getUserOauthAccessToken(
      userId,
      provider
    )
    const accessToken = clerkResponse.data[0]

    return NextResponse.json({ message: "Success", token: accessToken })
  } catch (error) {
    console.error("Error fetching OAuth access token:", error)

    // Respond with a generic error message and a 500 status code
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}
