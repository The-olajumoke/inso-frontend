import React from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Image from "next/image";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { MdClose } from "react-icons/md";
const CalendarTemp = ({
  date,
  setDate,
  setViewInspirations,
  setActiveViewInspiration,
  setActiveSettings,
}) => {
  return (
    <div className="flex-grow">
      <div
        className="px-16 vp-min-601:px-42 flex items-center cursor-pointer mb-24 "
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
      <div className="px-16  vp-min-601:px-42 flex items-center  justify-between cursor-pointer mb-24">
        <h6 className=" text-black-analText">Set date</h6>
        <p className=" text-primary-blue">Save</p>
      </div>
      <div className="w-full flex  justify-center ">
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
  );
};

export default CalendarTemp;
