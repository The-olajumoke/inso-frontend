import React from "react";
import styles from "@/styles/discussion.module.css";

const AutomaticScoringTemp = ({ user }) => {
  const { l_name, f_name, grade } = user;

  return (
    <div className={`${styles.tableRow} grid-cols-8 mb-14`}>
      <div className="col-span-3 flex  items-center justify-start ">
        <div
          style={{ fontSize: "8px" }}
          className="w-20  h-20 text-other-disabledText flex justify-center items-center  mr-10 bg-other-disabled"
        >
          <span
            style={{ fontSize: "10px" }}
            className={`${
              status === "NR"
                ? " text-other-disabledText font-medium"
                : " text-primary-darkGreen font-medium"
            }`}
          >
            {/* {status} */}
          </span>
        </div>
        <div className="flex-grow flex items-center gap-2">
          <p className="font-medium text-xs text-black-analText capitalize">
            {f_name}
          </p>
          <p className="font-medium text-xs text-black-analText capitalize">
            {""}
            {l_name}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          className={` ${
            grade?.rubric[0]?.earned !== 0
              ? " text-black-analText"
              : "text-other-disabledText"
          } w-52 border border-other-disabledText rounded h-24 bg-other-disabled flex justify-center items-center`}
        >
          {grade?.rubric[0]?.earned === 0 ? "-" : grade?.rubric[0]?.earned}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          className={`  ${
            grade?.rubric[1]?.earned !== 0
              ? " text-black-analText"
              : "text-other-disabledText"
          } w-52 rounded h-24 bg-other-disabled flex justify-center items-center`}
        >
          {grade?.rubric[1]?.earned === 0 ? "-" : grade?.rubric[1]?.earned}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          className={`  ${
            grade?.rubric[2]?.earned !== 0
              ? " text-black-analText"
              : "text-other-disabledText"
          } w-52 rounded h-24 bg-other-disabled  flex justify-center items-center`}
        >
          {grade?.rubric[2]?.earned === 0 ? "-" : grade?.rubric[2]?.earned}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          className={`  ${
            grade?.rubric[3]?.earned !== 0
              ? " text-black-analText"
              : "text-other-disabledText"
          } w-52 rounded h-24 bg-other-disabled  flex justify-center items-center`}
        >
          {grade?.rubric[3]?.earned === 0 ? "-" : grade?.rubric[3]?.earned}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="font-bold text-primary-darkGreen ">
          {" "}
          {grade?.grade === "" ? "-" : grade?.grade}
        </p>
      </div>
    </div>
  );
};

export default AutomaticScoringTemp;
