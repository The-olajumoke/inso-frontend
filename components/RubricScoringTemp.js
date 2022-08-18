import React from "react";
import styles from "@/styles/discussion.module.css";

const RubricScoringTemp = ({ user }) => {
  const { status, name, graded, feedback, total } = user;

  return (
    <div
      className={`${styles.tableRow} grid-cols-10 py-8 gap-4 hover:bg-blue-inputBlue`}
    >
      <div className="col-span-4 flex  items-center justify-start ">
        <div
          style={{ borderRadius: "3px" }}
          className="w-20  h-20 text-other-disabledText flex justify-center items-center mr-10  bg-other-disabled"
        >
          <span
            style={{ fontSize: "10px" }}
            className={`${
              status === "NR"
                ? " text-other-disabledText font-medium"
                : " text-primary-darkGreen font-medium"
            }`}
          >
            {status}
          </span>
        </div>
        <div className="flex-grow">
          <p className="font-medium text-black-analText">{name}</p>
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <span
          className={` ${
            graded
              ? "text-other-success bg-green-doneBg"
              : "text-other-disabledText bg-other-disabled"
          } w-full rounded-xs h-28 flex justify-center items-center font-medium `}
        >
          {graded ? "Done" : "Not graded"}
        </span>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <span
          className={` ${
            feedback
              ? "text-other-success bg-green-doneBg"
              : "text-other-disabledText bg-other-disabled"
          } w-full rounded-xs h-28 flex justify-center items-center font-medium `}
        >
          {feedback ? "Given" : "Not given"}
        </span>
      </div>

      <div className="flex col-span-2 items-center justify-center">
        <p className="font-medium text-primary-darkGreen">
          {" "}
          {total === "" ? "-" : total}
        </p>
      </div>
    </div>
  );
};

export default RubricScoringTemp;
