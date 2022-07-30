import React, { useState } from "react";
import styles from "@/styles/discussion.module.css";

const RubricCriteriaTemp = ({ item, total }) => {
  const { criteria } = item;
  const [chosenScore, setChosenScore] = useState("");
  return (
    <div className={`${styles.tableRow} py-6 grid-cols-11  gap-4`}>
      <div className="col-span-5 flex  items-center  justify-start">
        <span className=" text-xs h-28 bg-blue-inputBlue rounded w-full flex items-center pl-16">
          {criteria}
        </span>
      </div>
      <div className=" col-span-4 grid grid-cols-6 justify-between items-center">
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={total * 0}
          title={total * 0}
          onChange={(e) => setChosenScore(e.target.value)}
        />
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={total * 0.5}
          title={total * 0.5}
          onChange={(e) => setChosenScore(e.target.value)}
        />
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={total * 0.7}
          title={total * 0.7}
          onChange={(e) => setChosenScore(e.target.value)}
        />
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={total * 0.8}
          title={total * 0.8}
          onChange={(e) => setChosenScore(e.target.value)}
        />
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={total * 0.9}
          title={total * 0.9}
          onChange={(e) => setChosenScore(e.target.value)}
        />
        <input
          type="radio"
          name="what"
          id=""
          className=""
          value={total * 1}
          title={total * 1}
          onChange={(e) => setChosenScore(e.target.value)}
        />
      </div>
      <div className=" col-span-2 flex items-center  ">
        <input
          type="number"
          max={total}
          className="w-40 text-sm p-1 h-24 bg-blue-inputBlue rounded border-none outline-none text-center flex justify-center items-center  font-medium  disabled:!text-black-postInsp"
          value={chosenScore}
          disabled={true}
        />
        <p className=" text-black-analText">/{total}</p>
      </div>
    </div>
  );
};

export default RubricCriteriaTemp;
