import React from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Image from "next/image";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import styles from "@/styles/createDisc.module.css";
const CalendarTemp = ({ date, setDate, setShowCalendar }) => {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  return (
    <div className="h-full rounded-b-md bg-white-white overflow-hidden">
      <div
        className="px-16 vp-min-601:px-30 flex items-center cursor-pointer mb-0 pt-12"
        onClick={() => {
          setShowCalendar(false);
        }}
      >
        <div className="flex justify-center items-center">
          <Image
            src="https://res.cloudinary.com/insomaryland/image/upload/v1657550652/arrow_left_green_mrrpsi.svg"
            alt="back"
            layout="fixed"
            width="16"
            height="16"
          />
        </div>
        <h6 className="ml-16 text-gray-faintGray">Back</h6>
      </div>

      <div className={`${styles.hiddenScrollbar}  h-320`}>
        <div className="w-full flex h-full justify-center ">
          <Calendar
            className="react-calendar"
            onChange={setDate}
            value={date}
            minDate={today}
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
