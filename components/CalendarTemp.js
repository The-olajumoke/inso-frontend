import React from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Image from "next/image";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import styles from "@/styles/createDisc.module.css";
const CalendarTemp = ({
  date,
  setDate,
  setViewInspirations,
  setActiveViewInspiration,
  setActiveSettings,
}) => {
  return (
    <div className="h-full">
      <div
        className="px-16 vp-min-601:px-30 flex items-center cursor-pointer mb-0 "
        onClick={() => {
          setViewInspirations(false);
          setActiveSettings("Calendar");
        }}
      >
        <div className="flex justify-center items-center h-50">
          <Image
            src="/icons/arrow_left_green.svg"
            alt="back"
            layout="fixed"
            width="16"
            height="16"
          />
        </div>
        <h6 className="ml-16 text-gray-faintGray">Back</h6>
      </div>
      <div className="px-16  vp-min-601:px-30 flex items-center  justify-between cursor-pointer mb-12">
        <h6 className=" text-black-analText">Set date</h6>
        <p className=" text-primary-blue">Save</p>
      </div>
      <div className={`${styles.hiddenScrollbar} h-350`}>
        <div className="w-full flex h-full justify-center ">
          <Calendar
            className="react-calendar"
            onChange={setDate}
            value={date}
            minDate={new Date()}
            selectRange={true}
            nextLabel={<BsArrowDown />}
            prevLabel={<BsArrowUp />}
            defaultView="month"
            // showNavigation={false}
            showNeighboringMonth={false}
            prev2Label={false}
            next2Label={false}
            navigationLabel={({ date, label, locale, view }) =>
              `${label}
                  `
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarTemp;
