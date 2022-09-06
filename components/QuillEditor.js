import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import WhiteLoader from "./whiteLoader";
import Image from "next/image";
// import "quill-mention";
// import { ReactQuillProps, UnprivilegedEditor } from "react-quill";
// import { DeltaStatic, Sources } from "quill";

import CloseToolbar from "../public/static/new_icons/cancel_blue.svg";
const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
// const Quill = require("quill");
// const Quill =
//   typeof window === "object" ? require("react-quill").default : () => false;
const quillEmoji =
  typeof window === "object" ? require("quill-emoji").default : () => false;

export default function QuillEditor({
  value,
  setValue,
  toolbarOpen,
  toggleToolBar,
  onButtonClick,
}) {
  const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;
  const reactQuillRef = React.useRef();

  // useEffect(() => {
  //   if (typeof window === "object") {
  //    ReactQuill.register(
  //       {
  //         "formats/emoji": EmojiBlot,
  //         "modules/emoji-shortname": ShortNameEmoji,
  //         "modules/emoji-toolbar": ToolbarEmoji,
  //         "modules/emoji-textarea": TextAreaEmoji,
  //       },
  //       true
  //     );
  //   }
  // }, []);

  let toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],

    ["emoji"],
    ["link", "image", "video"],
  ];
  const inputOpenImageRef = React.createRef();

  const modules = {
    toolbar: toolbarOptions,

    "emoji-toolbar": true,
    "emoji-textarea": true,
    "emoji-shortname": true,
  };

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "emoji",
    "indent",
    "indent",
    "link",
    "image",
    "video",
  ];
  // const handleBody = (e) => {
  //   setValue(e);
  // };

  console.log(value);

  const handleChange = (value) => setValue(value);

  const checkCharacterCount = (event) => {
    console.log(reactQuillRef);
    // const unprivilegedEditor = reactQuillRef.current.unprivilegedEditor;
    // if (unprivilegedEditor.getLength() > 280 && event.key !== "Backspace")
    //   event.preventDefault();
  };
  return (
    <div className={`${toolbarOpen ? "quillShow" : "quillCont"} h-full `}>
      <ReactQuill
        id="editor"
        onKeyDown={checkCharacterCount}
        ref={reactQuillRef}
        // value={this.state.text}
        onChange={handleChange}
        theme="snow"
        modules={modules}
        formats={formats}
        // value={value}
        // onChange={handleBody}
        placeholder={"Say something different"}
      />
      {toolbarOpen == null && (
        <div className="fixed  w-8/12   right-24 bottom-4 flex items-end justify-between mb-8">
          <button
            className="h-27 w-27 bg-other-yellow rounded-full"
            onClick={toggleToolBar}
          >
            <Image
              src={CloseToolbar}
              alt="toolbar"
              layout="fixed"
              width="12"
              height="12"
              className=" cursor-pointer"
            />
          </button>

          <button
            // disabled={btnIsActive}
            onClick={onButtonClick}
            className="w-93 h-34 text-sm  btn bg-primary-blue"
          >
            {/* {postLoading ? <WhiteLoader /> : "Send"} */}
            Send
          </button>
        </div>
      )}
      {/* <button onClick={() => setShowToolbar(!showToolbar)}>Show</button> */}
      {/* <button onClick={imageHandler}>Image</button> */}
    </div>
  );
}
