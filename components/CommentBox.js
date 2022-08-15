import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/viewDiscussion.module.css";
import ShowInspirations from "./ShowInspirations";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { mention } from "@/utils/mentions";
import { toolbar } from "@/utils/toolbar";

const Editor = dynamic(
  import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);
const CommentBox = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [textValue, setTextValue] = useState("");
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setTextValue(text);
  };
  const toolbarStyle = ` absolute bottom-1  left-40 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-full !text-md`;
  return (
    <div className="h-130 relative">
      <div className="h-full border rounded-lg border-primary-darkGreen py-12 px-20 flex  items-end">
        <div className="h-100  w-full bg-white-white">
          <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            toolbarClassName={toolbarStyle}
            editorClassName={editorStyle}
            mention={mention}
            toolbar={toolbar}
            placeholder="say something different"
          />
        </div>
        <ShowInspirations
          setActiveCommentBox={setActiveCommentBox}
          togglePostInsp={togglePostInsp}
        />
      </div>
    </div>
  );
};

export default CommentBox;
