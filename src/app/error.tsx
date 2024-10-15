"use client"

import EmptyState from "@/components/EmptyState"

// This error.tsx file in the root directory is a custom error component for client-side error handling.
const Error: React.FC = () => {
  return (
    <EmptyState
      title="Uh No"
      subtitle="An error occurred while processing your request"
      label="Go back home"
    />
  )
}

export default Error
