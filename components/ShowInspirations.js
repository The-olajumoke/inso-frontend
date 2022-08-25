import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import styles from "@/styles/viewDiscussion.module.css";
import PollTemplate from "./PollTemplate";
import PopularTags from "./PopularTags";
import { GlobalContext } from "@/context/Provider";

import Inspiration from "./Inspiration";
import PostInspCategory from "./PostInspCategory";
import ViewPostInspCategory from "./ViewPostInspCategory";
import ViewInspirations from "./ViewInspirations";
import { getPostInspirations } from "@/context/actions/discussion/getPostInsp";
import { API_URL } from "@/utils/url";
import WhiteLoader from "./whiteLoader";
import postInspIcon from "../public/static/icons/postInspIcon.svg";
import dropdown_white from "../public/static/icons/dropdown_white.svg";
import divider from "../public/static/icons/divider.svg";

const ShowInspirations = ({
  setActiveCommentBox,
  title,
  togglePostInsp,
  btnIsActive,
  onButtonClick,
}) => {
  const [openPostInspirationsDropDown, setOpenPostInspirationsDropDown] =
    useState(false);
  const [activeInspiration, setActiveInspiration] = useState("posting");
  const [activePreview, setActivePreview] = useState("");
  const [viewInspirations, setViewInspirations] = useState(false);
  const [activeViewInspiration, setActiveViewInspiration] = useState("");
  const [currentDetailedInsp, setCurrentDetailedInsp] =
    useState("Ask Something");
  const [PostingInspirations, setPostingInspirations] = useState([]);
  const [RespondingInspirations, setRespondingInspirations] = useState([]);
  const [SynthesizingInspirations, setSynthesizingInspirations] = useState([]);
  const [token, setToken] = useState("");
  const {
    discussionDispatch,
    discussionState: {
      discussion: { loading, postInspData, postLoading, postError },
    },
  } = useContext(GlobalContext);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setToken(accessToken);
  }, []);
  useEffect(() => {
    if (token !== "") {
      getPostInspirations(API_URL, token)(discussionDispatch);
    }
  }, [token]);
  useEffect(() => {
    if (postInspData !== null) {
      setPostingInspirations(postInspData?.posting);
      setRespondingInspirations(postInspData?.responding);
      setSynthesizingInspirations(postInspData?.synthesizing);
    }
  }, [postInspData]);
  // POSTING
  const askSomethingInsp = PostingInspirations.filter(
    (insp) => insp.category === "Ask Something"
  );
  console.log(askSomethingInsp);
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
                src={postInspIcon.src}
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
                src={dropdown_white.src}
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
                      togglePostInsp={togglePostInsp}
                    />
                  )}
                  {currentDetailedInsp === "Connect something" && (
                    <ViewPostInspCategory
                      inspiration={connectSomethingInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                      togglePostInsp={togglePostInsp}
                    />
                  )}
                  {currentDetailedInsp === "Create something" && (
                    <ViewPostInspCategory
                      inspiration={createSomethingInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                      togglePostInsp={togglePostInsp}
                    />
                  )}
                  {currentDetailedInsp === "Share something" && (
                    <ViewPostInspCategory
                      inspiration={shareSomethingInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                      togglePostInsp={togglePostInsp}
                    />
                  )}

                  {currentDetailedInsp === "Start something" && (
                    <ViewPostInspCategory
                      inspiration={startSomethingInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                      togglePostInsp={togglePostInsp}
                    />
                  )}

                  {currentDetailedInsp === "Add" && (
                    <ViewPostInspCategory
                      inspiration={addInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                      togglePostInsp={togglePostInsp}
                    />
                  )}
                  {currentDetailedInsp === "Answer" && (
                    <ViewPostInspCategory
                      inspiration={answerInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                      togglePostInsp={togglePostInsp}
                    />
                  )}
                  {currentDetailedInsp === "Ask" && (
                    <ViewPostInspCategory
                      inspiration={askInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                      togglePostInsp={togglePostInsp}
                    />
                  )}
                  {currentDetailedInsp === "Evaluate" && (
                    <ViewPostInspCategory
                      inspiration={evaluateInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                      togglePostInsp={togglePostInsp}
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
                      togglePostInsp={togglePostInsp}
                    />
                  )}
                  {currentDetailedInsp === "Tags" && (
                    <ViewPostInspCategory
                      inspiration={tagsInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                      togglePostInsp={togglePostInsp}
                    />
                  )}
                  {currentDetailedInsp === "Thread" && (
                    <ViewPostInspCategory
                      inspiration={threadsInsp[0]}
                      setViewInspirations={setViewInspirations}
                      setActiveCommentBox={setActiveCommentBox}
                      togglePostInsp={togglePostInsp}
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
                        src="/static/icons/viewInFull.svg"
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
            src={divider.src}
            alt="divider"
            layout="fixed"
            width="4"
            height="33"
            className=" cursor-pointer"
          />
        </div>
      </div>

      <button
        // disabled={btnIsActive}
        onClick={onButtonClick}
        className="w-93 h-34 text-sm  btn bg-primary-blue"
      >
        {postLoading ? <WhiteLoader /> : "Send"}
      </button>
    </div>
  );
};

export default ShowInspirations;
