import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/discussion.module.css";
const ShowScoresHover = ({
  setHoverScores,
  scoreType,
  setShowScoresSheet,
  allParticipants,
  scores,
  userId,
}) => {
  const [userScores, setUserScores] = useState([]);
  const [total, setTotal] = useState("");
  const [rubricUserScores, setRubricUserScores] = useState(null);
  useEffect(() => {
    if (scoreType === "automatic") {
      const yourScores = allParticipants?.filter((part) => part._id == userId);

      if (yourScores !== "") {
        setUserScores(yourScores[0]?.grade?.rubric);
        setTotal(yourScores[0]?.grade?.grade);
      }
    } else {
      const yourScores = allParticipants?.filter((part) => part._id == userId);
      console.log(yourScores);
      if (yourScores[0]?.grade !== null) {
        setRubricUserScores(yourScores[0]?.grade);
      }
    }
  }, [allParticipants, userId]);
  return (
    <>
      <div
        className={`fixed h-screen w-screen  top-0 left-0 bg-black-overlay vp-980:bg-white-white animate-fade-in z-50 vp-980:w-full vp-980:top-0 vp-980:right-0 vp-980:left-0  `}
        onClick={() => setHoverScores(false)}
      ></div>
      <div
        className={` w-414 h-195 vp-980:left-0  vp-980:top-0 vp-980:right-0 vp-980:w-full  top-20 right-52 bg-white-white absolute  z-60  rounded-xl  overflow-hidden  shadow-createDiscussion`}
      >
        {scoreType === "automatic" && (
          <div
            className=" rounded-lg  h-full shadow-lg p-20  flex flex-col"
            onClick={() => {
              setShowScoresSheet(true);
              setHoverScores(false);
            }}
          >
            <div className="w-full mb-70 ">
              {userScores?.length ? (
                userScores?.map((crit, index) => (
                  <div
                    key={index}
                    className=" flex justify-between items-center w-full gap-10"
                  >
                    <div className=" w-9/12">
                      <p className=" text-gray-text text-xs mb-4  capitalize">
                        {crit.criteria}
                      </p>
                      <progress
                        className={`${styles.progressBarBlue} w-full`}
                        value={crit.earned}
                        max={crit.max_points}
                      />
                    </div>
                    <p className=" text-black-postInsp font-medium">
                      {crit.earned}/{crit.max_points}
                    </p>

                    {crit.earned == 0 ? (
                      <div>
                        <button className="w-90 h-30 bg-other-disabled  rounded-xs text-other-disabledText font-medium flex justify-center items-center text-xs">
                          Undone
                        </button>
                      </div>
                    ) : (
                      <div>
                        {crit.max_points === crit.earned ? (
                          <button className="w-90 h-30 bg-green-doneBg  rounded-xs text-green-boldGreen  font-medium flex justify-center items-center text-xs">
                            Done
                          </button>
                        ) : (
                          <button className="w-90 h-30 bg-other-progressBg  rounded-xs text-other-progress flex justify-center items-center text-xs">
                            In progress
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div>no available score </div>
              )}
            </div>
            {userScores?.length && (
              <div className="flex justify-between w-full">
                <p className=" text-black-postInsp font-medium">Total score</p>
                <h6 className=" text-primary-darkGreen font-medium">{total}</h6>
              </div>
            )}
          </div>
        )}
        {scoreType === "rubric" && (
          <div
            className=" rounded-lg  h-full shadow-lg p-15  flex flex-col"
            onClick={() => {
              setShowScoresSheet(true);
              setHoverScores(false);
            }}
          >
            {rubricUserScores !== null ? (
              <div className="flex flex-col justify-between h-full">
                {rubricUserScores?.rubric.map((crit, index) => (
                  <div
                    key={index}
                    className=" flex justify-between items-center w-full gap-10 "
                  >
                    <div className=" w-9/12 bg-blue-inputBlue h-30 rounded pl-20 flex items-center ">
                      <p className=" text-black-postInsp text-xs mb-4  capitalize">
                        {crit.criteria}
                      </p>
                    </div>
                    <p className=" text-black-postInsp font-medium">
                      {crit.earned}/{crit.max_points}
                    </p>

                    {crit.earned == 0 ? (
                      <button className="w-90 h-30 bg-other-disabled  rounded-xs text-other-disabledText font-medium flex justify-center items-center text-xs">
                        Undone
                      </button>
                    ) : (
                      <div>
                        {crit.max_points === crit.earned ? (
                          <button className="w-90 h-30 bg-green-doneBg  rounded-xs text-green-boldGreen flex justify-center items-center text-xs">
                            Done
                          </button>
                        ) : (
                          <button className="w-90 h-30 bg-other-progressBg  rounded-xs text-other-progress flex justify-center items-center text-xs">
                            In progress
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}{" "}
              </div>
            ) : (
              <div>
                {scores.map((crit, index) => (
                  <div
                    key={index}
                    className=" flex justify-between items-center w-full gap-10 mb-9"
                  >
                    <div className=" w-9/12">
                      <p className=" text-gray-text text-xs mb-4  capitalize">
                        {crit.criteria}
                      </p>
                    </div>
                    <p className=" text-black-postInsp font-medium">
                      0/{crit.max_points}
                    </p>

                    <button className="w-90 h-30 bg-other-disabled  rounded-xs text-other-disabledText font-medium flex justify-center items-center text-xs">
                      Undone
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ShowScoresHover;
