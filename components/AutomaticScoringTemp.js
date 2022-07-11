import React from "react";
import styles from "@/styles/discussion.module.css";

const AutomaticScoringTemp = ({ user }) => {
  const { status, name, instruction, interaction, impact, total } = user;

  return (
    <div className={`${styles.tableRow} grid-cols-12 mb-14`}>
      <div className="col-span-4 flex  items-center justify-start ">
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
            {status}
          </span>
        </div>
        <div className="flex-grow">
          <p className="font-medium text-black-analText">{name}</p>
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <div
          className={` ${
            instruction !== ""
              ? " text-black-analText"
              : "text-other-disabledText"
          } w-52 border border-other-disabledText rounded h-24 bg-other-disabled flex justify-center items-center`}
        >
          {instruction === "" ? "-" : instruction}
        </div>
      </div>
      <div className="flex col-span-2 items-center justify-center">
        <div
          className={`  ${
            interaction !== ""
              ? " text-black-analText"
              : "text-other-disabledText"
          } w-52 rounded h-24 bg-other-disabled flex justify-center items-center`}
        >
          {" "}
          {interaction === "" ? "-" : interaction}
        </div>
      </div>
      <div className="flex col-span-2 items-center justify-center">
        <div
          className={`  ${
            impact !== "" ? " text-black-analText" : "text-other-disabledText"
          } w-52 rounded h-24 bg-other-disabled  flex justify-center items-center`}
        >
          {impact === "" ? "-" : impact}
        </div>
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

export default AutomaticScoringTemp;
