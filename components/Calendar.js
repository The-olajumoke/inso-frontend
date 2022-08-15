import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/switch.module.css";
import CalendarTemp from "./CalendarTemp";
import WhiteLoader from "./whiteLoader";
const Calendar = ({
  setActiveSettings,
  date,
  addCalendarToSettings,
  setAddCalendarToSettings,
  setDate,
  diffInDays,
  handleCreateCalendar,
  calendarLoading,
  calendarData,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className=" flex flex-col shadow-lg  w-450  ">
      <div className=" bg-primary-darkGreen h-60 vp-600:px-16 px-38 py-13  rounded-t-md flex justify-between items-center">
        <h4 className=" text-white-white">Duration</h4>
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

      <div
        className={`${
          !addCalendarToSettings && "opacity-20"
        }  px-16 vp-min-601:px-38 py-10  flex flex-col justify-between  bg-white-white rounded-b-md`}
      >
        <span
          style={{ fontSize: "11px" }}
          className=" text-gray-analyticsGray mb-11"
        >
          <span className="text-primary-darkGreen">Open for :</span>{" "}
          {diffInDays} day(s)
        </span>
        <div className="border border-other-disabled px-12 py-7 rounded h-30 flex  justify-center items-center  text-black-postInsp cursor-pointer gap-4">
          <p className=" text-black-postInsp text-xs">
            {" "}
            {date[0].toLocaleString("en-US", {
              weekday: "short",
              day: "numeric",
              year: "numeric",
              month: "long",
            })}
          </p>
          <p className=" text-gray-analyticsGray">to</p>
          <p className=" text-black-postInsp text-xs">
            {" "}
            {date[1].toLocaleString("en-US", {
              weekday: "short",
              day: "numeric",
              year: "numeric",
              month: "long",
            })}
          </p>
        </div>
        <div className=""></div>
        <CalendarTemp
          date={date}
          setDate={setDate}
          setShowCalendar={setShowCalendar}
        />
        <div className=" h-40 flex justify-between items-center w-full">
          <div className="flex items-center">
            <div
              className="flex justify-center items-center mr-75"
              onClick={() => {
                setActiveSettings("starterPrompt");
              }}
            >
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1659612940/arrow_left_blue_otwon7.svg"
                alt="back"
                layout="fixed"
                width="16"
                height="16"
              />
            </div>
            <div
              className="justify-center items-center"
              onClick={() => {
                setActiveSettings("scores");
              }}
            >
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1659612936/arrow_right_blue_qamrbk.svg"
                alt="forward"
                layout="fixed"
                width="16"
                height="16"
              />
            </div>
          </div>

          {calendarLoading ? (
            <button className="btn bg-primary-darkGreen text-white-white w-auto px-16 h-30 text-sm">
              <WhiteLoader />
            </button>
          ) : calendarData !== null ? (
            <button
              className="btn bg-primary-darkGreen text-white-white w-auto px-16 h-30 text-sm"
              onClick={() => {
                setActiveSettings("scores");
              }}
            >
              Next
            </button>
          ) : (
            <button
              className="btn bg-primary-darkGreen text-white-white w-auto px-16 h-30 text-sm"
              onClick={handleCreateCalendar}
              disabled={addCalendarToSettings ? false : true}
            >
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
