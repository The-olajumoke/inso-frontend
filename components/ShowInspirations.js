import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/viewDiscussion.module.css";
import PollTemplate from "./PollTemplate";
import PopularTags from "./PopularTags";
import {
  PostingInspirations,
  RespondingInspirations,
  SynthesizingInspirations,
} from "@/utils/sampleData";
import Inspiration from "./Inspiration";
import PostInspCategory from "./PostInspCategory";
import ViewPostInspCategory from "./ViewPostInspCategory";
import ViewInspirations from "./ViewInspirations";

const ShowInspirations = ({ setActiveCommentBox, title, togglePostInsp }) => {
  const [openPostInspirationsDropDown, setOpenPostInspirationsDropDown] =
    useState(false);
  const [activeInspiration, setActiveInspiration] = useState("posting");
  const [activePreview, setActivePreview] = useState("");
  const [viewInspirations, setViewInspirations] = useState(false);
  const [activeViewInspiration, setActiveViewInspiration] = useState("");
  const [currentDetailedInsp, setCurrentDetailedInsp] =
    useState("Ask Something");

  // POSTING
  const askSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Ask Something"
  );
  const connectSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Connect something"
  );
  const createSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Create something"
  );
  const shareSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Share something"
  );
  const startSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Start something"
  );
  //RESPONDING
  const addInsp = RespondingInspirations.filter(
    (insp) => insp.category === "Add"
  );
  const answerInsp = RespondingInspirations.filter(
    (insp) => insp.category === "Answer"
  );
  const askInsp = RespondingInspirations.filter(
    (insp) => insp.category === "Ask"
  );
  const evaluateInsp = RespondingInspirations.filter(
    (insp) => insp.category === "Evaluate"
  );
  const reactInsp = RespondingInspirations.filter(
    (insp) => insp.category === "React"
  );
  // SYNTHESIZING

  const connectionsInsp = SynthesizingInspirations.filter(
    (insp) => insp.category === "Connections"
  );
  const tagsInsp = SynthesizingInspirations.filter(
    (insp) => insp.category === "Tags"
  );
  const threadsInsp = SynthesizingInspirations.filter(
    (insp) => insp.category === "Thread"
  );

  return (
    <div className="flex w-full items-center absolute bottom-1 justify-between right-0 left-0  pb-5 px-20 vp-600:px-10">
      <div className="flex items-center">
        <div className="relative ">
          <div
            className="mr-15  w-auto bg-primary-darkGreen h-34 flex justify-between items-center px-13 rounded gap-3 cursor-pointer"
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
            <p className=" text-white-white cursor-pointer">{title}</p>
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
              className={`${styles.dropdown} absolute bg-white-white shadow-lg z-99999 `}
            >
              {viewInspirations ? (
                <div className="">
                  {currentDetailedInsp === "Ask Something" && (
                    <ViewPostInspCategory
                      inspiration={askSomethingInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {currentDetailedInsp === "Connect something" && (
                    <ViewPostInspCategory
                      inspiration={connectSomethingInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {currentDetailedInsp === "Create something" && (
                    <ViewPostInspCategory
                      inspiration={createSomethingInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {currentDetailedInsp === "Share something" && (
                    <ViewPostInspCategory
                      inspiration={shareSomethingInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}

                  {currentDetailedInsp === "Start something" && (
                    <ViewPostInspCategory
                      inspiration={startSomethingInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}

                  {currentDetailedInsp === "Add" && (
                    <ViewPostInspCategory
                      inspiration={addInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {currentDetailedInsp === "Answer" && (
                    <ViewPostInspCategory
                      inspiration={answerInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {currentDetailedInsp === "Ask" && (
                    <ViewPostInspCategory
                      inspiration={askInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {currentDetailedInsp === "Evaluate" && (
                    <ViewPostInspCategory
                      inspiration={evaluateInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {currentDetailedInsp === "React" && (
                    <ViewPostInspCategory
                      inspiration={reactInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {currentDetailedInsp === "Connections" && (
                    <ViewPostInspCategory
                      inspiration={connectionsInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {currentDetailedInsp === "Tags" && (
                    <ViewPostInspCategory
                      inspiration={tagsInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {currentDetailedInsp === "Thread" && (
                    <ViewPostInspCategory
                      inspiration={threadsInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                </div>
              ) : (
                <div className="relative ">
                  <div className="flex justify-between items-center mb-18  gap-4">
                    <div className="grid  grid-cols-3 text-sm  gap-4 vp-600:gap-2 flex-grow ">
                      <button
                        style={{ fontSize: "10px" }}
                        className={`${
                          activeInspiration === "posting"
                            ? "btn"
                            : "btnPostInspNonActive"
                        }   h-25 px-10`}
                        onClick={() => setActiveInspiration("posting")}
                      >
                        Post with
                      </button>
                      <button
                        style={{ fontSize: "10px" }}
                        className={`${
                          activeInspiration === "responding"
                            ? "btn"
                            : "btnPostInspNonActive"
                        }   h-25 px-10`}
                        onClick={() => setActiveInspiration("responding")}
                      >
                        Respond with
                      </button>

                      <button
                        style={{ fontSize: "10px" }}
                        className={`${
                          activeInspiration === "synthesizing"
                            ? "btn"
                            : "btnPostInspNonActive"
                        }   h-25 px-10`}
                        onClick={() => setActiveInspiration("synthesizing")}
                      >
                        Synthesize
                      </button>
                    </div>
                    <div
                      className="flex justify-center items-center"
                      onClick={togglePostInsp}
                    >
                      <Image
                        src="https://res.cloudinary.com/insomaryland/image/upload/v1657549596/viewInFull_tw4vq9.svg"
                        alt="post inspiration in full"
                        layout="fixed"
                        width="15"
                        height="21"
                      />
                    </div>
                  </div>

                  {activeInspiration === "posting" && (
                    <div className="">
                      <div className="overflow-auto flex flex-col">
                        {PostingInspirations.map((insp, index) => (
                          <ViewInspirations
                            key={index}
                            insp={insp}
                            setViewInspirations={setViewInspirations}
                            setCurrentDetailedInsp={setCurrentDetailedInsp}
                            togglePostInsp={togglePostInsp}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  {activeInspiration === "responding" && (
                    <div className="">
                      <div className="overflow-auto flex flex-col">
                        {RespondingInspirations.map((insp, index) => (
                          <ViewInspirations
                            key={index}
                            insp={insp}
                            setViewInspirations={setViewInspirations}
                            setCurrentDetailedInsp={setCurrentDetailedInsp}
                            togglePostInsp={togglePostInsp}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  {activeInspiration === "synthesizing" && (
                    <div className="overflow-auto flex flex-col gap-3">
                      {SynthesizingInspirations.map((insp, index) => (
                        <ViewInspirations
                          key={index}
                          insp={insp}
                          setViewInspirations={setViewInspirations}
                          setCurrentDetailedInsp={setCurrentDetailedInsp}
                          togglePostInsp={togglePostInsp}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
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
        {/* <div className="flex items-center gap-12">
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
        </div> */}
      </div>

      <button disabled={true} className="w-93 h-34 text-sm  btn">
        Send
      </button>
    </div>
  );
};

export default ShowInspirations;
