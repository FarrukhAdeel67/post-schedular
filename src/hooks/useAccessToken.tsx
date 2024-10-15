import { useState, useEffect } from "react"
import axios from "axios"
import { getCookie, setCookie } from "cookies-next"

interface TokenResponse {
  token: {
    token: string
  }
}

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null)

  // Function to fetch a new access token from API
  const fetchNewAccessToken = async () => {
    try {
      const { data } = await axios.get<TokenResponse>("/api/getAccessToken")

      const token = data?.token?.token
      if (token) {
        // Store the new token in cookies with a 7-day expiry
        setCookie("tiktokAccessToken", token, { maxAge: 60 * 60 * 24 * 7 })

        // Store the expiry time in cookies as 7 days from now
        const expiryTime = Date.now() + 60 * 60 * 24 * 7 * 1000
        setCookie("tokenExpiry", expiryTime.toString(), {
          maxAge: 60 * 60 * 24 * 7,
        })
        setAccessToken(token)
      }
    } catch (error) {
      console.error("Error fetching new access token:", error)
    }
  }

  useEffect(() => {
    const token = getCookie("tiktokAccessToken") as string | null
    const expiryTime = getCookie("tokenExpiry") as string | null

    if (token && expiryTime) {
      const currentTime = Date.now()
      const expiryTimeInt = parseInt(expiryTime, 10)

      if (currentTime < expiryTimeInt) {
        setAccessToken(token) // Use the existing token if not expired
      } else {
        fetchNewAccessToken() // Fetch a new token if expired
      }
    } else {
      fetchNewAccessToken() // Fetch a new token if none found
    }
  }, [])

  return accessToken
}

export default useAccessToken
