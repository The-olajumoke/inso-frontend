import React, { useState } from "react";
import Image from "next/image";
import Inspiration from "./Inspiration";
import styles from "@/styles/postInspiration.module.css";
import PostInspCategory from "./PostInspCategory";

import {
  PostingInspirations,
  RespondingInspirations,
} from "@/utils/sampleData";
import { SynthesizingInspirations } from "@/utils/sampleData";
const PostInspiration = ({
  setActiveSettings,
  setViewInspirations,
  setActiveViewInspiration,
  activeInspiration,
  setActiveInspiration,
  activeDetailedInsp,
  setActiveDetailedInsp,
  showDetailedInsp,
  setShowDetailedInsp,
  addInspirationToSettings,
  setAddInspirationToSettings,
}) => {
  // POSTING
  const askSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Ask Something"
  );
  const connectSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Connect something"
  );
  const createSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Create something"
  );
  const shareSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Share something"
  );
  const startSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Start something"
  );
  //RESPONDING
  const addInsp = RespondingInspirations.filter(
    (insp) => insp.category === "Add"
  );
  const answerInsp = RespondingInspirations.filter(
    (insp) => insp.category === "Answer"
  );
  const askInsp = RespondingInspirations.filter(
    (insp) => insp.category === "Ask"
  );
  const evaluateInsp = RespondingInspirations.filter(
    (insp) => insp.category === "Evaluate"
  );
  const reactInsp = RespondingInspirations.filter(
    (insp) => insp.category === "React"
  );
  // SYNTHESIZING

  const connectionsInsp = SynthesizingInspirations.filter(
    (insp) => insp.category === "Connections"
  );
  const tagsInsp = SynthesizingInspirations.filter(
    (insp) => insp.category === "Tags"
  );
  const threadsInsp = SynthesizingInspirations.filter(
    (insp) => insp.category === "Thread"
  );

  return (
    <div className=" flex-grow flex flex-col ">
      <div className="px-16 vp-min-601:px-30 flex items-center justify-between pb-6 bg-white-white">
        <p className=" text-xs">Post inspiration</p>
        <label className={`${styles.switch}`}>
          <input
            type="checkbox"
            name="reports"
            id="postInspiration"
            checked={addInspirationToSettings}
            onChange={() =>
              setAddInspirationToSettings(!addInspirationToSettings)
            }
          />
          <span
            className={`${styles.slider} ${styles.round} "slider round"`}
          ></span>
        </label>
      </div>

      {showDetailedInsp ? (
        <div className={`py-8 bg-gray-background flex-grow `}>
          {activeDetailedInsp === "Ask Something" && (
            <PostInspCategory
              inspiration={askSomethingInsp[0]}
              setActiveInspiration={setActiveInspiration}
              setActiveViewInspiration={setActiveViewInspiration}
              setViewInspirations={setViewInspirations}
              setShowDetailedInsp={setShowDetailedInsp}
            />
          )}
          {activeDetailedInsp === "Connect something" && (
            <PostInspCategory
              inspiration={connectSomethingInsp[0]}
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
          {activeDetailedInsp === "Share something" && (
            <PostInspCategory
              inspiration={shareSomethingInsp[0]}
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

          {activeDetailedInsp === "Add" && (
            <PostInspCategory
              inspiration={addInsp[0]}
              setActiveInspiration={setActiveInspiration}
              setActiveViewInspiration={setActiveViewInspiration}
              setViewInspirations={setViewInspirations}
              setShowDetailedInsp={setShowDetailedInsp}
            />
          )}
          {activeDetailedInsp === "Answer" && (
            <PostInspCategory
              inspiration={answerInsp[0]}
              setActiveInspiration={setActiveInspiration}
              setActiveViewInspiration={setActiveViewInspiration}
              setViewInspirations={setViewInspirations}
              setShowDetailedInsp={setShowDetailedInsp}
            />
          )}
          {activeDetailedInsp === "Ask" && (
            <PostInspCategory
              inspiration={askInsp[0]}
              setActiveInspiration={setActiveInspiration}
              setActiveViewInspiration={setActiveViewInspiration}
              setViewInspirations={setViewInspirations}
              setShowDetailedInsp={setShowDetailedInsp}
            />
          )}
          {activeDetailedInsp === "Evaluate" && (
            <PostInspCategory
              inspiration={evaluateInsp[0]}
              setActiveInspiration={setActiveInspiration}
              setActiveViewInspiration={setActiveViewInspiration}
              setViewInspirations={setViewInspirations}
              setShowDetailedInsp={setShowDetailedInsp}
            />
          )}
          {activeDetailedInsp === "React" && (
            <PostInspCategory
              inspiration={reactInsp[0]}
              setActiveInspiration={setActiveInspiration}
              setActiveViewInspiration={setActiveViewInspiration}
              setViewInspirations={setViewInspirations}
              setShowDetailedInsp={setShowDetailedInsp}
            />
          )}
          {activeDetailedInsp === "Connections" && (
            <PostInspCategory
              inspiration={connectionsInsp[0]}
              setActiveInspiration={setActiveInspiration}
              setActiveViewInspiration={setActiveViewInspiration}
              setViewInspirations={setViewInspirations}
              setShowDetailedInsp={setShowDetailedInsp}
            />
          )}
          {activeDetailedInsp === "Tags" && (
            <PostInspCategory
              inspiration={tagsInsp[0]}
              setActiveInspiration={setActiveInspiration}
              setActiveViewInspiration={setActiveViewInspiration}
              setViewInspirations={setViewInspirations}
              setShowDetailedInsp={setShowDetailedInsp}
            />
          )}
          {activeDetailedInsp === "Thread" && (
            <PostInspCategory
              inspiration={threadsInsp[0]}
              setActiveInspiration={setActiveInspiration}
              setActiveViewInspiration={setActiveViewInspiration}
              setViewInspirations={setViewInspirations}
              setShowDetailedInsp={setShowDetailedInsp}
            />
          )}
        </div>
      ) : (
        <div
          className={`${
            !addInspirationToSettings && " opacity-20"
          } px-16 vp-min-601:px-30 py-10   flex-grow bg-gray-background  `}
        >
          <div className="grid  grid-cols-3 text-sm gap-8 mb-12">
            <button
              className={`${
                activeInspiration === "posting" ? "btn" : "btn-nonActive"
              }   h-25 text-xs`}
              onClick={() => setActiveInspiration("posting")}
            >
              Post
            </button>
            <button
              className={`${
                activeInspiration === "responding" ? "btn" : "btn-nonActive"
              }   h-25 text-xs`}
              onClick={() => setActiveInspiration("responding")}
            >
              Respond
            </button>

            <button
              className={`${
                activeInspiration === "synthesizing" ? "btn" : "btn-nonActive"
              }   h-25 text-xs `}
              onClick={() => setActiveInspiration("synthesizing")}
            >
              Synthesize
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
          {activeInspiration === "responding" && (
            <div className="">
              {RespondingInspirations.map((insp, index) => (
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
                  <Inspiration
                    key={index}
                    insp={insp}
                    setActiveDetailedInsp={setActiveDetailedInsp}
                    setShowDetailedInsp={setShowDetailedInsp}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      <div className="h-40 flex justify-between items-center w-full px-16 vp-min-601:px-30">
        <div className="flex items-center">
          <div
            className="flex justify-center items-center mr-75"
            onClick={() => {
              setActiveSettings("StarterPrompt");
            }}
          >
            <Image
              src="/icons/arrow_left_blue.svg"
              alt="back"
              layout="fixed"
              width="16"
              height="16"
            />
          </div>
          <div
            className="flex justify-center items-center"
            onClick={() => {
              setActiveSettings("Scores");
            }}
          >
            <Image
              src="/icons/arrow_right_blue.svg"
              alt="back"
              layout="fixed"
              width="16"
              height="16"
            />
          </div>
        </div>
        <button
          className="btn bg-border-line text-white-white w-auto px-16 h-30 text-sm"
          disabled={addInspirationToSettings ? false : true}
          onClick={() => {
            setActiveSettings("Scores");
          }}
        >
          {addInspirationToSettings ? "Continue" : "Save & Continue"}
        </button>
      </div>
    </div>
  );
};

export default PostInspiration;
