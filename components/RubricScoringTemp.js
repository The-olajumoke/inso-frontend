import React from "react";
import styles from "@/styles/discussion.module.css";

const RubricScoringTemp = ({
  scores,
  user,
  setCurrentUserInfo,
  currentUserInfo,
  setFeedback,
  setScores,
  updatedScores,
}) => {
  const { l_name, f_name, grade, _id } = user;

  const handleCurrentUser = () => {
    if (grade == null) {
      setCurrentUserInfo(null);
      console.log("there's no grade");
      console.log(updatedScores);
      const body = {
        partId: _id,
        total: 0,
        criteria: updatedScores,
      };
      setFeedback("");
      setScores(updatedScores);
      setCurrentUserInfo(body);
    } else {
      setCurrentUserInfo(null);
      console.log("there's grade");
      setFeedback(grade?.comment);
      setScores(grade?.rubric);
      const body = {
        partId: _id,
        total: grade?.grade,
        criteria: grade?.rubric,
      };
      console.log(body);
      setCurrentUserInfo(body);
    }
  };
  console.log(scores);
  console.log(updatedScores);
  return (
    <div
      className={`${styles.tableRow} grid-cols-10 py-8 gap-4 ${
        currentUserInfo?.partId === _id && "bg-blue-inputBlue"
      }`}
      onClick={handleCurrentUser}
    >
      <div className="col-span-4 flex  items-center justify-start ">
        <div
          style={{ borderRadius: "3px" }}
          className="w-20  h-20 text-other-disabledText flex justify-center items-center mr-10  bg-other-disabled"
        >
          {/* <span
            style={{ fontSize: "10px" }}
            className={`${
              status === "NR"
                ? " text-other-disabledText font-medium"
                : " text-primary-darkGreen font-medium"
            }`}
          >
            {status}
          </span> */}
        </div>
        <div className="flex-grow flex items-center gap-2">
          <p className="font-medium text-black-analText text-xs">{f_name}</p>
          <p className="font-medium text-black-analText text-xs">{l_name}</p>
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <span
          className={` ${
            grade !== null
              ? "text-other-success bg-green-doneBg"
              : "text-other-disabledText bg-other-disabled"
          } w-full rounded-xs h-28 flex justify-center items-center font-medium text-xs `}
        >
          {grade !== null ? "Done" : "Not graded"}
        </span>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <span
          className={` ${
            grade !== null && grade.comment !== ""
              ? "text-other-success bg-green-doneBg"
              : "text-other-disabledText bg-other-disabled"
          } w-full rounded-xs h-28 flex justify-center items-center font-medium  text-xs `}
        >
          {grade !== null && grade.comment !== "" ? "Given" : "Not given"}
        </span>
      </div>

      <div className="flex col-span-2 items-center justify-center">
        {grade ? (
          <p className="font-bold text-primary-darkGreen">{grade?.grade}</p>
        ) : (
          <p className="font-bold text-primary-darkGreen">0</p>
        )}
      </div>
    </div>
  );
};

export default RubricScoringTemp;
