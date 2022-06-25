import React, { useState } from "react";
import Image from "next/image";
import Inspiration from "./Inspiration";
import SynthInspiration from "./SynthInspiration";
import styles from "@/styles/postInspiration.module.css";
import PostInspCategory from "./PostInspCategory";

import { PostingInspirations } from "@/utils/sampleData";
import { SynthesizingInspirations } from "@/utils/sampleData";
import PostingInspTemp from "./PostingInspTemp";
const PostInspiration = ({ setViewInspirations, setActiveViewInspiration }) => {
  const [activeInspiration, setActiveInspiration] = useState("posting");
  const [showDetailedInsp, setShowDetailedInsp] = useState(false);
  const [activeDetailedInsp, setActiveDetailedInsp] = useState("");
  const shareSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Share something"
  );
  const createSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Create something"
  );
  const startSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Start something"
  );
  const connectionSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Make a connection"
  );
  const exploreSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Explore your thinking"
  );
  const considerSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Consider complications"
  );
  return (
    <div className=" flex-grow flex flex-col">
      <div className="px-45 flex items-center justify-between pb-18 bg-white-white">
        <h6 className="">Post inspiration</h6>
        <label className={`${styles.switch}`}>
          <input type="checkbox" name="reports" id="postInspiration" />
          <span
            className={`${styles.slider} ${styles.round} "slider round"`}
          ></span>
        </label>
      </div>

      {showDetailedInsp ? (
        <div className="py-21 bg-gray-background">
          {activeDetailedInsp === "Share something" && (
            <PostInspCategory
              inspiration={shareSomethingInsp[0]}
              setActiveInspiration={setActiveInspiration}
              setActiveViewInspiration={setActiveViewInspiration}
              setViewInspirations={setViewInspirations}
              setShowDetailedInsp={setShowDetailedInsp}
            />
          )}
          {activeDetailedInsp === "Create something" && (
            <PostInspCategory
              inspiration={createSomethingInsp[0]}
              setActiveInspiration={setActiveInspiration}
              setActiveViewInspiration={setActiveViewInspiration}
              setViewInspirations={setViewInspirations}
              setShowDetailedInsp={setShowDetailedInsp}
            />
          )}
          {activeDetailedInsp === "Start something" && (
            <PostInspCategory
              inspiration={startSomethingInsp[0]}
              setActiveInspiration={setActiveInspiration}
              setActiveViewInspiration={setActiveViewInspiration}
              setViewInspirations={setViewInspirations}
              setShowDetailedInsp={setShowDetailedInsp}
            />
          )}
          {activeDetailedInsp === "Explore your thinking" && (
            <PostInspCategory
              inspiration={exploreSomethingInsp[0]}
              setActiveInspiration={setActiveInspiration}
              setActiveViewInspiration={setActiveViewInspiration}
              setViewInspirations={setViewInspirations}
              setShowDetailedInsp={setShowDetailedInsp}
            />
          )}
          {activeDetailedInsp === "Consider complications" && (
            <PostInspCategory
              inspiration={considerSomethingInsp[0]}
              setActiveInspiration={setActiveInspiration}
              setActiveViewInspiration={setActiveViewInspiration}
              setViewInspirations={setViewInspirations}
              setShowDetailedInsp={setShowDetailedInsp}
            />
          )}
        </div>
      ) : (
        <div className=" px-45 py-10   flex-grow bg-gray-background  ">
          <div className="grid  grid-cols-2 text-sm gap-8 mb-20">
            <button
              className={`${
                activeInspiration === "posting" ? "btn" : "btn-nonActive"
              }   h-30`}
              onClick={() => setActiveInspiration("posting")}
            >
              Post/Respond with
            </button>

            <button
              className={`${
                activeInspiration === "synthesizing" ? "btn" : "btn-nonActive"
              }   h-30`}
              onClick={() => setActiveInspiration("synthesizing")}
            >
              Synthesise
            </button>
          </div>
          {activeInspiration === "posting" && (
            <div className="">
              {PostingInspirations.map((insp, index) => (
                <Inspiration
                  key={index}
                  insp={insp}
                  setActiveDetailedInsp={setActiveDetailedInsp}
                  setShowDetailedInsp={setShowDetailedInsp}
                />
              ))}
            </div>
          )}

          {activeInspiration === "synthesizing" && (
            <div className=" h-auto">
              <div className="">
                {SynthesizingInspirations.map((insp, index) => (
                  <PostingInspTemp
                    title={insp.title}
                    key={index}
                    checked={true}
                    icon={insp.icon}
                    setActiveViewInspiration={setActiveViewInspiration}
                    setViewInspirations={setViewInspirations}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      <div className="h-54 flex justify-between items-center w-full px-45">
        <div className="flex items-center">
          <div className="flex justify-center items-center mr-75">
            <Image
              src="/icons/arrow_left_blue.svg"
              alt="back"
              layout="fixed"
              width="16"
              height="16"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/icons/arrow_right_blue.svg"
              alt="back"
              layout="fixed"
              width="16"
              height="16"
            />
          </div>
        </div>
        <button className="btn bg-border-line text-white-white w-94 h-38 text-md">
          Save
        </button>
      </div>
    </div>
  );
};

export default PostInspiration;
