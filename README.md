# Post Composer App

## Overview

The Post Composer App allows users to log in using their TikTok account, compose a post including title, description, tags, links, and images, and submit it directly to their TikTok profile. The app ensures a seamless experience through efficient SEO, fast UI rendering, and optimized error handling.

## Features

- **TikTok Authentication**: Users can log in via TikTok and grant necessary permissions.
- **Post Composer**: Users can create a post with a title, description, tags, links, and images.
- **Submission**: The app submits the composed post directly to the user's TikTok profile.
- **Responsive Design**: The app is designed to be fully responsive and mobile-friendly.
- **Error Handling**: Custom handling for error, not-found, and loading pages.

## Technical Background

- **Framework**: [Next.js 14](https://nextjs.org/) - Leveraging the app router for improved SEO, fast UI rendering, and optimized user experience.
- **API Handling**: Utilizing the API directory to interact with TikTok endpoints for posting content to user profiles.
- **State Management**: Using [Zustand](https://github.com/pmndrs/zustand) for state management within the app.
- **HTTP Requests**: [Axios](https://axios-http.com/) for making HTTP requests.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) for styling and UI components.
- **Cookies Management**: [cookies-next](https://github.com/amentum/cookies-next) for client-side cookies handling, and Next.js provided cookies function for server-side handling.
- **Error Handling**: Implemented custom error, not-found, and loading pages to enhance user experience.

## Installation

1. **Clone the repo and run the project**:

   ```bash
   git clone https://github.com/
   cd post-composer

   npm install
   npm run dev
   ```

## ENV

```bash
NEXT_PUBLIC_REQUEST_URL=
TWITTER_CLIENT_ID=
TWITTER_CLIENT_SECRET=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
AUTH_TIKTOK_ID=
AUTH_TIKTOK_SECRET=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```
