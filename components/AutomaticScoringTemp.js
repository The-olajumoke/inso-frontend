import React from "react";
import styles from "@/styles/discussion.module.css";

const AutomaticScoringTemp = ({ user }) => {
  const { l_name, f_name, grade } = user;

  return (
    <div
      className={`${styles.tableRow} grid-cols-8 mb-14 vp-600:mb-16 vp-600:flex vp-600:flex-col !vp-600:items-start`}
    >
      <div className="col-span-3 flex  items-center justify-start vp-600:w-full vp-600:block ">
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
      <div className="grid grid-cols-5 col-span-5 vp-600:w-full vp-600:flex vp-600:items-start vp-600:justify-between vp-600:mt-8">
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
    </div>
  );
};

export default AutomaticScoringTemp;
