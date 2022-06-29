import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/viewDiscussion.module.css";
import ShowInspirations from "./ShowInspirations";

const CommentBox = ({ setActiveCommentBox }) => {
  const [openPostInspirationsDropDown, setOpenPostInspirationsDropDown] =
    useState(false);
  const [activeInspiration, setActiveInspiration] = useState("posting");
  const [activePreview, setActivePreview] = useState("");
  const PostingInspirations = [
    "Resources",
    "Polls",
    "Resources",
    "Resources",
    "Polls",
    "Resources",
  ];
  const SynthesizingInspirations = ["Threads", "Popular tags", "Connections"];
  return (
    <div className="h-122 border my-20">
      <div className="h-full border  rounded-lg border-primary-darkGreen py-12 px-20 flex items-end">
        <ShowInspirations setActiveCommentBox={setActiveCommentBox} />
      </div>
    </div>
  );
};

export default CommentBox;
