import React, { useState, useEffect } from "react";
import Image from "next/image";
import CheckBox from "./CheckBox";
import CreateDiscInput from "./CreateDiscInput";
import StarterPrompt from "./StarterPrompt";
import PostInspiration from "./PostInspiration";
import { ScoreSettings } from "./ScoreSettings";
import SavedSettingsTemplate from "./SavedSettingsTemplate";
import Calendar from "./Calendar";
import CalendarTemp from "./CalendarTemp";
import AllPostInspirations from "./AllPostInspirations";
import { AllSynthInspirations } from "./AllSynthInspirations";
import AllRespondingInspiration from "./AllRespondingInspiration";
const CreateDiscussions = ({ setOpenModal }) => {
  const [allDiscussionNames, setAllDiscussionNames] = useState([]);
  const [showInput, setShowInput] = useState("true");
  const [discussionName, setDiscussionName] = useState("");
  const [activeInspiration, setActiveInspiration] = useState("posting");
  const [previewSettings, setPreviewSettings] = useState(true);
  const [activeSetting, setActiveSettings] = useState("StarterPrompt");
  const [starterPromptValue, setStarterPromptValue] = useState("");
  const [viewInspirations, setViewInspirations] = useState(false);
  const [activeViewInspiration, setActiveViewInspiration] = useState("");
  const [checkedDiscussions, setCheckedDiscussion] = useState([]);
  const [activeDetailedInsp, setActiveDetailedInsp] = useState("");
  const [showDetailedInsp, setShowDetailedInsp] = useState(false);
  const [addInspirationToSettings, setAddInspirationToSettings] =
    useState(true);
  const [addScoresToSettings, setAddScoresToSettings] = useState(true);
  const [addCalendarToSettings, setAddCalendarToSettings] = useState(true);
  const today = new Date();
  let tommorrow = new Date();
  tommorrow.setDate(today.getDate() + 1);
  console.log(tommorrow);

  const [date, setDate] = useState([today, tommorrow]);

  const handleAddDiscussion = (e) => {
    e.preventDefault();
    console.log(discussionName);
    if (discussionName === "") {
    } else {
      const newDisc = {
        // id: 1,
        title: discussionName,
        checked: false,
      };
      setAllDiscussionNames([...allDiscussionNames, newDisc]);
      setShowInput(false);
    }
    setDiscussionName("");
  };

  const handleCheckDisc = (title) => {
    console.log(title);
    const updatedDiscussions = allDiscussionNames.map((disc) => {
      console.log(title);
      console.log(disc.title);
      if (title == disc.title) {
        return {
          ...disc,
          checked: !disc.checked,
        };
      } else {
        return disc;
      }
    });

    setAllDiscussionNames(updatedDiscussions);
  };
  useEffect(() => {
    const filteredCheckedDiscussions = allDiscussionNames.filter(
      (disc) => disc.checked == true
    );
    console.log(filteredCheckedDiscussions);
    setCheckedDiscussion(filteredCheckedDiscussions);
  }, [allDiscussionNames]);
  return (
    <div className="absolute grid place-items-center w-full h-screen top-0 left-0 z-9999 animate-fade-in vp-600:px-20">
      <div
        className={`w-1112 h-660 border  border-other-disabled   bg-white-white rounded-md  shadow-createDiscussion relative overflow-hidden flex justify-between`}
      >
        <div className="h-80  flex px-42  w-full items-center justify-between absolute left-0 right-0 top-0 rounded-t-md">
          <button disabled={true} className=" btn h-34 w-93  rounded text-sm">
            Create
          </button>

          <button
            className="flex justify-center items-center"
            onClick={() => setOpenModal(false)}
          >
            <Image
              src="/icons/cancel.svg"
              alt="cancel"
              layout="fixed"
              width="20"
              height="20"
            />
          </button>
        </div>
        <div
          className="px-42 py-42
        pt-80 rounded-l-md w-1/2 flex flex-col"
        >
          <div className="flex flex-col flex-grow ">
            <h4 className="text-primary-darkGreen mb-27 font-medium ">
              Discussions
            </h4>

            <div className="w-full flex-grow flex flex-col">
              {allDiscussionNames.map((disc, index) => (
                <div
                  key={index}
                  className="mb-10 flex items-center h-45 w-full px-20 py-9  bg-green-lighterGreen rounded-lg text-lg
      text-gray-text outline-none"
                >
                  <CheckBox
                    id={disc.title}
                    checked={disc.checked}
                    handleChange={handleCheckDisc}
                  />
                  <h5 className="ml-20 text-black-analText">{disc.title}</h5>
                </div>
              ))}
              {showInput && (
                <div className="">
                  <form action="" onSubmit={handleAddDiscussion}>
                    <CreateDiscInput
                      type="text"
                      placeholder="Input discussion name"
                      value={discussionName}
                      setValue={setDiscussionName}
                    />
                  </form>
                </div>
              )}

              {allDiscussionNames.length > 0 && (
                <div
                  className=" mt-10 w-full flex justify-end"
                  onClick={() => setShowInput("true")}
                >
                  <Image
                    src="/icons/add_icon_blue.svg"
                    alt="arrows"
                    layout="fixed"
                    width="25"
                    height="25"
                  />
                </div>
              )}
              {allDiscussionNames.length === 0 && (
                <div className="flex-grow flex justify-center items-center">
                  <p className=" text-gray-text">Add new discussion</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="h-full border border-green-lightGreen w-2"> </div>
        <div
          className="
        pt-80 rounded-l-md w-1/2 flex flex-col"
        >
          {previewSettings ? (
            <div className="flex flex-col px-42 flex-grow">
              <div className=" mb-27 flex  justify-between items-center ">
                <div className="flex items-center ">
                  <div className="mr-17 flex items-center justify-center">
                    <Image
                      src="/icons/settings_icon.svg"
                      alt="settings"
                      layout="fixed"
                      width="18"
                      height="18"
                    />
                  </div>
                  <h4 className=" font-medium  text-primary-darkGreen">
                    Discussion settings
                  </h4>
                </div>
                <button
                  className={`btn px-16 py-8 text-lg`}
                  disabled={checkedDiscussions.length == 0 ? true : false}
                  onClick={() => setPreviewSettings(false)}
                >
                  Edit
                </button>
              </div>
              {checkedDiscussions.length == 0 && (
                <div className="border-primary-blue flex flex-grow justify-center items-center">
                  <p>Select a discusion</p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col h-full  flex-grow ">
              {viewInspirations ? (
                <div className="flex-grow flex flex-col">
                  <AllPostInspirations
                    activeViewInspiration={activeViewInspiration}
                    setViewInspirations={setViewInspirations}
                    setActiveViewInspiration={setActiveViewInspiration}
                    setActiveInspiration={setActiveInspiration}
                    activeDetailedInsp={activeDetailedInsp}
                    setActiveDetailedInsp={setActiveDetailedInsp}
                    showDetailedInsp={showDetailedInsp}
                    setShowDetailedInsp={setShowDetailedInsp}
                  />
                  <AllRespondingInspiration
                    activeViewInspiration={activeViewInspiration}
                    setViewInspirations={setViewInspirations}
                    setActiveViewInspiration={setActiveViewInspiration}
                    setActiveInspiration={setActiveInspiration}
                    activeDetailedInsp={activeDetailedInsp}
                    setActiveDetailedInsp={setActiveDetailedInsp}
                    showDetailedInsp={showDetailedInsp}
                    setShowDetailedInsp={setShowDetailedInsp}
                  />
                  {activeViewInspiration === "Calendar" && (
                    <CalendarTemp
                      date={date}
                      setDate={setDate}
                      setViewInspirations={setViewInspirations}
                      setActiveViewInspiration={setActiveViewInspiration}
                      setActiveSettings={setActiveSettings}
                    />
                  )}

                  <AllSynthInspirations
                    activeViewInspiration={activeViewInspiration}
                    setViewInspirations={setViewInspirations}
                    setActiveViewInspiration={setActiveViewInspiration}
                    setActiveInspiration={setActiveInspiration}
                    activeDetailedInsp={activeDetailedInsp}
                    setActiveDetailedInsp={setActiveDetailedInsp}
                    showDetailedInsp={showDetailedInsp}
                    setShowDetailedInsp={setShowDetailedInsp}
                  />

                  {activeViewInspiration === "SavedSettings" && (
                    <SavedSettingsTemplate
                      setViewInspirations={setViewInspirations}
                      setActiveViewInspiration={setActiveViewInspiration}
                    />
                  )}
                </div>
              ) : (
                <div className="flex flex-col h-full ">
                  <div
                    className="px-42   flex items-center cursor-pointer mb-29"
                    onClick={() => setPreviewSettings(true)}
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
                    <h6 className="ml-16 text-gray-faintGray">Close edit</h6>
                  </div>
                  <div className="w-full  mb-19 px-42 ">
                    <div className="flex items-center  gap-8   w-500 ">
                      <button
                        className={`${
                          activeSetting === "StarterPrompt"
                            ? " text-primary-darkGreen  font-medium"
                            : " text-gray-faintGray"
                        }  text-xs`}
                        onClick={() => {
                          setActiveSettings("StarterPrompt");
                        }}
                      >
                        Starter prompt
                      </button>
                      <div className="w-25 border border-other-disabled"></div>
                      <button
                        className={`${
                          activeSetting === "postInspiration"
                            ? " text-primary-darkGreen  font-medium"
                            : " text-gray-faintGray"
                        }  text-xs`}
                        onClick={() => {
                          setActiveSettings("postInspiration");
                        }}
                      >
                        Post Inspiration
                      </button>
                      <div className="w-25 border border-other-disabled"></div>
                      <button
                        className={`${
                          activeSetting === "Scores"
                            ? " text-primary-darkGreen  font-medium"
                            : " text-gray-faintGray"
                        }  text-xs`}
                        onClick={() => {
                          setActiveSettings("Scores");
                        }}
                      >
                        Scores
                      </button>
                      <div className="w-25 border border-other-disabled"></div>
                      <button
                        className={`${
                          activeSetting === "Calendar"
                            ? " text-primary-darkGreen  font-medium"
                            : " text-gray-faintGray"
                        }  text-xs`}
                        onClick={() => {
                          setActiveSettings("Calendar");
                        }}
                      >
                        Calendar
                      </button>
                    </div>
                  </div>
                  {activeSetting === "StarterPrompt" && (
                    <StarterPrompt
                      starterPromptValue={starterPromptValue}
                      setStarterPromptValue={setStarterPromptValue}
                      setActiveSettings={setActiveSettings}
                    />
                  )}
                  {activeSetting === "postInspiration" && (
                    <PostInspiration
                      setActiveSettings={setActiveSettings}
                      setViewInspirations={setViewInspirations}
                      setActiveViewInspiration={setActiveViewInspiration}
                      activeInspiration={activeInspiration}
                      setActiveInspiration={setActiveInspiration}
                      activeDetailedInsp={activeDetailedInsp}
                      setActiveDetailedInsp={setActiveDetailedInsp}
                      showDetailedInsp={showDetailedInsp}
                      setShowDetailedInsp={setShowDetailedInsp}
                      addInspirationToSettings={addInspirationToSettings}
                      setAddInspirationToSettings={setAddInspirationToSettings}
                    />
                  )}
                  {activeSetting === "Scores" && (
                    <ScoreSettings
                      setActiveSettings={setActiveSettings}
                      setViewInspirations={setViewInspirations}
                      setActiveViewInspiration={setActiveViewInspiration}
                      addScoresToSettings={addScoresToSettings}
                      setAddScoresToSettings={setAddScoresToSettings}
                    />
                  )}
                  {activeSetting === "Calendar" && (
                    <Calendar
                      date={date}
                      setActiveSettings={setActiveSettings}
                      setViewInspirations={setViewInspirations}
                      setActiveViewInspiration={setActiveViewInspiration}
                      addCalendarToSettings={addCalendarToSettings}
                      setAddCalendarToSettings={setAddCalendarToSettings}
                    />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateDiscussions;
