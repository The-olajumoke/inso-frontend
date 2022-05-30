import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/switch.module.css";
const Calendar = ({ setActiveSection }) => {
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  return (
    <div className="pt-18 pb-40">
      <div className=" bg-white-white h-55 flex items-center px-45 justify-between">
        <div className="flex items-center">
          <button
            className="flex items-center justify-center"
            onClick={() => setActiveSection("discussions")}
          >
            <Image
              src="/icons/arrow_left_green.svg"
              alt="back"
              layout="fixed"
              width="20"
              height="20"
            />
          </button>
          <h3 className="ml-30  font-medium">Calendar</h3>
        </div>
      </div>
      <div className="px-45 py-32 bg-gray-createDisc">
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
              <p className=" text-gray-text">8:00 AM</p>
            </div>
            <div className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center">
              <p>Fri 1st, January 2021</p>
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
              <p className=" text-gray-text">8:00 AM</p>
            </div>
            <div className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center">
              <p>Fri 1st, January 2021</p>
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
                  <p className=" text-gray-text">8:00 AM</p>
                </div>
                <div className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center">
                  <p>Fri 1st, January 2021</p>
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
                  <p className=" text-gray-text">8:00 AM</p>
                </div>
                <div className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center">
                  <p>Fri 1st, January 2021</p>
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
                  <p className=" text-gray-text">8:00 AM</p>
                </div>
                <div className="border border-other-disabled w-156 rounded h-24 flex  justify-center items-center">
                  <p>Fri 1st, January 2021</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Calendar;
