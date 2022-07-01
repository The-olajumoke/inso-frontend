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
        className="px-45 flex items-center cursor-pointer mb-24 "
        onClick={() => {
          setViewInspirations(false);
          setActiveSettings("Calendar");
        }}
      >
        <div className="flex justify-center items-center">
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
      <div className="px-45 flex items-center  justify-between cursor-pointer mb-24">
        <h6 className=" text-black-analText">Set date</h6>
        <p className=" text-primary-blue">Save</p>
      </div>
      <div className="w-full">
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

// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { BsArrowDown, BsArrowUp } from "react-icons/bs";
// import { MdClose } from "react-icons/md";
// import clear from "../../Exports/clear.svg";

// function CalendarTemp({ date, setDate, setShowCalDate }) {
//   return (
//     <div className=" font-poppins  p-5 calTemp">
//       <div className="closeCalendar w-full">
//         <img src={clear} alt="" onClick={() => setShowCalDate(false)} />
//       </div>
//       <Calendar
//         className="react-calendar"
//         onChange={setDate}
//         value={date}
//         selectRange={true}

//         nextLabel={<BsArrowDown />}
//         prevLabel={<BsArrowUp />}
//         defaultView="month"
//         // showNavigation={false}
//         // showNeighboringMonth={false}
//         prev2Label={false}
//         next2Label={false}
//         navigationLabel={({ date, label, locale, view }) =>
//           `${label}
//           `
//         }
//       />
//       {/* {date[1].toLocaleString("en-US", {
//         weekday: "short",
//         day: "numeric",
//         year: "numeric",
//         month: "long",
//       })}

//       {date.length > 0 ? (
//         <p className="text-center">
//           <span className="bold">Start:</span> {date[0].toDateString()}
//           &nbsp;|&nbsp;
//           <span className="bold">End:</span>
//           {date[1].toLocaleString()}
//         </p>
//       ) : (
//         <p className="text-center">
//           <span className="bold">Default selected date:</span>{" "}
//           {date.toDateString()}
//         </p>
//       )} */}
//     </div>
//   );
// }

// export default CalendarTemp;
// //CHANGE CALENDAR COLOR
