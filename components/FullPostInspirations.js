import React, { useState } from "react";
import styles from "@/styles/discussion.module.css";

import Image from "next/image";

import FullInspirationTemp from "./FullInspirationTemp";

import FullInspButtonHeader from "./FullInspButtonHeader";

const FullPostInspirations = ({
  setViewFullPostInsp,
  setActiveCommentBox,
  PostingInspirations,
  RespondingInspirations,
  SynthesizingInspirations,
}) => {
  const [activeInsp, setActiveInsp] = useState("Post with");

  return (
    <div className={` h-full  ${styles.hiddenScrollbar} `}>
      <div className="h-65 bg-gray-background flex items-center px-16 vp-min-601:px-42 vp-600:mt-20">
        <div className=" flex items-center ">
          <div
            className="flex items-center justify-center"
            onClick={() => setViewFullPostInsp(false)}
          >
            <Image
              src="/static/icons/arrow_back_blue.svg"
              alt="back"
              layout="fixed"
              width="30"
              height="30"
            />
          </div>
          <h5 className="ml-13">Post Inspiration</h5>
        </div>
      </div>

      <div className={`px-16 vp-min-601:px-42 mt-15`}>
        <FullInspButtonHeader
          activeInsp={activeInsp}
          setActiveInsp={setActiveInsp}
        />
        {activeInsp == "Post with" && (
          <FullInspirationTemp
            arrayInsp={PostingInspirations}
            setViewFullPostInsp={setViewFullPostInsp}
            setActiveCommentBox={setActiveCommentBox}
          />
        )}
        {activeInsp == "Respond with" && (
          <FullInspirationTemp
            arrayInsp={RespondingInspirations}
            setViewFullPostInsp={setViewFullPostInsp}
            setActiveCommentBox={setActiveCommentBox}
          />
        )}
        {activeInsp == "Synthesize" && (
          <FullInspirationTemp
            arrayInsp={SynthesizingInspirations}
            setViewFullPostInsp={setViewFullPostInsp}
            setActiveCommentBox={setActiveCommentBox}
          />
        )}
      </div>
    </div>
  );
};

export default FullPostInspirations;
