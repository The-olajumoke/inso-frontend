import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/switch.module.css";
const Calendar = ({
  setActiveSettings,
  setViewInspirations,
  setActiveViewInspiration,
  date,
  addCalendarToSettings,
  setAddCalendarToSettings,
}) => {
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  return (
    <div className=" flex-grow flex flex-col ">
      <div className="px-16 vp-min-601:px-30 mb-10 flex items-center justify-between bg-white ">
        <p className=" text-xs text-black-postInsp">Calendar</p>
        <label className={`${styles.switch}`}>
          <input
            type="checkbox"
            name="reports"
            id="postInspiration"
            checked={addCalendarToSettings}
            onChange={() => setAddCalendarToSettings(!addCalendarToSettings)}
          />
          <span
            className={`${styles.slider} ${styles.round} "slider round"`}
          ></span>
        </label>
      </div>
      <div className="  px-16 vp-min-601:px-30 py-10 h-250 flex-grow overflow-y-auto  bg-gray-background">
        <div className="mb-9 ">
          <span
            style={{ fontSize: "10px" }}
            className=" text-primary-darkGreen  mb-4"
          >
            Open
          </span>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex justify-center items-center mr-12">
                <Image
                  src="/icons/clock.svg"
                  alt="clock"
                  layout="fixed"
                  width="16"
                  height="16"
                />
              </div>
              <p className="text-xs  text-black-analText">8:00 AM</p>
            </div>
            <div
              className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center text-black-analText cursor-pointer"
              onClick={() => {
                setViewInspirations(true);
                setActiveViewInspiration("Calendar");
              }}
            >
              <p className="text-black-analText text-xs">
                {" "}
                {date[0].toLocaleString("en-US", {
                  weekday: "short",
                  day: "numeric",
                  year: "numeric",
                  month: "long",
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <span
            style={{ fontSize: "10px" }}
            className=" text-primary-darkGreen  mb-4"
          >
            Close
          </span>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex justify-center items-center mr-12">
                <Image
                  src="/icons/clock.svg"
                  alt="clock"
                  layout="fixed"
                  width="16"
                  height="16"
                />
              </div>
              <p className="text-xs  text-black-analText">8:00 AM</p>
            </div>
            <div
              className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center text-black-analText"
              onClick={() => {
                setViewInspirations(true);
                setActiveViewInspiration("Calendar");
              }}
            >
              <p className="text-black-analText text-xs">
                {" "}
                {date[1].toLocaleString("en-US", {
                  weekday: "short",
                  day: "numeric",
                  year: "numeric",
                  month: "long",
                })}
              </p>
            </div>
          </div>
        </div>

        <span
          style={{ fontSize: "10px" }}
          className=" text-border-dropdownLine "
        >
          Duration : 6 days
        </span>

        <div className={` mt-30 flex justify-between items-center pb-15`}>
          <div className="flex items-center">
            <button
              onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
              className="flex justify-center items-center"
            >
              <Image
                src={
                  showAdvancedSettings
                    ? "/icons/arrow_up.svg"
                    : "/icons/arrow_down.svg"
                }
                alt="arrows"
                layout="fixed"
                width="12"
                height="12"
              />
            </button>

            <span
              style={{ fontSize: "10px" }}
              className=" ml-12 text-primary-darkGreen"
            >
              Advanced settings
            </span>
          </div>
          <div className="flex items-center">
            <label className={`${styles.switch} `}>
              <input
                type="checkbox"
                name="reports"
                id="postInspiration"
                checked={showAdvancedSettings}
                onChange={() => setShowAdvancedSettings(!showAdvancedSettings)}
              />
              <span
                className={`${styles.slider} ${styles.round} "slider round"`}
              ></span>
            </label>
          </div>
        </div>
        {showAdvancedSettings && (
          <div className="">
            <div className="mb-15 ">
              <span
                style={{ fontSize: "10px" }}
                className=" text-primary-darkGreen  mb-4"
              >
                Posting
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex justify-center items-center mr-12">
                    <Image
                      src="/icons/clock.svg"
                      alt="clock"
                      layout="fixed"
                      width="16"
                      height="16"
                    />
                  </div>
                  <p className="text-xs  text-black-analText">8:00 AM</p>
                </div>
                <div className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center text-black-analText">
                  <p className="text-black-analText text-xs">
                    {" "}
                    {date[0].toLocaleString("en-US", {
                      weekday: "short",
                      day: "numeric",
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-15">
              <span
                style={{ fontSize: "10px" }}
                className=" text-primary-darkGreen  mb-4"
              >
                Responding
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex justify-center items-center mr-12">
                    <Image
                      src="/icons/clock.svg"
                      alt="clock"
                      layout="fixed"
                      width="16"
                      height="16"
                    />
                  </div>
                  <p className="text-xs  text-black-analText">8:00 AM</p>
                </div>
                <div className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center text-black-analText">
                  <p className="text-black-analText text-xs">
                    {" "}
                    {date[1].toLocaleString("en-US", {
                      weekday: "short",
                      day: "numeric",
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-15">
              <span
                style={{ fontSize: "10px" }}
                className=" text-primary-darkGreen  mb-4"
              >
                Synthesizing
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex justify-center items-center mr-12">
                    <Image
                      src="/icons/clock.svg"
                      alt="clock"
                      layout="fixed"
                      width="16"
                      height="16"
                    />
                  </div>
                  <p className="text-xs  text-black-analText">8:00 AM</p>
                </div>
                <div className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center text-black-analText">
                  <p className="text-black-analText text-xs">
                    {" "}
                    {date[1].toLocaleString("en-US", {
                      weekday: "short",
                      day: "numeric",
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=" h-40 flex justify-between items-center w-full px-16 vp-min-601:px-30">
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
          <div className="justify-center items-center hidden">
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
          disabled={addCalendarToSettings ? false : true}
        >
          {addCalendarToSettings ? "Continue" : "Save & Continue"}
        </button>
      </div>
    </div>
  );
};

export default Calendar;
