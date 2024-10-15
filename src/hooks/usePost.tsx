import { useState } from "react"
import axios from "axios"
import useAccessToken from "./useAccessToken"

interface PostToTikTokResponse {
  status: string
  videoId: string
}

interface UsePostToTikTokOptions {
  onSuccess?: (data: PostToTikTokResponse) => void
  onError?: (error: Error) => void
}

const usePostToTikTok = ({ onSuccess, onError }: UsePostToTikTokOptions) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [data, setData] = useState<PostToTikTokResponse | null>(null)
  const accessToken = useAccessToken()

  const postToTikTok = async (title: string, description: string) => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post<PostToTikTokResponse>(
        "/api/postTikTok",
        {
          title,
          description,
        }
      )

      const result = response.data
      setData(result)
      setLoading(false)

      if (onSuccess) {
        onSuccess(result) // Trigger onSuccess callback if provided
      }
    } catch (err: any) {
      setLoading(false)
      setError(err)

      if (onError) {
        onError(err) // Trigger onError callback if provided
      }
    }
  }

  return {
    postToTikTok,
    loading,
    error,
    data,
    isSuccess: !!data && !error,
  }
}

export default usePostToTikTok
