import React, { useState } from "react";
import styles from "@/styles/discussion.module.css";

const RubricCriteriaTemp = ({ item, total }) => {
  const { max_points, criteria } = item;

  const [chosenScore, setChosenScore] = useState("");
  return (
    <div className={`${styles.tableRow} py-6 grid-cols-11  gap-4`}>
      <div className="col-span-5 flex  items-center  justify-start">
        <span className=" text-xs h-28 bg-blue-inputBlue rounded w-full flex items-center pl-16 text-black-postInsp">
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
          title={0}
          onChange={(e) => setChosenScore(e.target.value)}
        />
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={max_points * 0.5}
          title="50%"
          onChange={(e) => setChosenScore(e.target.value)}
        />
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={max_points * 0.7}
          title="70%"
          onChange={(e) => setChosenScore(e.target.value)}
        />
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={max_points * 0.8}
          title="80%"
          onChange={(e) => setChosenScore(e.target.value)}
        />
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={max_points * 0.9}
          title="90%"
          onChange={(e) => setChosenScore(e.target.value)}
        />
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={max_points * 1}
          title="100%"
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
