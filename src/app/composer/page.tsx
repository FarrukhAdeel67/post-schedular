import EditorHeader from "@/components/Editor/EditorHeader"
import Editor from "../../components/Editor"

// Stateful components were separated to keep this file server-side, avoiding "use client" here.
export default function Composer() {
  return (
    <>
      <EditorHeader />
      <Editor />
    </>
  )
}
