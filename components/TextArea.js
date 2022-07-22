import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { toolbarSettings } from "@/utils/toolbarSettingss";

const Editor = dynamic(
  import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

const TextArea = ({ placeholder, editorState, onEditorStateChange }) => {
  return (
    <div className="flex  flex-col flex-grow relative w-full ">
      <div className="  h-full flex ">
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="flex absolute bottom-0 left-0 z-50"
          editorClassName="!overflow-none !text-md w-full  pb-20 "
          toolbar={toolbarSettings}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextArea;
