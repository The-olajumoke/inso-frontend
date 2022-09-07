import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
// import "quill-mention";
// import { ReactQuillProps, UnprivilegedEditor } from "react-quill";
// import { DeltaStatic, Sources } from "quill";

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
  postLoading,
  postSuccess,
  setBtnIsActive,
  btnIsActive,
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

  const handleBody = (content, delta, source, editor) => {
    console.log(editor.getHTML()); // rich text
    console.log(editor.getText()); // plain text
    console.log(editor.getLength()); // number of characters
    setValue(editor.getHTML());
    if (editor.getLength() > 1) {
      setBtnIsActive(true);
    } else {
      setBtnIsActive(false);
    }
  };
  console.log(value);

  return (
    <div className={`${toolbarOpen ? "quillShow" : "quillCont"} h-full `}>
      <ReactQuill
        id="editor"
        // ref={reactQuillRef}
        theme="snow"
        modules={modules}
        value={value}
        formats={formats}
        onChange={handleBody}
        placeholder={"Say something different"}
      />
    </div>
  );
}
