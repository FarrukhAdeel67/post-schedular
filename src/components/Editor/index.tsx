import React from "react";
import EditorForm from "./EditorForm";
import PostPreview from "../PostPreview";

const Editor = () => {
  return (
    <div className=" flex flex-col md:flex-row md:items-stretch md:justify-stretch flex-wrap ">
      <EditorForm />
      <PostPreview />
    </div>
  );
};

export default Editor;
