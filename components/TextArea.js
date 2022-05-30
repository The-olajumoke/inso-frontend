import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const TextArea = ({ value, setValue, placeholder, required, disabled }) => {
  const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });
  // const ReactQuill = dynamic(() => import("react-quill"), {
  //   ssr: false,
  // });
  const ReactQuill = dynamic(import("react-quill"), {
    ssr: false,
  });

  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setValue((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  // const handleBody = (e) => {
  //   console.log(e);
  //   setValue(e.target.value);
  // };
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  const formats = ["bold", "italic", "underline", "list", "bullet", "align"];
  return (
    <div className="flex flex-col flex-grow relative w-300 ">
      {showPicker && (
        <div className="absolute  -top-96  -right-28 w-333">
          <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
        </div>
      )}

      <textarea
        placeholder={placeholder || "Enter"}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        name=""
        className=" border-none"
      ></textarea>

      <div className="h-24 flex items-center  gap-10">
        <button>
          <Image
            src="/icons/font_icon.svg"
            alt="font"
            layout="fixed"
            width="20"
            height="20"
            className=" cursor-pointer"
          />
        </button>
        <button onClick={() => setShowPicker((val) => !val)}>
          <Image
            src="/icons/emoji_icon.svg"
            alt="emoji"
            layout="fixed"
            width="22"
            height="22"
            className=" cursor-pointer"
          />
        </button>
        <button>
          <Image
            src="/icons/attach_icon.svg"
            alt="attach"
            layout="fixed"
            width="20"
            height="20"
            className=" cursor-pointer"
          />
        </button>
        <button>
          <Image
            src="/icons/image_icon.svg"
            alt="image"
            layout="fixed"
            width="18"
            height="18"
            className=" cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default TextArea;
{
  /* //<ReactQuill
      // theme="snow"
      // placeholder="Write Something"
      // value={value}
      // modules={modules}
      // formats={formats}
      // onChange={handleBody}
     // /> */
}
