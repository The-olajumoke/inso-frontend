import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/discussion.module.css";
import cancel from "../public/static/icons/cancel.svg";
import AutomaticScoringTemp from "./AutomaticScoringTemp";
import RubricScoringTemp from "./RubricScoringTemp";
import RubricCriteriaTemp from "./RubricCriteriaTemp";
import WhiteLoader from "./whiteLoader";

const ScoreSheetTeacher = ({
  scoreType,
  setShowScoresSheet,
  allParticipants,
  scores,
  setScores,
  showScoresSheet,
  setCurrentUserInfo,
  currentUserInfo,
  feedback,
  setFeedback,
  handleRubricScoring,
  updatedScores,
  rubricScoringLoading,
  getPostForParticularUser,
  handleCloseRubric,
}) => {
  return (
    <div className={`w-1/2 vp-980:w-full py-8 px-20 `}>
      {scoreType === "automatic" && (
        <div className=" rounded-lg h-full shadow-lg p-20 vp-600:px-0 vp-600:w-full  flex flex-col">
          <div className=" flex justify-between items-center">
            <h6 className=" text-primary-darkGreen ">Automatic scoring</h6>
            <div
              className="flex justify-center items-center"
              onClick={() => setShowScoresSheet(false)}
            >
              <Image
                src={cancel.src}
                alt="cancel"
                layout="fixed"
                width="14"
                height="14"
              />
            </div>
          </div>

          <div className={`${styles.tableHeader} grid-cols-8 vp-600:flex`}>
            <div className="col-span-3 flex  items-center justify-start">
              <div className="flex  items-center  justify-center">
                <span>
                  User
                  <span className=" text-gray-faintGray">
                    ({allParticipants.length})
                  </span>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-5 col-span-5 vp-600:w-full">
              <div className=" flex  items-center  justify-center">
                <span className=" text-xs">Posts</span>
              </div>
              <div className=" flex  items-center  justify-center">
                <span className=" text-xs">Days</span>
              </div>
              <div className=" flex  items-center  justify-center">
                <span className=" text-xs vp-600:hidden">Comments</span>
                <span className=" text-xs vp-600:flex hidden">Comm</span>
              </div>
              <div className=" flex  items-center  justify-center">
                <span className=" text-xs ">P. insp</span>
              </div>
              <div className=" flex  items-center  justify-center">
                <span className=" text-xs vp-1024:hidden">Total score</span>
                <span className=" text-xs vp-1024:flex hidden">Total</span>
              </div>
            </div>
          </div>
          {allParticipants.length ? (
            <div className={`${styles.hiddenScrollbar} h-full flex-grow`}>
              {allParticipants?.map((user, index) => (
                <AutomaticScoringTemp user={user} key={index} scores={scores} />
              ))}
            </div>
          ) : (
            <div
              className="flex flex-grow items-center justify-center text-gray-text
                      h-full w-full text-sm mt-40"
            >
              No participants to score
            </div>
          )}
        </div>
      )}

      {scoreType === "rubric" && (
        <div className=" rounded-lg  h-full shadow-lg p-20 vp-600:px-0  flex flex-col">
          <div className="flex justify-between items-center">
            <h6 className=" text-primary-darkGreen ">Rubric scoring</h6>
            <div
              className="flex justify-center items-center"
              onClick={() => {
                setShowScoresSheet(false);
                handleCloseRubric();
              }}
            >
              <Image
                src={cancel.src}
                alt="cancel"
                layout="fixed"
                width="14"
                height="14"
              />
            </div>
          </div>
          <div className={`grid grid-cols-10 vp-600:grid-cols-9  gap-4`}>
            <div className="col-span-4 flex  items-center justify-start ">
              <div className="flex  items-center  justify-center">
                <span>
                  User
                  <span className=" text-gray-faintGray">
                    ({allParticipants?.length})
                  </span>
                </span>
              </div>
            </div>
            <div className=" col-span-2   flex  items-center  justify-center">
              <span className=" text-xs">Graded</span>
            </div>
            <div className="col-span-2  flex  items-center  justify-center">
              <span className=" text-xs">Feedback</span>
            </div>

            <div className="col-span-2 vp-600:col-span-1  flex  items-center  justify-center">
              <span className=" text-xs vp-1024:hidden">Total score</span>
              <span className=" text-xs vp-1024:flex hidden">Total</span>
            </div>
          </div>
          {allParticipants.length ? (
            <div className=" h-full">
              <div className=" h-1/2">
                <div className={`${styles.hiddenScrollbar} h-full flex-grow`}>
                  {allParticipants?.map((user, index) => (
                    <div key={index}>
                      <RubricScoringTemp
                        user={user}
                        key={index}
                        scores={scores}
                        currentUserInfo={currentUserInfo}
                        setCurrentUserInfo={setCurrentUserInfo}
                        feedback={feedback}
                        setFeedback={setFeedback}
                        setScores={setScores}
                        updatedScores={updatedScores}
                        getPostForParticularUser={getPostForParticularUser}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={` h-1/2`}>
                <div
                  className={`${styles.tableHeader}  h-1/2  grid-cols-11   gap-4`}
                >
                  <div className="col-span-5 flex  items-center  justify-start">
                    <span className=" text-xs">
                      Criteria
                      <span className=" text-gray-faintGray">{/* (5) */}</span>
                    </span>
                  </div>
                  <div className="col-span-4 grid grid-cols-6 justify-between items-center">
                    <span
                      className=" text-gray-analyticsGray cursor-pointer"
                      title={0}
                    >
                      0
                    </span>
                    <span
                      className=" text-gray-analyticsGray cursor-pointer"
                      title="50%"
                    >
                      1
                    </span>
                    <span
                      className=" text-gray-analyticsGray cursor-pointer"
                      title="70%"
                    >
                      2
                    </span>
                    <span
                      className=" text-gray-analyticsGray cursor-pointer"
                      title="80%"
                    >
                      3
                    </span>
                    <span
                      className=" text-gray-analyticsGray cursor-pointer"
                      title="90%"
                    >
                      4
                    </span>
                    <span
                      className=" text-gray-analyticsGray cursor-pointer"
                      title="100%"
                    >
                      5
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className=" text-xs">Points</span>
                  </div>
                </div>
                {currentUserInfo !== null && (
                  <div className={`${styles.hiddenScrollbar} `}>
                    {scores?.map((item, index) => (
                      <RubricCriteriaTemp
                        item={item}
                        key={index}
                        currentUserInfo={currentUserInfo}
                        setCurrentUserInfo={setCurrentUserInfo}
                        // total={rubricCriteria.totalScore}
                        scores={scores}
                      />
                    ))}
                    <div className="mt-16 flex items-center justify-between gap-4">
                      <input
                        type="text"
                        className="h-40 px-16 w-full border border-other-disabled outline-none"
                        placeholder="Give your feedback (optional)"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                      />
                      <button
                        className="h-40 w-auto px-24 bg-primary-blue text-sm text-white-white rounded-xs"
                        onClick={handleRubricScoring}
                      >
                        {rubricScoringLoading ? <WhiteLoader /> : "Save"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div
              className="flex flex-grow items-center justify-center text-gray-text
                      h-full w-full text-sm mt-40"
            >
              No participants to score
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ScoreSheetTeacher;
