import React, { useState } from "react";
import styles from "@/styles/discussion.module.css";

import Image from "next/image";
import { PostingInspirations } from "@/utils/sampleData";

const FullPostInspirations = ({ setViewFullPostInsp }) => {
  const [activeInsp, setActiveInsp] = useState("Posting");
  return (
    <div className={` h-full  ${styles.hiddenScrollbar} `}>
      <div className="h-65 bg-gray-background flex items-center px-37">
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

      <div className={`px-37 mt-15`}>
        {activeInsp == "Posting" && (
          <div className="">
            {PostingInspirations.map((insp, index) => (
              <div key={index} className="mb-22">
                <div className="flex items-center mb-13">
                  <div className="flex items-center justify-center">
                    <Image
                      src={`${insp.categoryIcon}`}
                      alt={insp.category}
                      layout="fixed"
                      width="18"
                      height="18"
                    />
                  </div>
                  <p className="ml-12 text-xs text-black-analText ">
                    {insp.category}
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-6 ">
                  {insp.inspirations.map((title, index) => (
                    <div
                      className=" h-236 border border-gray-analyticsGray rounded-lg flex flex-col overflow-hidden"
                      key={index}
                    >
                      {" "}
                      <div className="flex-grow px-28   pt-16"></div>
                      <div className=" bg-blue-lightBlue h-50 px-28 flex items-center text-sm text-black-analText">
                        {" "}
                        {title.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FullPostInspirations;
