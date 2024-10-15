import React from "react"
import FormTitle from "./FormTitle"
import FormCaption from "./FormCaption"
import FormUpload from "./FormUpload"

const EditorForm = () => {
  return (
    <div className="w-full md:w-3/5">
      <FormTitle />
      <div className="p-4 flex flex-col items-center justify-center gap-3">
        <FormCaption />
        <FormUpload />
      </div>
    </div>
  )
}

export default EditorForm
