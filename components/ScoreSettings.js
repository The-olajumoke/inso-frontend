import React, { useState } from "react";
import Image from "next/image";
import SavedSettings from "./SavedSettings";
import NewSettings from "./NewSettings";
import styles from "@/styles/postInspiration.module.css";

export const ScoreSettings = ({
  setActiveSettings,
  setViewInspirations,
  addScoresToSettings,
  setAddScoresToSettings,
  setActiveViewInspiration,
}) => {
  const [showSavedSettings, setShowSavedSettings] = useState(false);
  const settings = ["Setting 1", "Setting 2", "Setting 3"];

  return (
    <div className=" flex flex-col justify-between  flex-grow">
      <div className="px-45 mb-20 flex items-center justify-between ">
        <h6 className="">Scores</h6>
        <label className={`${styles.switch}`}>
          <input
            type="checkbox"
            name="reports"
            id="postInspiration"
            checked={addScoresToSettings}
            onChange={() => setAddScoresToSettings(!addScoresToSettings)}
          />
          <span
            className={`${styles.slider} ${styles.round} "slider round"`}
          ></span>
        </label>
      </div>
      <div className="flex-grow">
        <div className="h-55 bg-gray-background w-full flex items-center justify-between px-45 mb-10 cursor-pointer ">
          <div className="flex">
            <div className="flex items-center justify-center mr-16">
              <Image
                src="/icons/settings_icon.svg"
                alt="settings"
                layout="fixed"
                width="18"
                height="18"
              />
            </div>
            <h4 className=" text-black-analText">Create settings</h4>
          </div>

          <div>
            <Image
              src="/icons/arrow_right_grey.svg"
              alt="back"
              layout="fixed"
              width="16"
              height="16"
            />
          </div>
        </div>
        <div
          className="h-55 bg-gray-background w-full flex items-center justify-between px-45"
          onClick={() => setShowSavedSettings(!showSavedSettings)}
        >
          <div className="flex cursor-pointer">
            <div className="flex items-center justify-center mr-16">
              <Image
                src="/icons/saved_settings.svg"
                alt="settings"
                layout="fixed"
                width="18"
                height="18"
              />
            </div>
            <h4
              className={` ${
                showSavedSettings
                  ? "text-primary-darkGreen"
                  : " text-black-analText"
              }`}
            >
              Saved settings
            </h4>
          </div>

          <div>
            <Image
              src={
                showSavedSettings
                  ? "/icons/arrow_up.svg"
                  : "/icons/arrow_down.svg"
              }
              alt="back"
              layout="fixed"
              width="16"
              height="16"
            />
          </div>
        </div>
        {showSavedSettings && (
          <div className="bg-gray-createDisc flex flex-col flex-grow pb-20">
            {settings.map((setting, index) => (
              <SavedSettings
                key={index}
                title={setting}
                setViewInspirations={setViewInspirations}
                setActiveViewInspiration={setActiveViewInspiration}
              />
            ))}
          </div>
        )}
      </div>

      <div className="h-54 flex justify-between items-center w-full px-45">
        <div className="flex items-center">
          <div
            className="flex justify-center items-center mr-75"
            onClick={() => {
              setActiveSettings("Scores");
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
              setActiveSettings("Calendar");
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
          className="btn bg-border-line text-white-white w-auto px-16 h-38 text-md"
          disabled={addScoresToSettings ? false : true}
          onClick={() => {
            setActiveSettings("Calendar");
          }}
        >
          {addScoresToSettings ? "Continue" : "Save & Continue"}
        </button>
      </div>
    </div>
  );
};
