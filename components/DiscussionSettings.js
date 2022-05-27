import Image from "next/image";
import React, { useState } from "react";
import PostInspiration from "./PostInspiration";
import TextArea from "./TextArea";
import styles from "@/styles/postInspiration.module.css";
const DiscussionSettings = ({ setActiveSection }) => {
  const [starterPrompt, setStarterPrompt] = useState(false);
  const [postInspiration, setPostInspiration] = useState(false);
  const [starterPromptValue, setStarterPromptValue] = useState("");
  const [settingsDisabled, setSettingsDisabled] = useState(true);
  return (
    <div
      style={{ minHeight: "293px" }}
      className=" order bg-gray-createDisc py-50 px-50  pt-38"
    >
      {/* STARTER PROMPT */}
      <div className="w-full  mb-23">
        <div className={`flex justify-between items-center`}>
          <h5 className=" text-gray-text">Starter prompt</h5>
          <button onClick={() => setStarterPrompt(!starterPrompt)}>
            <Image
              src={
                starterPrompt ? "/icons/arrow_up.svg" : "/icons/arrow_down.svg"
              }
              alt="arrows"
              layout="fixed"
              width="15"
              height="15"
            />
          </button>
        </div>
        {starterPrompt && (
          <div className="mt-18 p-12 border rounded-xs  h-145 bg-white-white flex flex-col border-border-dropdownLine ">
            <TextArea
              placeholder="For this discussion, we are going to explore ______"
              value={starterPromptValue}
              setValue={setStarterPromptValue}
            />
          </div>
        )}
      </div>

      {/* POST INSPIRATION*/}
      <div className="w-full  mb-23">
        <div className={`flex justify-between items-center `}>
          <h5 className=" text-gray-text">Post Inspiration</h5>
          <div className="flex items-center">
            <label className={`${styles.switch} mr-45`}>
              <input
                type="checkbox"
                name="reports"
                id="postInspiration"
                // className={`${styles.switch}`}
              />
              <span
                className={`${styles.slider} ${styles.round} "slider round"`}
              ></span>
            </label>

            <button onClick={() => setActiveSection("postInspiration")}>
              <Image
                src={
                  postInspiration
                    ? "/icons/arrow_up.svg"
                    : "/icons/arrow_down.svg"
                }
                alt="arrows"
                layout="fixed"
                width="15"
                height="15"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Scores*/}
      <div className="w-full  mb-23">
        <div className={`flex justify-between items-center `}>
          <h5 className=" text-gray-text">Scores</h5>
          <div className="flex items-center">
            <label className={`${styles.switch} mr-45`}>
              <input
                type="checkbox"
                name="reports"
                id="postInspiration"
                // className={`${styles.switch}`}
              />
              <span
                className={`${styles.slider} ${styles.round} "slider round"`}
              ></span>
            </label>

            <button onClick={() => setActiveSection("ScoreSettings")}>
              <Image
                src={
                  postInspiration
                    ? "/icons/arrow_up.svg"
                    : "/icons/arrow_down.svg"
                }
                alt="arrows"
                layout="fixed"
                width="15"
                height="15"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionSettings;
