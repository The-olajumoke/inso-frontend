import React, { useEffect, useState } from "react";
import styles from "@/styles/switch.module.css";
import Radio from "./Radio";
import Image from "next/image";
import WhiteLoader from "./whiteLoader";
const ScoresSetting = ({
  setActiveSettings,
  activeScoring,
  setActiveScoring,
  maxScore,
  setMaxScore,
  postMade,
  setPostMade,
  activeDays,
  setActiveDays,
  comments,
  setComments,
  usePostInsp,
  setUsePostInsp,
  addScoresToSettings,
  setAddScoresToSettings,
  setSelectedScoringOption,
  selectedScoringOption,
  handleCreateScoring,
  scoreLoading,
  scoreData,
  allCriteriaRubric,
  setAllCriteriaRubric,
  rubricTotalScore,
  setRubricTotalScore,
  diffInDays,
}) => {
  console.log(diffInDays);
  const [allActiveScoringOption, setAllActiveScoringOption] = useState([]);

  const handleScoringOption = (id) => {
    setSelectedScoringOption(id);
  };
  const [dividedScore, setDividedScore] = useState(0);
  const [dividedScoreRubric, setDividedScoreRubric] = useState(0);
  const [openPostDropdown, setOpenPostDropdown] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [currentCriteria, setCurrentCriteria] = useState("");
  useEffect(() => {
    const currentArry = [];
    if (postMade !== "") {
      currentArry = [postMade];
    }
    if (activeDays !== "") {
      currentArry = [...currentArry, activeDays];
    }
    if (comments !== "") {
      currentArry = [...currentArry, comments];
    }
    if (usePostInsp === "Yes") {
      currentArry = [...currentArry, usePostInsp];
    }
    console.log(currentArry);
    setAllActiveScoringOption(currentArry);
    if (postMade !== "" || activeDays !== "" || comments !== "") {
      const div = Math.round(maxScore / currentArry.length);
      console.log(div);
      setDividedScore(div);
    }
  }, [maxScore, postMade, activeDays, comments, usePostInsp]);

  useEffect(() => {
    const div = Math.round(rubricTotalScore / allCriteriaRubric.length);
    console.log(div);
    setDividedScoreRubric(div);
  }, [rubricTotalScore, allCriteriaRubric]);
  const handleSubmitScores = () => {
    const body = {
      type: "auto",
      total: +maxScore,
      posts_made: {
        max_points: dividedScore,
        required: +postMade,
      },
      active_days: {
        max_points: dividedScore,
        required: +activeDays,
      },
      comments_received: {
        max_points: dividedScore,
        required: +comments,
      },
      post_inspirations: {
        selected: usePostInsp === "Yes" ? true : false,
        max_points: +dividedScore,
      },
    };
    const allCrit = allCriteriaRubric.map((cri) => ({
      criteria: cri,
      max_points: dividedScoreRubric,
    }));
    const bodyRubric = {
      type: "rubric",
      total: +rubricTotalScore,
      criteria: allCrit,
    };
    if (selectedScoringOption === "automatic") {
      handleCreateScoring(body);
    } else {
      handleCreateScoring(bodyRubric);
    }
  };
  console.log(allCriteriaRubric);
  const addToCriteria = (e) => {
    e.preventDefault();

    setAllCriteriaRubric([...allCriteriaRubric, currentCriteria]);
    setCurrentCriteria("");
    setShowInput(false);
  };
  return (
    <div className="w-450 h-450 flex flex-col shadow-createDiscussion">
      <div className=" bg-primary-darkGreen h-60 px-35 vp-600:px-16 py-13  rounded-t-md flex justify-between items-center">
        <h4 className=" text-white-white">Scores</h4>
        <label className={`${styles.switch}`}>
          <input
            type="checkbox"
            name="score"
            id="scores"
            checked={addScoresToSettings}
            onChange={() => setAddScoresToSettings(!addScoresToSettings)}
          />
          <span
            className={`${styles.slider} ${styles.round} "slider round"`}
          ></span>
        </label>
      </div>
      <div className="px-35 vp-600:px-16  bg-white-white flex-grow flex flex-col pb-24 rounded-b-md">
        <div className="flex items-center mb-12">
          <button
            className={` ${
              activeScoring === "automatic"
                ? " text-black-postInsp border-primary-darkGreen font-medium border-b-2"
                : " text-gray-faintGray border-gray-faintGray border-b"
            } w-1/2 text-sm  py-10`}
            onClick={() => setActiveScoring("automatic")}
          >
            Automatic
          </button>
          <button
            className={` ${
              activeScoring === "rubric"
                ? " text-black-postInsp border-primary-darkGreen font-medium  border-b-2"
                : " text-gray-faintGray border-gray-faintGray  border-b"
            } w-1/2 text-sm  py-10`}
            onClick={() => setActiveScoring("rubric")}
          >
            Rubric
          </button>
        </div>
        {activeScoring === "automatic" && (
          <div className="flex-grow flex flex-col ">
            <div className="flex  gap-4 mb-16">
              <Radio
                id="automatic"
                name="scoreType"
                value="automatic"
                checked={selectedScoringOption === "automatic" ? true : false}
                handleChange={handleScoringOption}
              />
              <p className="ml-20">Use this scoring option</p>
            </div>
            <div className="flex  justify-between items-center w-full mb-20">
              <span className="text-xs text-primary-darkGreen">
                Set total score achievable :
              </span>
              <input
                type="number"
                className="w-62 h-30 rounded-xs bg-blue-inputBlue border-none text-black-postInsp  placeholder:text-gray-faintGray text-md flex justify-between items-center text-center font-medium"
                placeholder="0"
                value={maxScore}
                onChange={(e) => setMaxScore(e.target.value)}
              />
            </div>
            <div className="  grid grid-cols-5 mb-4  gap-5">
              <div className=" col-span-3"></div>
              <div className=" text-primary-darkGreen text-center">
                Required
              </div>
              <div className="text-primary-darkGreen text-center">Max. Pts</div>
            </div>
            <div className="  grid grid-cols-5  gap-5 mb-10">
              <div className=" col-span-3 text-xs text-gray-faintGray flex items-center font-normal">
                Posts made
              </div>
              <div className="">
                <input
                  type="number"
                  disabled={maxScore === "" ? true : false}
                  title={maxScore === "" ? "set Max score first" : ""}
                  className="w-62 h-30 rounded-xs bg-blue-inputBlue disabled:bg-blue-inputBlue border-none text-black-postInsp  placeholder:text-gray-faintGray text-md flex justify-center items-center text-center font-medium"
                  placeholder="0"
                  value={postMade}
                  onChange={(e) => setPostMade(e.target.value)}
                />
              </div>
              <div className="w-62 h-30 rounded-xs bg-gray-background border-none text-gray-faintGray text-md flex justify-center items-center text-center">
                {postMade !== "" ? dividedScore : ""}
              </div>
            </div>
            <div className=" grid grid-cols-5  gap-5 mb-10">
              <div className=" col-span-3 text-xs text-gray-faintGray flex items-center font-normal">
                Active days
              </div>
              <div className="">
                <input
                  type="number"
                  disabled={maxScore === "" ? true : false}
                  title={
                    maxScore === ""
                      ? "set Max score first"
                      : `Value cannot be more than ${diffInDays} day(s)`
                  }
                  className="w-62 h-30 rounded-xs bg-blue-inputBlue disabled:bg-blue-inputBlue border-none text-black-postInsp  placeholder:text-gray-faintGray text-md flex justify-center items-center text-center font-medium"
                  placeholder="0"
                  max={diffInDays}
                  value={activeDays}
                  onChange={(e) => {
                    if (e.target.value > diffInDays) {
                      setActiveDays(diffInDays);
                    } else {
                      setActiveDays(e.target.value);
                    }
                  }}
                />
              </div>
              <div className="w-62 h-30 rounded-xs bg-gray-background border-none text-gray-faintGray text-md flex justify-center items-center text-center">
                {activeDays !== "" ? dividedScore : ""}
              </div>
            </div>
            <div className=" grid grid-cols-5  gap-5 mb-10">
              <div className="col-span-3 text-xs text-gray-faintGray flex items-center font-normal">
                Comments received
              </div>
              <div className="">
                <input
                  type="number"
                  disabled={maxScore === "" ? true : false}
                  title={maxScore === "" ? "set Max score first" : ""}
                  className="w-62 h-30 rounded-xs bg-blue-inputBlue disabled:bg-blue-inputBlue border-none text-black-postInsp  placeholder:text-gray-faintGray text-md flex justify-center items-center text-center font-medium"
                  placeholder="0"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </div>
              <div className="w-62 h-30 rounded-xs bg-gray-background border-none text-gray-faintGray text-md flex justify-center items-center text-center">
                {comments !== "" ? dividedScore : ""}
              </div>
            </div>
            <div className={` grid grid-cols-5  gap-5 mb-10  `}>
              <div className="col-span-3 text-xs text-gray-faintGray flex items-center font-normal ">
                Use post inspirations
              </div>
              <div className="">
                <div
                  className="w-62 h-30 rounded-xs bg-blue-inputBlue disabled:bg-blue-inputBlue border-none text-black-postInsp  placeholder:text-gray-faintGray text-sm flex justify-center items-center text-center cursor-pointer"
                  onClick={() => setOpenPostDropdown(!openPostDropdown)}
                >
                  <h6 className="mr-12">{usePostInsp}</h6>
                  <Image
                    src="https://res.cloudinary.com/insomaryland/image/upload/v1659650421/small_arrow_down_gjlf6p.svg"
                    alt="dropdown"
                    layout="fixed"
                    width="8"
                    height="8"
                  />
                </div>
                {openPostDropdown && (
                  <div className="  shadow-xs w-62 absolute px-5">
                    <button
                      className="w-full  bg-gray-background text-black-postInsp text-sm py-5"
                      onClick={() => {
                        setUsePostInsp("Yes");
                        setOpenPostDropdown(false);
                      }}
                    >
                      Yes
                    </button>
                    <div className=" border border-gray-footerGrey w-full"></div>
                    <button
                      className="w-full  bg-gray-background text-black-postInsp text-sm py-5"
                      onClick={() => {
                        setUsePostInsp("No");
                        setOpenPostDropdown(false);
                      }}
                    >
                      No
                    </button>
                  </div>
                )}
              </div>
              <div className="w-62 h-30 rounded-xs bg-gray-background border-none text-gray-faintGray text-md flex justify-center items-center text-center">
                {usePostInsp === "Yes" ? dividedScore : ""}
              </div>
            </div>
          </div>
        )}
        {activeScoring === "rubric" && (
          <div className="flex-grow flex flex-col ">
            <div className="flex  gap-4 mb-16">
              <Radio
                id="rubric"
                name="scoreType"
                value="rubric"
                checked={selectedScoringOption === "rubric" ? true : false}
                handleChange={handleScoringOption}
              />
              <p className="ml-20">Use this scoring option</p>
            </div>
            <div className="flex  justify-between items-center w-full mb-20">
              <span className="text-xs text-primary-darkGreen">
                Set total score achievable :
              </span>
              <input
                type="number"
                className="w-62 h-30 rounded-xs bg-blue-inputBlue border-none text-black-postInsp  placeholder:text-gray-faintGray text-md flex justify-between items-center text-center font-medium"
                placeholder="0"
                value={rubricTotalScore}
                onChange={(e) => setRubricTotalScore(e.target.value)}
              />
            </div>
            <div className="  grid grid-cols-5 mb-4  gap-4">
              <div className=" col-span-4 text-xs text-primary-darkGreen">
                Criteria
              </div>

              <div className="text-center text-xs text-primary-darkGreen">
                Max. Pts
              </div>
            </div>
            <div className="">
              {allCriteriaRubric.map((criteria, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 mb-4  gap-4 w-full"
                >
                  <div className=" col-span-4 text-xs text-primary-darkGreen relative">
                    <div
                      style={{ minHeight: "30px" }}
                      className=" w-full rounded-xs bg-blue-postInsp border-none px-10 text-black-postInsp text-sm flex items-center"
                    >
                      {criteria}
                    </div>
                  </div>

                  <div className="w-62 h-30 rounded-xs bg-gray-background border-none text-gray-faintGray text-md flex justify-center items-center text-center">
                    {dividedScoreRubric}
                  </div>
                </div>
              ))}
              {showInput === true && (
                <div className=" grid grid-cols-5 mb-4  gap-4 w-full">
                  <form
                    className="col-span-4 "
                    action=""
                    onSubmit={addToCriteria}
                  >
                    <input
                      type="text"
                      disabled={rubricTotalScore === "" ? true : false}
                      title={rubricTotalScore === "" ? "set maxscore" : ""}
                      className="h-30 w-full rounded-xs bg-blue-postInsp border-none px-10 placeholder:text-gray-faintGray focus:ring-0 focus:border-none text-black-postInsp"
                      placeholder="Type criteria here "
                      value={currentCriteria}
                      onChange={(e) => setCurrentCriteria(e.target.value)}
                    />
                  </form>
                  <div className="w-62 h-30 rounded-xs bg-gray-background border-none text-gray-faintGray text-md flex justify-center items-center text-center">
                    0
                  </div>
                </div>
              )}
              {!showInput && (
                <div className=" justify-end items-center grid grid-cols-5">
                  <div
                    className=" col-span-4 flex justify-end items-center"
                    onClick={() => setShowInput(true)}
                  >
                    <Image
                      src="https://res.cloudinary.com/insomaryland/image/upload/v1659787696/add_postInsp_blue_dhryf3.svg"
                      alt="back"
                      layout="fixed"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className="w-62 h-30 rounded-xs bg-gray-background border-none text-gray-faintGray text-md flex justify-center items-center text-center opacity-0">
                    0
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className=" h-40  mt-20 flex justify-between items-center w-full">
          <div className="flex items-center">
            <div
              className="flex justify-center items-center mr-75"
              onClick={() => {
                setActiveSettings("calendar");
              }}
            >
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1659612940/arrow_left_blue_otwon7.svg"
                alt="back"
                layout="fixed"
                width="16"
                height="16"
              />
            </div>
            <div
              className="justify-center items-center hidden"
              onClick={() => {
                setActiveSettings("duration");
              }}
            >
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1659612936/arrow_right_blue_qamrbk.svg"
                alt="forward"
                layout="fixed"
                width="16"
                height="16"
              />
            </div>
          </div>

          {scoreLoading ? (
            <button className="btn px-17 h-32 text-md">
              <WhiteLoader />
            </button>
          ) : (
            <div>
              {selectedScoringOption === "automatic" ? (
                <button
                  className="btn px-17 h-32 text-md"
                  disabled={!addScoresToSettings || maxScore === ""}
                  onClick={handleSubmitScores}
                >
                  Update
                </button>
              ) : (
                <button
                  className="btn px-17 h-32 text-md"
                  disabled={!addScoresToSettings || rubricTotalScore === ""}
                  onClick={handleSubmitScores}
                >
                  Update
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScoresSetting;
