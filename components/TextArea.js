import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

const Editor = dynamic(
  import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

const TextArea = ({ value, setValue, placeholder, required, disabled }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const textValue = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setValue(textValue);
  };
  console.log(value);
  const uploadFile = () => {};
  return (
    <div className="flex flex-col flex-grow relative w-full ">
      <div className=" h-full flex">
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="flex absolute top-0 right-0 z-50"
          editorClassName="!overflow-none   w-400 pt-20"
          toolbar={{
            options: [, "emoji", "inline", "image"],

            inline: {
              options: ["bold", "italic", "underline"],
              bold: {
                className: "bordered-option-classname",
              },
              italic: { className: "bordered-option-classname" },
              underline: { className: "bordered-option-classname" },
            },

            image: {
              uploadCallback: uploadFile,
              urlEnabled: true,
              alt: { present: true, mandatory: false },
              previewImage: true,
              inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
            },
          }}
        />
      </div>
    </div>
  );
};

export default TextArea;
