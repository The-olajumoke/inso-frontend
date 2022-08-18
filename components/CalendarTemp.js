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
    <div className="h-full bg-white-white overflow-hidden ">
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
