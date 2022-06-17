import React, { useState } from "react";
import Image from "next/image";
import CheckBox from "./CheckBox";
import CreateDiscInput from "./CreateDiscInput";
import StarterPrompt from "./StarterPrompt";

const CreateDiscussions = ({ setOpenModal }) => {
  const [allDiscussionNames, setAllDiscussionNames] = useState([]);
  const [showInput, setShowInput] = useState("true");
  const [discussionName, setDiscussionName] = useState("");
  const [previewSettings, setPreviewSettings] = useState(false);
  const [activeSetting, setActiveSettings] = useState("StarterPrompt");
  const [starterPromptValue, setStarterPromptValue] = useState("");

  const handleAddDiscussion = (e) => {
    e.preventDefault();
    console.log(discussionName);
    if (discussionName === "") {
    } else {
      setAllDiscussionNames([...allDiscussionNames, discussionName]);
      setShowInput(false);
    }
    setDiscussionName("");
  };
  return (
    <div className="absolute grid place-items-center w-full h-screen top-0 left-0 z-9999 animate-fade-in vp-600:px-20  ">
      <div
        className={`w-1112 h-579 border  border-other-disabled   bg-white-white rounded-md  shadow-createDiscussion relative overflow-hidden flex justify-between`}
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
        pt-80 rounded-l-md w-1/2"
        >
          <div className="">
            <h4 className="text-primary-darkGreen mb-27">Discussions</h4>

            <div className="w-full">
              {allDiscussionNames.map((disc, index) => (
                <div
                  key={index}
                  className="mb-10 flex items-center h-45 w-full px-20 py-9  bg-green-lighterGreen rounded-lg text-lg
      text-gray-text outline-none"
                >
                  <CheckBox id={disc} />
                  <h5 className="ml-20">{disc}</h5>
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
            </div>
          </div>
        </div>
        <div className="h-full border-green-lightGreen w-2"> </div>
        <div
          className=" py-42
        pt-80 rounded-l-md w-1/2"
        >
          {previewSettings ? (
            <div className="px-42 mb-27 flex justify-between items-center ">
              <div className="flex items-center">
                <div className="mr-17 flex items-center justify-center">
                  <Image
                    src="/icons/settings_icon.svg"
                    alt="settings"
                    layout="fixed"
                    width="18"
                    height="18"
                  />
                </div>
                <h4 className="  text-primary-darkGreen">
                  Discussion settings
                </h4>
              </div>
              <button
                className=" text-primary-darkGreen text-lg"
                onClick={() => setPreviewSettings(false)}
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              <div
                className="px-42 flex items-center cursor-pointer mb-29"
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
                    } text-sm`}
                    onClick={() => {
                      setActiveSettings("StarterPrompt");
                    }}
                  >
                    Starter prompt
                  </button>
                  <div className="w-25 border border-other-disabled"></div>
                  <button
                    className={`${
                      activeSetting === "PostInspiration"
                        ? " text-primary-darkGreen  font-medium"
                        : " text-gray-faintGray"
                    } text-sm`}
                    onClick={() => {
                      setActiveSettings("PostInspiration");
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
                    } text-sm`}
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
                    } text-sm`}
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
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateDiscussions;
