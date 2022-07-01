import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/switch.module.css";
const Calendar = ({ setViewInspirations, setActiveViewInspiration, date }) => {
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  return (
    <div className=" flex-grow flex flex-col">
      <div className="px-45 mb-20 flex items-center justify-between bg-white ">
        <h6 className="">Calendar</h6>
        <label className={`${styles.switch}`}>
          <input type="checkbox" name="reports" id="postInspiration" />
          <span
            className={`${styles.slider} ${styles.round} "slider round"`}
          ></span>
        </label>
      </div>
      <div className="px-45 py-10 h-300 flex-grow overflow-y-auto bg-gray-createDisc">
        <div className="mb-15">
          <p className=" text-primary-darkGreen  mb-8">Open</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex justify-center items-center mr-12">
                <Image
                  src="/icons/clock.svg"
                  alt="clock"
                  layout="fixed"
                  width="20"
                  height="20"
                />
              </div>
              <p className="  text-black-analText">8:00 AM</p>
            </div>
            <div
              className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center text-black-analText cursor-pointer"
              onClick={() => {
                setViewInspirations(true);
                setActiveViewInspiration("Calendar");
              }}
            >
              <p className="text-black-analText">
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
          <p className=" text-primary-darkGreen  mb-8">Close</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex justify-center items-center mr-12">
                <Image
                  src="/icons/clock.svg"
                  alt="clock"
                  layout="fixed"
                  width="20"
                  height="20"
                />
              </div>
              <p className="  text-black-analText">8:00 AM</p>
            </div>
            <div
              className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center text-black-analText"
              onClick={() => {
                setViewInspirations(true);
                setActiveViewInspiration("Calendar");
              }}
            >
              <p className="text-black-analText">
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

        <p className=" text-border-dropdownLine mb-32">Duration : 6 days</p>

        <div className={` flex justify-between items-center pb-15`}>
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
                width="15"
                height="15"
              />
            </button>
            <p className=" ml-12 text-primary-darkGreen">Advanced settings</p>
          </div>
          <div className="flex items-center">
            <label className={`${styles.switch} `}>
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
          </div>
        </div>
        {showAdvancedSettings && (
          <>
            <div className="mb-15">
              <p className=" text-primary-darkGreen  mb-8">Posting</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex justify-center items-center mr-12">
                    <Image
                      src="/icons/clock.svg"
                      alt="clock"
                      layout="fixed"
                      width="20"
                      height="20"
                    />
                  </div>
                  <p className="  text-black-analText">8:00 AM</p>
                </div>
                <div className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center text-black-analText">
                  <p className="text-black-analText">Fri 1st, January 2021</p>
                </div>
              </div>
            </div>
            <div className="mb-15">
              <p className=" text-primary-darkGreen  mb-8">Responding</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex justify-center items-center mr-12">
                    <Image
                      src="/icons/clock.svg"
                      alt="clock"
                      layout="fixed"
                      width="20"
                      height="20"
                    />
                  </div>
                  <p className="  text-black-analText">8:00 AM</p>
                </div>
                <div className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center text-black-analText">
                  <p className="text-black-analText">Fri 1st, January 2021</p>
                </div>
              </div>
            </div>
            <div className="mb-15">
              <p className=" text-primary-darkGreen  mb-8">Synthesizing</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex justify-center items-center mr-12">
                    <Image
                      src="/icons/clock.svg"
                      alt="clock"
                      layout="fixed"
                      width="20"
                      height="20"
                    />
                  </div>
                  <p className="text-black-analText">8:00 AM</p>
                </div>
                <div className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center text-black-analText">
                  <p className="text-black-analText">Fri 1st, January 2021</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
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

export default Calendar;
