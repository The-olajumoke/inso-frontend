import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { toolbarSettings } from "@/utils/toolbarSettings";
import draftToHtml from "draftjs-to-html";

import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import Image from "next/image";
import WhiteLoader from "./whiteLoader";
import Link from "next/link";
const Editor = dynamic(
  import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

const StarterPrompt = ({
  setActiveSettings,
  setStarterPromptValue,
  handleStarterPrompt,
  discName,
  starterPrompt,
  starterPromptLoading,
  starterPromptData,
}) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(`${starterPrompt}`))
    )
  );
  const [textValue, setTextValue] = useState("");
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const value = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setStarterPromptValue(value);
    setTextValue(value);
  };
  useEffect(() => {}, [editorState]);
  return (
    <div className=" w-450 bg-gray-background shadow-lg">
      <div className=" bg-primary-darkGreen h-60 px-38 vp-600:px-16 py-13  rounded-t-md">
        <h4 className=" text-white-white">Starter Prompt</h4>
      </div>
      <div className=" pb-15 bg-white-white  rounded-b-md">
        <div className="h-86 bg-white-white flex items-center   px-38 vp-600:px-16 w-full overflow-hidden py-8">
          <h5>{discName}</h5>
        </div>

        <div className="px-38 vp-600:px-16">
          <div className="mb-17 px-16 py-8 pb-0 border bg-white-white rounded-xs  h-162 vp-600:h-190 flex flex-col border-border-dropdownLine ">
            <div className="flex   flex-col flex-grow relative w-full ">
              <div className="  h-full flex ">
                <Editor
                  editorState={editorState}
                  onEditorStateChange={onEditorStateChange}
                  toolbarClassName="flex absolute bottom-0 left-0 bg-transparent z-9999"
                  editorClassName="!overflow-none !text-md w-full  pb-20 "
                  toolbar={toolbarSettings}
                  placeholder={"say something different"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" h-40 px-38 vp-600:px-16 flex justify-end items-center w-full">
          {starterPromptLoading ? (
            <button className="btn w-75 h-32 text-md px-22">
              <WhiteLoader />
            </button>
          ) : (
            <button
              className="btn w-75 h-32  text-sm px-22"
              onClick={() => {
                setActiveSettings("duration");
                handleStarterPrompt();
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StarterPrompt;
