import { SignIn } from "@clerk/nextjs"

// [[...sign-in]] is an optional catch-all route to handle /sign-in and any subpaths.
export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignIn />
    </div>
  )
}
