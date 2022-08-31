import React, { useEffect, useState } from "react";
import styles from "@/styles/discussion.module.css";
import Radio from "./Radio";

const RubricCriteriaTemp = ({ item, currentUserInfo, setCurrentUserInfo }) => {
  const { max_points, criteria, earned } = item;
  console.log(item);
  const [chosenScore, setChosenScore] = useState("");
  console.log(earned);
  console.log(chosenScore);
  useEffect(() => {
    setChosenScore(item.earned);
  }, [item]);

  const handleChooseScore = (e) => {
    setChosenScore(+e.target.value);
    const scoreBank = currentUserInfo?.criteria;
    const updatedCriteria = scoreBank?.map((crit) => {
      if (criteria === crit.criteria) {
        return {
          ...crit,
          earned: +e.target.value,
        };
      } else {
        return {
          ...crit,
        };
      }
    });

    setCurrentUserInfo({
      ...currentUserInfo,
      criteria: updatedCriteria,
    });
  };
  return (
    <div className={`${styles.tableRow} py-6 grid-cols-11  gap-4`}>
      <div className="col-span-5 flex justify-start overflow-hidden h-24">
        <span className=" text-xs  h-full bg-blue-inputBlue rounded w-full  overflow-hidden  pl-8 text-black-postInsp">
          {criteria}
        </span>
      </div>
      <div className=" col-span-4 grid grid-cols-6 justify-between items-center">
        <div>
          <input
            type="radio"
            name={criteria}
            id=""
            className={`${
              max_points * 0 === chosenScore && styles.radioInputChecked
            }`}
            value={max_points * 0}
            title={max_points * 0}
            checked={max_points * 0 === chosenScore}
            onChange={handleChooseScore}
          />
          <label htmlFor=""></label>
        </div>
        <input
          type="radio"
          name={criteria}
          id=""
          className={`${
            max_points * 0.5 === chosenScore && styles.radioInputChecked
          }`}
          value={max_points * 0.5}
          title={max_points * 0.5}
          checked={max_points * 0.5 === chosenScore}
          onChange={handleChooseScore}
        />
        <input
          type="radio"
          name={criteria}
          id=""
          className={`${
            max_points * 0.7 === chosenScore && styles.radioInputChecked
          }`}
          value={max_points * 0.7}
          title={max_points * 0.7}
          checked={max_points * 0.7 === chosenScore}
          onChange={handleChooseScore}
        />

        <input
          type="radio"
          name={criteria}
          id=""
          className={`${
            max_points * 0.8 === chosenScore && styles.radioInputChecked
          }`}
          value={max_points * 0.8}
          title={max_points * 0.8}
          checked={max_points * 0.8 === chosenScore}
          onChange={handleChooseScore}
        />
        <input
          type="radio"
          name={criteria}
          id=""
          className={`${
            max_points * 0.9 === chosenScore && styles.radioInputChecked
          }`}
          value={max_points * 0.9}
          title={max_points * 0.9}
          checked={max_points * 0.9 === chosenScore}
          onChange={handleChooseScore}
        />
        <input
          type="radio"
          name={criteria}
          id=""
          className={`${
            max_points * 1 === chosenScore && styles.radioInputChecked
          }`}
          value={max_points * 1}
          title={max_points * 1}
          checked={max_points === chosenScore}
          onChange={handleChooseScore}
        />
      </div>
      <div className=" col-span-2 flex items-center  ">
        <input
          type="number"
          max={max_points}
          className="w-40 text-sm p-1 h-24 bg-blue-inputBlue rounded border-none outline-none text-center flex justify-center items-center  font-medium  disabled:!text-black-postInsp disabled:bg-blue-inputBlue"
          value={chosenScore}
          disabled={true}
        />
        <p className=" text-black-analText">/{max_points}</p>
      </div>
    </div>
  );
};

export default RubricCriteriaTemp;
