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
        className={`px-16 vp-min-601:px-38 py-10  flex flex-col justify-between  bg-white-white rounded-b-md relative`}
      >
        {!addCalendarToSettings && (
          <div
            style={{ background: "rgba(255, 255, 255,0.8)" }}
            className="absolute  top-0 left-0 right-0 bottom-0 z-9999"
          ></div>
        )}
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
        <div className=" h-40 flex justify-end items-center w-full">
          {calendarLoading ? (
            <button className="btn bg-primary-darkGreen text-white-white w-auto px-16 h-30 text-sm">
              <WhiteLoader />
            </button>
          ) : (
            <button
              className="btn bg-primary-darkGreen text-white-white w-auto px-16 h-30 text-sm"
              onClick={handleCreateCalendar}
              disabled={addCalendarToSettings ? false : true}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
