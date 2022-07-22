import React, { useState } from "react";
import styles from "@/styles/discussion.module.css";

import Image from "next/image";
import {
  PostingInspirations,
  RespondingInspirations,
  SynthesizingInspirations,
} from "@/utils/sampleData";
import FullInspirationTemp from "./FullInspirationTemp";
import FullInspCategoryTemp from "./FullInspCategoryTemp";
import FullInspButtonHeader from "./FullInspButtonHeader";

const FullPostInspirations = ({ setViewFullPostInsp, setActiveCommentBox }) => {
  const [activeInsp, setActiveInsp] = useState("Post with");
  const [seeInDetail, setSeeInDetail] = useState(false);
  return (
    <div className={` h-full  ${styles.hiddenScrollbar} `}>
      <div className="h-65 bg-gray-background flex items-center px-16 vp-min-601:px-42 vp-600:mt-20">
        <div className=" flex items-center ">
          <div
            className="flex items-center justify-center"
            onClick={() => setViewFullPostInsp(false)}
          >
            <Image
              src="https://res.cloudinary.com/insomaryland/image/upload/v1655331724/InsoImages/arrow_back_tqezov.svg"
              alt="back"
              layout="fixed"
              width="20"
              height="20"
            />
          </div>
          <h5 className="ml-13">Post Inspiration</h5>
        </div>
      </div>

      {seeInDetail ? (
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
      ) : (
        <div className="px-16 vp-min-601:px-42">
          <FullInspButtonHeader
            activeInsp={activeInsp}
            setActiveInsp={setActiveInsp}
          />
          {activeInsp === "Post with" && (
            <FullInspCategoryTemp
              arrayInsp={PostingInspirations}
              setSeeInDetail={setSeeInDetail}
            />
          )}
          {activeInsp === "Respond with" && (
            <FullInspCategoryTemp
              arrayInsp={RespondingInspirations}
              setSeeInDetail={setSeeInDetail}
            />
          )}
          {activeInsp === "Synthesize" && (
            <FullInspCategoryTemp
              arrayInsp={SynthesizingInspirations}
              setSeeInDetail={setSeeInDetail}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default FullPostInspirations;
