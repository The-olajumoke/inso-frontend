import Image from "next/image";
import { useState, useEffect } from "react";
import Calendar from "./Calendar";
import CheckBox from "./CheckBox";
import CreateDiscInput from "./CreateDiscInput";
import Connections from "./Connections";
import DiscussionSettings from "./DiscussionSetting";
import Polls from "./Polls";
import PostInspiration from "./PostInspiration";
import Resources from "./Resources";
import { ScoreSettings } from "./ScoreSettings";
import Tags from "./Tags";
import Threads from "./Threads";

const CreateDiscussion = ({
  deleteItem,
  setDeleteItem,
  icon,
  btnText,
  handleDelete,
  loading,
  success,
  setOpenModal,
}) => {
  const [data, setData] = useState(null);
  const [discussionName, setDiscussionName] = useState("");
  const [createNewDisc, setCreateNewDisc] = useState(false);
  const [showInput, setShowInput] = useState("true");
  const [allDiscussionNames, setAllDiscussionNames] = useState([]);

  const [activeSection, setActiveSection] = useState("discussions");

  const [discussionSettings, setDiscussionSettings] = useState(false);
  const [showDiscussions, setShowDiscussions] = useState(true);

  console.log(activeSection);
  const closeModal = () => {
    setDeleteItem({ ...deleteItem, openModal: false });
  };

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
    <div className="fixed grid place-items-center w-full h-full top-0 left-0 z-9999 animate-fade-in vp-600:px-20  ">
      <div
        // style={{ minHeight: "420px" }}
        className={`w-556  border  border-other-disabled  bg-white-white  rounded-md  shadow-lg relative overflow-hidden`}
      >
        {/*{activeSection === "discussions" && (
          <div className="h-76 flex px-45  w-full items-center justify-between">
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
        )} */}

        {activeSection === "discussions" && (
          <div className="">
            <div className=" px-45  flex flex-col items-center   bg-gray-createDisc ">
              <div className="flex h-55 w-full items-center justify-between ">
                <h3 className=" font-medium text-primary-darkGreen">
                  Discussions
                </h3>
                <div
                  onClick={() => {
                    setDiscussionSettings(!discussionSettings);
                    setShowDiscussions(!showDiscussions);
                  }}
                >
                  <Image
                    src={
                      showDiscussions
                        ? "/icons/arrow_up.svg"
                        : "/icons/arrow_down.svg"
                    }
                    alt="arrows"
                    layout="fixed"
                    width="15"
                    height="15"
                  />
                </div>
              </div>
              {showDiscussions && (
                <div className=" h-220  mt-11 w-full">
                  {allDiscussionNames.map((disc, index) => (
                    <div
                      key={index}
                      className="mb-12 flex items-center h-45 w-full px-20 py-9 bg-blue-lightBlue rounded-lg text-lg
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
              )}
            </div>
            <div
              className="h-55 flex justify-between items-center px-45 py-15 bg-gray-createDisc mt-9"
              onClick={() => {
                setDiscussionSettings(!discussionSettings);
                setShowDiscussions(!showDiscussions);
              }}
            >
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
                <h4 className=" text-gray-text">Discussion settings</h4>
              </div>
              <button>
                <Image
                  src={
                    discussionSettings
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
            {discussionSettings && (
              <DiscussionSettings setActiveSection={setActiveSection} />
            )}
          </div>
        )}
        
        {activeSection === "postInspiration" && (
          <PostInspiration setActiveSection={setActiveSection} />
        )}
        {activeSection === "Threads" && (
          <Threads setActiveSection={setActiveSection} />
        )}
        {activeSection === "Tags" && (
          <Tags setActiveSection={setActiveSection} />
        )}
        {activeSection === "Connections" && (
          <Connections setActiveSection={setActiveSection} />
        )}
        {activeSection === "Polls" && (
          <Polls setActiveSection={setActiveSection} />
        )}
        {activeSection === "Resources" && (
          <Resources setActiveSection={setActiveSection} />
        )}
        {activeSection === "ScoreSettings" && (
          <ScoreSettings setActiveSection={setActiveSection} />
        )}
        {activeSection === "Calendar" && (
          <Calendar setActiveSection={setActiveSection} />
        )}
      </div>
    </div>
  );
};

export default CreateDiscussion;
