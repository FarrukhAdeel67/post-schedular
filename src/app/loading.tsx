// This loading.tsx file in the root directory provides a custom loading state during data fetching.

import EmptyState from "@/components/EmptyState"

const Loading = () => {
  return (
    <div className="w-full h-full bg-blackDark text-white flex items-center justify-center">
      <EmptyState
        title="Loading..."
        subtitle="Please wait while we process your request"
        label="Loading..."
      />
    </div>
  )
}

export default Loading
