# Post Schedular App

## Overview

The Post Composer App allows users to log in using their Google or account , compose a post for Instagram and Twitter including title, description, tags, links, and images, and submit it directly to their TikTok profile. The app ensures a seamless experience through efficient SEO, fast UI rendering, and optimized error handling.

## Features

- **Post Composer**: Users can create a post with a title, description, tags, links, and images.
- **Submission**: The app submits the composed post directly to the user's TikTok profile.
- **Responsive Design**: The app is designed to be fully responsive and mobile-friendly.
- **Error Handling**: Custom handling for error, not-found, and loading pages.
- **Database**: MongoDB for storing and retreiving scheduled Posts.

## Technical Background

- **Framework**: [Next.js 14](https://nextjs.org/) - Leveraging the app router for improved SEO, fast UI rendering, and optimized user experience.
- **API Handling**: Utilizing the API directory to interact with TikTok endpoints for posting content to user profiles.
- **State Management**: Using [Zustand](https://github.com/pmndrs/zustand) for state management within the app.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) for styling and UI components.
- **Error Handling**: Implemented custom error, not-found, and loading pages to enhance user experience.


## Installation

1. **Clone the repo and run the project**:

   ```bash
   git clone https://github.com/FarrukhAdeel67/post-schedular
   cd post-schedular

   npm install
   npm run dev
   ```

## ENV

```bash
AUTH_TIKTOK_ID=
AUTH_TIKTOK_SECRET=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=s
MONGODB_URI =your_mongo_uri

```
