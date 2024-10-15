import axios from "axios"

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REQUEST_URL || "http://localhost:3000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
    } else if (error.response?.status === 500) {
      // Handle server errors
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
