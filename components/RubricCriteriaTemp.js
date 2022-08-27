import React, { useState } from "react";
import styles from "@/styles/discussion.module.css";
import Radio from "./Radio";

const RubricCriteriaTemp = ({ item, currentUserInfo, setCurrentUserInfo }) => {
  const { max_points, criteria } = item;
  const { grade } = currentUserInfo;
  console.log(currentUserInfo);
  const [chosenScore, setChosenScore] = useState("");
  return (
    <div className={`${styles.tableRow} py-6 grid-cols-11  gap-4`}>
      <div className="col-span-5 flex justify-start overflow-hidden h-24">
        <span className=" text-xs  h-full bg-blue-inputBlue rounded w-full  overflow-hidden  pl-8 text-black-postInsp">
          {criteria}
        </span>
      </div>
      <div className=" col-span-4 grid grid-cols-6 justify-between items-center">
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={max_points * 0}
          title={max_points * 0}
          checked={chosenScore == max_points * 0 ? true : false}
          onChange={(e) => setChosenScore(e.target.value)}
        />
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={max_points * 0.5}
          title={max_points * 0.5}
          checked={chosenScore == max_points * 0.5 ? true : false}
          onChange={(e) => setChosenScore(e.target.value)}
        />
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={max_points * 0.7}
          title={max_points * 0.7}
          checked={chosenScore == max_points * 0.7 ? true : false}
          onChange={(e) => setChosenScore(e.target.value)}
        />

        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={max_points * 0.8}
          title={max_points * 0.8}
          // checked={chosenScore == max_points * 0.8 ? true : false}

          onChange={(e) => setChosenScore(e.target.value)}
        />
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={max_points * 0.9}
          title={max_points * 0.9}
          checked={chosenScore == max_points * 0.9 ? true : false}
          onChange={(e) => setChosenScore(e.target.value)}
        />
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={max_points * 1}
          title={max_points * 1}
          onChange={(e) => setChosenScore(e.target.value)}
        />
      </div>
      <div className=" col-span-2 flex items-center  ">
        <input
          type="number"
          max={max_points}
          className="w-40 text-sm p-1 h-24 bg-blue-inputBlue rounded border-none outline-none text-center flex justify-center items-center  font-medium  disabled:!text-black-postInsp"
          value={chosenScore}
          disabled={true}
        />
        <p className=" text-black-analText">/{max_points}</p>
      </div>
    </div>
  );
};

export default RubricCriteriaTemp;
