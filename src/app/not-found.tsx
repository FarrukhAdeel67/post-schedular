"use client"

// This not-found.tsx file provides a custom 404 page for when a route is not found.
import EmptyState from "@/components/EmptyState"

const NotFound: React.FC = () => {
  return (
    <EmptyState
      title="Uh No"
      subtitle="Could not find requested resource"
      label="Go back home"
    />
  )
}

export default NotFound
