import React, { useState } from "react";
import Image from "next/image";
import RubricInput from "./RubricInput";
import CheckBox from "./CheckBox";

const SavedSettings = ({
  title,
  setViewInspirations,
  setActiveViewInspiration,
}) => {
  const [activeSetting, setActiveSetting] = useState("Automatic");
  const [openSettings, setOpenSettings] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleAddCriteria = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div
      className="mb-7  cursor-pointer"
      onClick={() => {
        setViewInspirations(true);
        setActiveViewInspiration("SavedSettings");
      }}
    >
      <div
        className=" bg-gray-createDisc px-45"
        onClick={() => setOpenSettings(!openSettings)}
      >
        <div
          className=" flex items-center h-45 w-full  bg-blue-lightBlue rounded-lg text-lg justify-between text-black-analText
     outline-none px-20"
        >
          <h6>{title}</h6>
          <Image
            src="/icons/delete_green.svg"
            alt="back"
            layout="fixed"
            width="15"
            height="15"
          />
        </div>
      </div>

      {/* {openSettings && (
        <div className="border bg-gray-createDisc pt-8 px-45">
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
          {activeSetting === "Rubric" && (
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
          )}
          {activeSetting === "Automatic" && (
            <div className="bg-gray-createDisc">
              <div className="h-30 flex items-center w-full  text-gray-text justify-between mb-24">
                <div className="flex items-center text-xl">
                  <CheckBox />
                  <h5 className="ml-20">Instructions</h5>
                </div>
                <div className="flex items-center">
                  <p className=" text-gray-text mr-17">Set Max :</p>
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
              <div className="h-30 flex items-center w-full  text-gray-text justify-between mb-24">
                <div className="flex items-center text-xl">
                  <CheckBox />
                  <h5 className="ml-20">Posts</h5>
                </div>
                <div className="flex items-center">
                  <p className=" text-gray-text mr-17">Set Max :</p>
                  <input
                    type="text"
                    placeholder="20"
                    className="h-30 w-63 mr-19  text-xl bg-blue-lightBlue rounded border-none"
                  />
                  <button>
                    <Image
                      src="/icons/more_info.svg"
                      alt="more info"
                      layout="fixed"
                      width="15"
                      height="15"
                    />
                  </button>
                </div>
              </div>
              <div className="h-30 flex items-center w-full  text-gray-text justify-between  mb-33">
                <div className="flex items-center text-xl">
                  <CheckBox />
                  <h5 className="ml-20">Impact</h5>
                </div>
                <div className="flex items-center">
                  <p className=" text-gray-text mr-17">Set Max :</p>
                  <input
                    type="text"
                    placeholder="20"
                    className="h-30 w-63 mr-19  text-xl bg-blue-lightBlue rounded border-none"
                  />
                  <button className="flex items-center justify-center ">
                    <Image
                      src="/icons/more_info.svg"
                      alt="more info"
                      layout="fixed"
                      width="15"
                      height="15"
                    />
                  </button>
                </div>
              </div>
              <div className="h-30 flex items-center w-full  text-gray-text justify-between  pb-27">
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
                  <p className=" opacity-0  text-gray-text mr-17">Set Max :</p>
                  <div className="h-30 w-63 flex items-center justify-center  mr-19 ">
                    <h4 className=" text-xl ">20</h4>
                  </div>
                  <button className="flex items-center justify-center opacity-0">
                    <Image
                      src="/icons/more_info.svg"
                      alt="more info"
                      layout="fixed"
                      width="15"
                      height="15"
                    />
                  </button>
                </div>
              </div>
              <div className="h-1 w-full  border border-border-settingsLine mb-10"></div>
              <div className="flex items-center text-xl pb-20">
                <CheckBox checked={true} />
                <p className="ml-20">Use this scoring option</p>
              </div>
            </div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default SavedSettings;
