import React from "react";
import Image from "next/image";
import TextArea from "./TextArea";

const StarterPrompt = ({
  editorState,
  setEditorState,
  onEditorStateChange,
}) => {
  return (
    <div className="w-full  bg-gray-background px-42 py-24 flex-grow">
      <div className="mb-17 p-12 border bg-white-white rounded-xs  h-270 flex flex-col border-border-dropdownLine ">
        <TextArea
          placeholder="For this discussion, we are going to explore ______"
          editorState={editorState}
          setEditorState={setEditorState}
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <div className=" flex justify-end">
        <button
          className="btn w-177 h-38 text-md px-22"
          // disabled={starterPromptValue === "" ? true : false}
        >
          Save & continue
        </button>
      </div>
    </div>
  );
};

export default StarterPrompt;
