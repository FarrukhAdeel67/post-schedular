import { SignUp } from "@clerk/nextjs"

// [[...sign-up]] is an optional catch-all route to handle /sign-up and any subpaths.

export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignUp />
    </div>
  )
}
