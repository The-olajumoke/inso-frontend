import React, { useState } from "react";
import Image from "next/image";
import RubricInput from "./RubricInput";
import CheckBox from "./CheckBox";
import Radio from "./Radio";
const NewSettings = ({
  setViewInspirations,
  setSelectedScoringOption,
  selectedScoringOption,
}) => {
  const [activeSetting, setActiveSetting] = useState("Automatic");

  const [showInstructions, setShowInstructions] = useState(false);
  const [showInteractions, setShowInteractions] = useState(false);
  const [showImpact, setShowImpact] = useState(false);
  const [showInstructionDetails, setShowInstructionDetails] = useState(false);

  const handleAddCriteria = (e) => {
    e.preventDefault();
    console.log(e);
  };
  const handleScoringOption = (id) => {
    setSelectedScoringOption(id);
  };
  return (
    <div className="h-full flex flex-col flex-grow">
      <div
        className="px-16 vp-min-601:px-42 flex items-center cursor-pointer h-50 "
        onClick={() => setViewInspirations(false)}
      >
        <div className="flex justify-center items-center">
          <Image
            src="/icons/arrow_left_green.svg"
            alt="back"
            layout="fixed"
            width="16"
            height="16"
          />
        </div>
        <h6 className="ml-16 text-gray-faintGray">Back</h6>
      </div>
      <div className="flex px-16 vp-min-601:px-42 items-center my-17 justify-between">
        <h5>New score settings</h5>
        <h5 className=" text-primary-blue">Save</h5>
      </div>
      <div className="  bg-white-white  pt-20 px-16 vp-min-601:px-42 flex flex-col flex-grow ">
        <div className="flex items-center mb-17">
          <button
            className={` ${
              activeSetting === "Automatic" ? "btn" : "btn-nonActive"
            } w-130  h-30 mr-20 text-sm`}
            onClick={() => setActiveSetting("Automatic")}
          >
            Automatic
          </button>
          <button
            className={` ${
              activeSetting === "Rubric" ? "btn" : "btn-nonActive"
            } btn h-30 w-130 text-sm`}
            onClick={() => setActiveSetting("Rubric")}
          >
            Rubric
          </button>
        </div>
        <div className="flex-grow flex flex-col justify-between">
          {activeSetting === "Rubric" && (
            <div className=" flex flex-col flex-grow justify-between">
              <div className="">
                <div className=" flex items-center justify-between mb-13 text-gray-text">
                  <p>Criteria</p>
                  <p>Score</p>
                </div>
                <div className=" flex items-center justify-between mb-13">
                  <p className="  text-border-dropdownLine">Maximum score</p>
                  <p className=" text-xl text-primary-darkGreen">100</p>
                </div>
                <div className=" flex items-start justify-between mb-13 text-gray-text">
                  <form action="" onSubmit={handleAddCriteria}>
                    <div>
                      <RubricInput
                        type="text"
                        placeholder="At least 5 comments"
                        // value={discussionName}
                        // setValue={setDiscussionName}
                      />
                      <div
                        className="w-full flex justify-end mt-10 pb-52"
                        onClick={() => setShowInput("true")}
                      >
                        <Image
                          src="/icons/add_icon_blue.svg"
                          alt="arrows"
                          layout="fixed"
                          width="20"
                          height="20"
                        />
                      </div>
                    </div>
                  </form>
                  <p className="text-xl">20</p>
                </div>
              </div>
              <div className="">
                <div className="h-1 w-full  border border-border-settingsLine mb-10"></div>
                <div className="flex items-center text-xl pb-20">
                  <div className="flex  gap-4">
                    <Radio
                      id="rubric"
                      name="scoreType"
                      value="rubric"
                      checked={
                        selectedScoringOption === "rubric" ? true : false
                      }
                      handleChange={handleScoringOption}
                    />
                    <p className="ml-20">Use this scoring option</p>
                  </div>
                  <div className="flex flex-col gap-5"></div>
                </div>
              </div>
            </div>
          )}
          {activeSetting === "Automatic" && (
            <div className="bg-white-white flex flex-col justify-between  flex-grow">
              <div className="">
                <div
                  className={`${
                    showInstructions ? "h-auto" : "h-30"
                  } flex flex-col w-full mb-24  relative `}
                >
                  <div
                    className="flex justify-between items-center"
                    onClick={() => setShowInstructions(!showInstructions)}
                  >
                    <div className="flex items-center text-xl">
                      <CheckBox />
                      <h5 className="ml-20 text-black-analText">
                        Instructions
                      </h5>
                    </div>
                    <div className="flex items-center">
                      <p className=" text-black-analText mr-17">Set Max :</p>
                      <input
                        type="text"
                        placeholder="20"
                        className="h-30 w-63 mr-19  text-xl bg-blue-lightBlue rounded border-none"
                      />
                      <button>
                        <Image
                          src={
                            showInstructions
                              ? "/icons/arrow_up.svg"
                              : "/icons/arrow_down.svg"
                          }
                          alt="arrow down"
                          layout="fixed"
                          width="15"
                          height="15"
                        />
                      </button>
                    </div>
                  </div>
                  {showInstructions && (
                    <div className=" flex justify-between mt-15 items-center">
                      <div className="opacity-0">
                        <CheckBox />
                      </div>

                      <div className="flex-grow ml-20">
                        <div className=" flex justify-between">
                          <p className=" text-black-analText">Posting</p>
                          <input
                            type="number"
                            placeholder="20"
                            className="h-24 w-63  text-sm text-center flex items-center justify-center mb-5 bg-blue-lightBlue rounded border-none"
                            // value={}
                            // onChange={()=>}
                          />
                        </div>
                        <div className="flex justify-between">
                          <p className=" text-black-analText">Responding</p>
                          <input
                            type="number"
                            placeholder="20"
                            className="h-24 w-63  text-sm text-center flex items-center justify-center mb-5 bg-blue-lightBlue rounded border-none"
                          />
                        </div>
                        <div className="flex justify-between">
                          <p className=" text-black-analText">Synthesizing</p>
                          <input
                            type="number"
                            placeholder="20"
                            className="h-24 w-63  text-sm text-center flex items-center justify-center mb-5 bg-blue-lightBlue rounded border-none"
                          />
                        </div>
                      </div>

                      <div className="h-full  flex items-center justify-center">
                        <div
                          className=" ml-16 flex justify-center items-center"
                          onClick={() =>
                            setShowInstructionDetails(!showInstructionDetails)
                          }
                        >
                          <Image
                            src="/icons/more_info.svg"
                            alt="more info"
                            layout="fixed"
                            width="15"
                            height="15"
                          />
                        </div>
                        {showInstructionDetails && (
                          <div
                            style={{ borderRadius: "4px" }}
                            className="absolute top-5 right-0  w-250 h-70  px-23 py-10 bg-other-disabled  shadow-lg flex justify-center items-center"
                          >
                            <p className=" text-black-postInsp">
                              Allocate individual and maximum score per
                              criteria.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`${
                    showInteractions ? "h-auto" : "h-30"
                  } flex flex-col w-full mb-24`}
                >
                  <div
                    className="flex justify-between items-center"
                    onClick={() => setShowInteractions(!showInteractions)}
                  >
                    <div className="flex items-center text-xl">
                      <CheckBox />
                      <h5 className="ml-20 text-black-analText">
                        Interactions
                      </h5>
                    </div>
                    <div className="flex items-center">
                      <p className=" text-black-analText mr-17">Set Max :</p>
                      <input
                        type="text"
                        placeholder="20"
                        className="h-30 w-63 mr-19  text-xl bg-blue-lightBlue rounded border-none"
                      />
                      <button>
                        <Image
                          src={
                            showInteractions
                              ? "/icons/arrow_up.svg"
                              : "/icons/arrow_down.svg"
                          }
                          alt="arrow down"
                          layout="fixed"
                          width="15"
                          height="15"
                        />
                      </button>
                    </div>
                  </div>
                  {showInteractions && (
                    <div className=" flex justify-between mt-15 ">
                      <div className="opacity-0">
                        <CheckBox />
                      </div>

                      <div className="flex-grow ml-20">
                        <div className=" flex justify-between">
                          <p className=" text-black-analText">
                            {" "}
                            Point per post
                          </p>
                          <input
                            type="number"
                            placeholder="20"
                            className="h-24 w-63  text-sm text-center flex items-center justify-center mb-5 bg-blue-lightBlue rounded border-none"
                            // value={}
                            // onChange={()=>}
                          />
                        </div>
                      </div>
                      <div className=" ml-16 flex justify-center items-center ">
                        <Image
                          src="/icons/more_info.svg"
                          alt="more info"
                          layout="fixed"
                          width="15"
                          height="15"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`${
                    showImpact ? "h-auto" : "h-30"
                  } flex flex-col w-full mb-24 relative`}
                >
                  <div
                    className="flex justify-between items-center"
                    onClick={() => setShowImpact(!showImpact)}
                  >
                    <div className="flex items-center text-xl">
                      <CheckBox />
                      <h5 className="ml-20 text-black-analText">Impact</h5>
                    </div>
                    <div className="flex items-center">
                      <p className=" text-black-analText mr-17">Set Max :</p>
                      <input
                        type="text"
                        placeholder="20"
                        className="h-30 w-63 mr-19  text-xl bg-blue-lightBlue rounded border-none"
                      />
                      <button>
                        <Image
                          src={
                            showImpact
                              ? "/icons/arrow_up.svg"
                              : "/icons/arrow_down.svg"
                          }
                          alt="arrow down"
                          layout="fixed"
                          width="15"
                          height="15"
                        />
                      </button>
                    </div>
                  </div>
                  {showImpact && (
                    <div className=" flex justify-between mt-15  items-center">
                      <div className="opacity-0">
                        <CheckBox />
                      </div>

                      <div className="flex-grow ml-20">
                        <div className=" flex justify-between">
                          <p className=" text-black-analText"> Reactions</p>
                          <input
                            type="number"
                            placeholder="20"
                            className="h-24 w-63  text-sm text-center flex items-center justify-center mb-5 bg-blue-lightBlue rounded border-none"
                            // value={}
                            // onChange={()=>}
                          />
                        </div>
                        <div className=" flex justify-between">
                          <p className=" text-black-analText"> Upvotes</p>
                          <input
                            type="number"
                            placeholder="20"
                            className="h-24 w-63  text-sm text-center flex items-center justify-center mb-5 bg-blue-lightBlue rounded border-none"
                            // value={}
                            // onChange={()=>}
                          />
                        </div>
                      </div>
                      <div className="h-full  flex items-center justify-center">
                        <div
                          className=" ml-16 flex justify-center items-center"
                          onClick={() =>
                            setShowInstructionDetails(!showInstructionDetails)
                          }
                        >
                          <Image
                            src="/icons/more_info.svg"
                            alt="more info"
                            layout="fixed"
                            width="15"
                            height="15"
                          />
                        </div>
                        {showInstructionDetails && (
                          <div
                            style={{ borderRadius: "4px" }}
                            className="absolute -top-5 right-0  w-250 h-70  px-23 py-10 bg-other-disabled  shadow-lg flex justify-center items-center"
                          >
                            <p className=" text-black-postInsp">
                              Allocate individual and maximum score per
                              criteria.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className=" flex items-center w-full  text-black-analText justify-between  pb-27 mt-20 ">
                  <div className="flex items-center text-xl">
                    <div className=" flex items-center justify-center">
                      <Image
                        src="/icons/scores_icon.svg"
                        alt="settings"
                        layout="fixed"
                        width="15"
                        height="15"
                      />
                    </div>{" "}
                    <h5 className="ml-20 text-primary-darkGreen">Max Score</h5>
                  </div>
                  <div className="flex items-center">
                    <p className=" opacity-0  text-black-analText mr-17">
                      Set Max :
                    </p>
                    <div className="h-30 w-63 flex items-center justify-center  mr-19 ">
                      <h4 className=" text-primary-darkGreen text-xl ">20</h4>
                    </div>
                    <div>
                      <button className="flex items-center justify-center opacity-0">
                        <Image
                          src="/icons/more_info.svg"
                          alt="more info"
                          layout="fixed"
                          width="15"
                          height="15"
                        />
                      </button>
                      {}
                    </div>
                  </div>
                </div>
              </div>
              {/* AUTO SCORING */}
              <div className="">
                <div className="h-1 w-full  border border-border-settingsLine mb-10"></div>
                <div className="flex items-center text-xl pb-20">
                  <div className="flex  gap-4">
                    <Radio
                      id="automatic"
                      name="scoreType"
                      value="automatic"
                      checked={
                        selectedScoringOption === "automatic" ? true : false
                      }
                      handleChange={handleScoringOption}
                    />
                    <p className="ml-20">Use this scoring option</p>
                  </div>
                  <div className="flex flex-col gap-5"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewSettings;
