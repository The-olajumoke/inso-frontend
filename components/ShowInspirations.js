import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/viewDiscussion.module.css";
import PollTemplate from "./PollTemplate";
import PopularTags from "./PopularTags";
import ResourcesTemp from "./ResourcesTemp";
import ThreadsTemp from "./ThreadsTemp";
import ConnectionTemp from "./ConnectionTemp";
const ShowInspirations = ({ setActiveCommentBox }) => {
  const [openPostInspirationsDropDown, setOpenPostInspirationsDropDown] =
    useState(false);
  const [activeInspiration, setActiveInspiration] = useState("posting");
  const [activePreview, setActivePreview] = useState("");
  const PostingInspirations = [
    "Resources",
    "Polls",
    "Resources",
    "Resources",
    "Polls",
    "Resources",
  ];
  const SynthesizingInspirations = ["Threads", "Popular tags", "Connections"];
  return (
    <div className="flex w-full items-center justify-between px-29 mb-16">
      <div className="flex items-center">
        <div className="relative ">
          <div
            className="mr-15  w-72 bg-primary-darkGreen h-34 flex justify-between items-center px-13 rounded"
            onClick={() =>
              setOpenPostInspirationsDropDown(!openPostInspirationsDropDown)
            }
          >
            <div className="flex justify-center items-center">
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1655332181/InsoImages/postInspIcon_jtqr0p.svg"
                alt="Post Inspiration"
                layout="fixed"
                width="16"
                height="16"
                className=" cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src=" https://res.cloudinary.com/insomaryland/image/upload/v1655332180/InsoImages/dropdown_white_phtac2.svg"
                alt="back"
                layout="fixed"
                width="10"
                height="5"
                className=" cursor-pointer"
              />
            </div>
          </div>
          {openPostInspirationsDropDown && (
            <div
              className={`${styles.dropdown}  absolute px-37 py-22 bg-white-white  shadow-lg`}
            >
              <div className="relative">
                {activePreview === "Polls" && <PollTemplate />}
                {activePreview === "Popular tags" && <PopularTags />}
                {activePreview === "Resources" && <ResourcesTemp />}
                {activePreview === "Resources" && <ResourcesTemp />}
                {activePreview === "Threads" && <ThreadsTemp />}
                {activePreview === "Connections" && <ConnectionTemp />}

                <div className="grid  grid-cols-3 text-sm gap-8 mb-20">
                  <button
                    className={`${
                      activeInspiration === "posting" ? "btn" : "btn-nonActive"
                    }   h-30`}
                    onClick={() => setActiveInspiration("posting")}
                  >
                    Posting
                  </button>
                  <button
                    className={`${
                      activeInspiration === "responding"
                        ? "btn"
                        : "btn-nonActive"
                    }   h-30`}
                    onClick={() => setActiveInspiration("responding")}
                  >
                    Responding
                  </button>
                  <button
                    className={`${
                      activeInspiration === "synthesizing"
                        ? "btn"
                        : "btn-nonActive"
                    }   h-30`}
                    onClick={() => setActiveInspiration("synthesizing")}
                  >
                    Synthesizing
                  </button>
                </div>
                {activeInspiration === "posting" && (
                  <div className="">
                    <div className="overflow-auto flex flex-col gap-3">
                      {PostingInspirations.map((insp, index) => (
                        <div
                          key={index}
                          className={`h-45 bg-blue-lightBlue rounded-lg text-md text-black-analText px-20 flex items-center cursor-pointer 
                            }`}
                          onClick={() => {
                            if (insp === "Polls") {
                              setActiveCommentBox("Polls");
                            }
                            if (insp === "Resources") {
                              setActiveCommentBox("Resources");
                            }
                          }}
                          onMouseOver={() => {
                            if (insp === "Polls") {
                              setActivePreview("Polls");
                            }
                            if (insp === "Resources") {
                              setActivePreview("Resources");
                            }
                          }}
                        >
                          {insp}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeInspiration === "responding" && (
                  <div className="">
                    <div className="overflow-auto flex flex-col gap-3">
                      {PostingInspirations.map((insp, index) => (
                        <div
                          key={index}
                          className={`h-45 bg-blue-lightBlue rounded-lg text-md text-black-analText px-20 flex items-center  cursor-pointer
                            }`}
                          onMouseOver={() => {
                            if (insp === "Polls") {
                              setActivePreview("Polls");
                            }
                            if (insp === "Resources") {
                              setActivePreview("Resources");
                            }
                          }}
                        >
                          {insp}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeInspiration === "synthesizing" && (
                  <div className="overflow-auto flex flex-col gap-3">
                    {SynthesizingInspirations.map((insp, index) => (
                      <div
                        key={index}
                        className={`h-45 bg-blue-lightBlue rounded-lg text-md text-black-analText px-20 flex  cursor-pointer items-center 
                            }`}
                        onMouseOver={() => {
                          if (insp === "Popular tags") {
                            setActivePreview("Popular tags");
                          }
                          if (insp === "Threads") {
                            setActivePreview("Threads");
                          }
                          if (insp === "Connections") {
                            setActivePreview("Connections");
                          }
                        }}
                      >
                        {insp}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center mr-15">
          <Image
            src="https://res.cloudinary.com/insomaryland/image/upload/v1655331824/InsoImages/divider_er0cbs.svg"
            alt="font"
            layout="fixed"
            width="4"
            height="33"
            className=" cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-12">
          <Image
            src="https://res.cloudinary.com/insomaryland/image/upload/v1655332608/font_icon_xubtsf.svg"
            alt="font"
            layout="fixed"
            width="20"
            height="20"
            className=" cursor-pointer"
          />
          <Image
            src="https://res.cloudinary.com/insomaryland/image/upload/v1655332613/emoji_icon_xamatp.svg"
            alt="emoji"
            layout="fixed"
            width="22"
            height="22"
            className=" cursor-pointer"
          />
          <Image
            src="https://res.cloudinary.com/insomaryland/image/upload/v1655332629/attach_icon_vm5na4.svg"
            alt="attach"
            layout="fixed"
            width="20"
            height="20"
            className=" cursor-pointer"
          />
          <Image
            src="https://res.cloudinary.com/insomaryland/image/upload/v1655332639/image_icon_e9zrlz.svg"
            alt="image"
            layout="fixed"
            width="18"
            height="18"
            className=" cursor-pointer"
          />
        </div>
      </div>

      <button disabled={true} className="w-93 h-34 text-sm  btn">
        Send
      </button>
    </div>
  );
};

export default ShowInspirations;
