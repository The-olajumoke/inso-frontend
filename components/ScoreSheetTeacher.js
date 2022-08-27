import React from "react";
import Image from "next/image";
import styles from "@/styles/discussion.module.css";
import cancel from "../public/static/icons/cancel.svg";
import AutomaticScoringTemp from "./AutomaticScoringTemp";
import RubricScoringTemp from "./RubricScoringTemp";
import RubricCriteriaTemp from "./RubricCriteriaTemp";

const ScoreSheetTeacher = ({
  scoreType,
  setShowScoresSheet,
  allParticipants,
  scores
}) => {
  return (
    <div className=" w-1/2 py-8 px-20">
      {scoreType === "automatic" && (
        <div className=" rounded-lg  h-full shadow-lg p-20  flex flex-col">
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

          <div className={`${styles.tableHeader} grid-cols-8`}>
            <div className="col-span-3 flex  items-center justify-start">
              <div className="w-20 opacity-0 mr-10">S</div>
              <div className="flex  items-center  justify-center">
                <span>
                  User
                  <span className=" text-gray-faintGray">
                    {allParticipants.length}
                  </span>
                </span>
              </div>
            </div>
            <div className=" flex  items-center  justify-center">
              <span className=" text-xs">Posts</span>
            </div>
            <div className=" flex  items-center  justify-center">
              <span className=" text-xs">Days</span>
            </div>
            <div className=" flex  items-center  justify-center">
              <span className=" text-xs">Comments</span>
            </div>
            <div className=" flex  items-center  justify-center">
              <span className=" text-xs">P. insp</span>
            </div>
            <div className=" flex  items-center  justify-center">
              <span className=" text-xs">Total score</span>
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
        <div className=" rounded-lg  h-full shadow-lg p-20  flex flex-col">
          <div className="flex justify-between items-center">
            <h6 className=" text-primary-darkGreen ">Rubric scoring</h6>
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
          <div className={`${styles.tableHeader} grid-cols-10 gap-4`}>
            <div className="col-span-4 flex  items-center justify-start ">
              <div className="w-20 opacity-0 mr-10">S</div>
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
              <span className=" text-xs">
                Graded
                <span className=" text-gray-faintGray">(2)</span>{" "}
              </span>
            </div>
            <div className="col-span-2  flex  items-center  justify-center">
              <span className=" text-xs">
                Feedback
                <span className=" text-gray-faintGray">(28)</span>
              </span>
            </div>

            <div className="col-span-2  flex  items-center  justify-center">
              <span className=" text-xs">Total score</span>
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
                        setCurrentUserInfo={setCurrentUserInfo}
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
                  {/* <div className="col-span-4 grid grid-cols-6 justify-between items-center">
                                  <span
                                    className=" text-gray-analyticsGray cursor-pointer"
                                    title={rubricCriteria.totalScore * 0}
                                  >
                                    0
                                  </span>
                                  <span
                                    className=" text-gray-analyticsGray cursor-pointer"
                                    title={rubricCriteria.totalScore * 0.5}
                                  >
                                    1
                                  </span>
                                  <span
                                    className=" text-gray-analyticsGray cursor-pointer"
                                    title={rubricCriteria.totalScore * 0.7}
                                  >
                                    2
                                  </span>
                                  <span
                                    className=" text-gray-analyticsGray cursor-pointer"
                                    title={rubricCriteria.totalScore * 0.8}
                                  >
                                    3
                                  </span>
                                  <span
                                    className=" text-gray-analyticsGray cursor-pointer"
                                    title={rubricCriteria.totalScore * 0.9}
                                  >
                                    4
                                  </span>
                                  <span
                                    className=" text-gray-analyticsGray cursor-pointer"
                                    title={rubricCriteria.totalScore * 1}
                                  >
                                    5
                                  </span>
                                </div> */}
                  <div className="col-span-2">
                    <span className=" text-xs">Points</span>
                  </div>
                </div>
                <div className={`${styles.hiddenScrollbar} `}>
                  {scores?.map((item, index) => (
                    <RubricCriteriaTemp
                      item={item}
                      key={index}
                      currentUserInfo={currentUserInfo}
                      setCurrentUserInfo={setCurrentUserInfo}
                      // total={rubricCriteria.totalScore}
                    />
                  ))}
                </div>
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
