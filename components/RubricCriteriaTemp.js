import React from "react";
import styles from "@/styles/discussion.module.css";

const RubricCriteriaTemp = ({ item }) => {
  const { criteria, totalScore } = item;
  return (
    <div className={`${styles.tableRow} py-6 grid-cols-11  gap-4`}>
      <div className="col-span-5 flex  items-center  justify-start">
        <span className=" text-xs h-28 bg-blue-inputBlue rounded w-full flex items-center pl-16">
          {criteria}
        </span>
      </div>
      <div className=" col-span-4 grid grid-cols-6 justify-between items-center">
        <input type="radio" name="what" id="" className="" />
        <input type="radio" name="what" id="" className="" />
        <input type="radio" name="what" id="" className="" />
        <input type="radio" name="what" id="" className="" />
        <input type="radio" name="what" id="" className="" />
        <input type="radio" name="what" id="" className="" />
      </div>
      <div className=" col-span-2 flex items-center  ">
        <input
          type="number"
          max={totalScore}
          className="w-52 text-sm p-1 h-24 bg-blue-inputBlue rounded border-none outline-none"
        />
        <p className=" text-black-analText">/{totalScore}</p>
      </div>
    </div>
  );
};

export default RubricCriteriaTemp;
