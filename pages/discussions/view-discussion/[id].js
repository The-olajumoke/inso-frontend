import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styles from "@/styles/discussion.module.css";
import Image from "next/image";
import Link from "next/link";
import CommentBox from "@/components/CommentBox";

import {
  automaticScoring,
  rubricCriteria,
  rubricScoring,
  tags,
} from "@/utils/sampleData";
import AutomaticScoringTemp from "@/components/AutomaticScoringTemp";
import RubricScoringTemp from "@/components/RubricScoringTemp";
import RubricCriteriaTemp from "@/components/RubricCriteriaTemp";
import AskQuestionsComment from "@/components/CommentBoxesPostInsp/AskQuestionsComment";
import AskForClarityComment from "@/components/CommentBoxesPostInsp/AskForClarityComment";
import FullPostInspirations from "@/components/FullPostInspirations";
import CourseConceptsComment from "@/components/CommentBoxesPostInsp/CourseConceptsComment";
import PersonalExperienceComment from "@/components/CommentBoxesPostInsp/PersonalExperienceComment";
import RealWorldComment from "@/components/CommentBoxesPostInsp/RealWorldComment";
import LegalEthicalComment from "@/components/CommentBoxesPostInsp/LegalEthicalComment";
import AlternativeComment from "@/components/CommentBoxesPostInsp/AlternativeComment";
import MemeComment from "@/components/CommentBoxesPostInsp/MemeComment";
import GraphicOrganizerComment from "@/components/CommentBoxesPostInsp/GraphicOrganizerComment";
import CreateMediaComment from "@/components/CommentBoxesPostInsp/CreateMediaComment";
import ShareMediaComment from "@/components/CommentBoxesPostInsp/ShareMediaComment";
import QuoteComment from "@/components/CommentBoxesPostInsp/QuoteComment";
import StudyStrategiesComment from "@/components/CommentBoxesPostInsp/StudyStrategiesComment";
import DebateComment from "@/components/CommentBoxesPostInsp/DebateComment";
import AMAThreadComment from "@/components/CommentBoxesPostInsp/AMAThreadComment";
import SearchTreeComment from "@/components/CommentBoxesPostInsp/SearchTreeComment";
import AlternativeCommentResp from "@/components/CommentBoxesRespondInsp/AlternativeCommentResp";
import IllustrationsComment from "@/components/CommentBoxesRespondInsp/IllustrationsComment";
import InsightsComment from "@/components/CommentBoxesRespondInsp/InsightsComment";
import ResourcesComment from "@/components/CommentBoxesRespondInsp/ResourcesComment";
import DirectlyComment from "@/components/CommentBoxesRespondInsp/DirectlyComment";
import ClarificationComment from "@/components/CommentBoxesRespondInsp/ClarificationComment";
import QuestionsComment from "@/components/CommentBoxesRespondInsp/QuestionsComment";
import MoreQuestionsComment from "@/components/CommentBoxesRespondInsp/MoreQuestionsComment";
import AskForClarifComment from "@/components/CommentBoxesRespondInsp/AskForClarifComment";
import OneStarFiveComment from "@/components/CommentBoxesRespondInsp/OneStarFiveComment";
import CriticalReviewComment from "@/components/CommentBoxesRespondInsp/CriticalReviewComment";
import LovedLearnedComment from "@/components/CommentBoxesRespondInsp/LovedLearnedComment";
import HeartComment from "@/components/CommentBoxesRespondInsp/HeartComment";
import MadComment from "@/components/CommentBoxesRespondInsp/MadComment";
import MindblownComment from "@/components/CommentBoxesRespondInsp/MindblownComment";
import EditDiscussion from "@/components/EditDiscussion";

const ViewDiscussion = () => {
  const router = useRouter();
  const id = router.query.id;
  const [activeCommentBox, setActiveCommentBox] = useState("noInspiration");
  const [viewAllTags, setViewAllTags] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openEditDropdown, setOpenEditDropdown] = useState(false);
  const [scoreType, setScoreType] = useState("rubric");

  const [showScoresSheet, setShowScoresSheet] = useState(false);
  const [viewFullPostInsp, setViewFullPostInsp] = useState(false);
  const [editDiscussion, setEditDiscussion] = useState(false);

  const togglePostInsp = () => {
    setViewFullPostInsp(!viewFullPostInsp);
  };
  return (
    <Layout
      title={`Inso | Discussion`}
      searchBar={false}
      bgColor="bg-white-white"
    >
      {!viewFullPostInsp ? (
        <div className={` h-full flex flex-col relative w-full `}>
          <div
            className={` h-65 bg-gray-background ${
              viewAllTags ? "mb-0" : "mb-5"
            } px-50 flex items-center justify-between`}
          >
            <div className=" flex items-center">
              <Link href="/discussions" passHref>
                <div className="flex items-center justify-center">
                  <Image
                    src="https://res.cloudinary.com/insomaryland/image/upload/v1655331724/InsoImages/arrow_back_tqezov.svg"
                    alt="back"
                    layout="fixed"
                    width="20"
                    height="20"
                  />
                </div>
              </Link>
              <h4 className="ml-13">Discussion title</h4>
            </div>
            <form action="">
              <div className={`${styles.searchInput}  `}>
                <div className="flex items-center justify-center ">
                  <Image
                    src="https://res.cloudinary.com/insomaryland/image/upload/v1655331753/InsoImages/search_nhky7k.svg"
                    alt="more"
                    layout="fixed"
                    width="13"
                    height="13"
                  />
                </div>
                <input
                  type="text"
                  className={`border-none h-auto focus:ring-0 bg-transparent w-400`}
                  placeholder="Input keyword to search or filter "
                />
              </div>
            </form>
            <div className="flex items-center gap-6">
              <div className="flex items-center justify-center cursor-pointer relative">
                <div
                  className="flex items-center justify-center"
                  onClick={() => setOpenDropdown(true)}
                >
                  <Image
                    src="https://res.cloudinary.com/insomaryland/image/upload/v1655331782/InsoImages/more_icon_desucz.svg"
                    alt="more"
                    layout="fixed"
                    width="5"
                    height="20"
                  />
                </div>
                {openDropdown && (
                  <>
                    <div
                      className={`fixed h-screen w-screen top-0 left-0 bg-other-overlay animate-fade-in z-50`}
                      onClick={() => setOpenDropdown(false)}
                    ></div>
                    <div
                      className={`w-176   top-6  -right-6 bg-white-white absolute p-0 z-60  rounded-lg shadow-xs `}
                    >
                      <div className="w-full ">
                        <div
                          className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8  last:border-none cursor-pointer flex justify-start bg-other-disabled px-20"
                          onClick={() => {
                            setOpenDropdown(false);
                          }}
                        >
                          <div
                            className=" mr-12
                               flex justify-center items-center"
                          >
                            <Image
                              src="https://res.cloudinary.com/insomaryland/image/upload/v1655468832/InsoImages/dashboard_cf2xom.svg"
                              alt="edit"
                              layout="fixed"
                              width="18"
                              height="18"
                            />
                          </div>
                          <p className="text-black-analText ">Drafts</p>
                        </div>
                        {/* <div
                          className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none border-gray-analyticsGray cursor-pointer flex justify-start px-20"
                          onClick={() => {
                            setOpenDropdown(false);
                          }}
                        >
                          <div
                            className=" mr-12
                               flex justify-center items-center"
                          >
                            <Image
                              src="https://res.cloudinary.com/insomaryland/image/upload/v1657101638/InsoImages/gradesheet_green_raitxv.svg"
                              alt="edit"
                              layout="fixed"
                              width="18"
                              height="18"
                            />
                          </div>
                          <p className=" text-black-analText">Gradesheet</p>
                        </div> */}
                        <div
                          className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none border-gray-analyticsGray cursor-pointer flex justify-start  px-20"
                          onClick={() => {
                            setOpenDropdown(false);
                          }}
                        >
                          <div
                            className=" mr-12
                               flex justify-center items-center"
                          >
                            <Image
                              src="https://res.cloudinary.com/insomaryland/image/upload/v1657101638/InsoImages/chart_green_jwsxvj.svg"
                              alt="edit"
                              layout="fixed"
                              width="18"
                              height="18"
                            />
                          </div>
                          <p className=" text-black-analText">Charts</p>
                        </div>
                        <div
                          className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none border-gray-analyticsGray cursor-pointer flex justify-start  px-20"
                          onClick={() => {
                            setOpenDropdown(false);
                            setShowScoresSheet(true);
                          }}
                        >
                          <div
                            className=" mr-12
                               flex justify-center items-center"
                          >
                            <Image
                              src="https://res.cloudinary.com/insomaryland/image/upload/v1657101638/InsoImages/scores_green_tn8iuj.svg"
                              alt="edit"
                              layout="fixed"
                              width="18"
                              height="18"
                            />
                          </div>
                          <p className=" text-black-analText">Scores</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-center justify-center ">
                <Image
                  src="https://res.cloudinary.com/insomaryland/image/upload/v1655331824/InsoImages/divider_er0cbs.svg"
                  alt="divider"
                  layout="fixed"
                  width="20"
                  height="53"
                />
              </div>
              <div className="flex items-center justify-center cursor-pointer">
                <Image
                  src="https://res.cloudinary.com/insomaryland/image/upload/v1655331849/InsoImages/help_icon_ccclpk.svg"
                  alt="help"
                  layout="fixed"
                  width="23"
                  height="23"
                />
              </div>
            </div>
          </div>
          <div className="flex  h-full  overflow-hidden">
            <div
              className={`h-full relative flex flex-col flex-grow  w-1/2 justify-between `}
            >
              <div>
                <div
                  className={` px-50 py-10 bg-gray-background ${
                    showScoresSheet && "pr-4"
                  } `}
                >
                  <div className=" flex justify-between items-center">
                    <div className="flex  items-center">
                      <div className="flex items-center justify-center">
                        <Image
                          src="https://res.cloudinary.com/insomaryland/image/upload/v1655331879/InsoImages/avatar_bdtbd1.svg"
                          alt="back"
                          layout="fixed"
                          width="40"
                          height="40"
                        />
                      </div>
                      <div className="ml-13">
                        <h6 className=" font-medium">
                          Dante Bowe
                          <span className=" text-primary-darkGreen text-xs font-normal ml-3">
                            @DANTE
                          </span>
                        </h6>
                        <span className="text-xs text-gray-faintGray">
                          posted 6 mins ago
                        </span>
                      </div>
                    </div>
                    {showScoresSheet && (
                      <div className="w-128 h-27  text-primary-blue bg-blue-inputBlue flex items-center justify-center rounded">
                        #ReadMode
                      </div>
                    )}
                    {!showScoresSheet && (
                      <div className="flex items-center justify-center relative">
                        <div
                          className="flex items-center justify-center "
                          onClick={() => setOpenEditDropdown(true)}
                        >
                          <Image
                            src="https://res.cloudinary.com/insomaryland/image/upload/v1655331924/InsoImages/more_icon_grey_gpknda.svg"
                            alt="back"
                            layout="fixed"
                            width="6"
                            height="22"
                            className=" cursor-pointer"
                          />
                        </div>
                        {openEditDropdown && (
                          <>
                            <div
                              className={`fixed h-screen w-screen top-0 left-0 bg-other-overlay animate-fade-in z-50`}
                              onClick={() => setOpenEditDropdown(false)}
                            ></div>
                            <div
                              className={`w-176   top-6  -right-6 bg-white-white absolute px-16 py-7 z-60  rounded-lg shadow-xs `}
                            >
                              <div className="w-full ">
                                <div
                                  className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none border-gray-analyticsGray cursor-pointer flex justify-start "
                                  // onClick={}
                                >
                                  <div
                                    className=" mr-12
                               flex justify-center items-center"
                                  >
                                    <Image
                                      src="https://res.cloudinary.com/insomaryland/image/upload/v1657099297/InsoImages/edit_green_ijlfht.svg"
                                      alt="edit"
                                      layout="fixed"
                                      width="12"
                                      height="12"
                                    />
                                  </div>
                                  <p className="text-black-analText ">
                                    Edit discussion
                                  </p>
                                </div>
                                <div
                                  className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none border-gray-analyticsGray  cursor-pointer flex justify-start"
                                  // onClick={() => {
                                  //   setOpenDropdown(false);
                                  // }}
                                >
                                  <div
                                    className=" mr-12
                               flex justify-center items-center"
                                  >
                                    <Image
                                      src="https://res.cloudinary.com/insomaryland/image/upload/v1657099304/InsoImages/close_green_kjr4pd.svg"
                                      alt="edit"
                                      layout="fixed"
                                      width="12"
                                      height="12"
                                    />
                                  </div>
                                  <p className=" text-black-analText">
                                    Close discussion
                                  </p>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                  <p className="mt-10 text-gray-text break-words">
                    What’s your opinion on the Fukushima Nuclear power plant
                    incident in 2011 and how does it relate with current
                    occurences now in 2021?
                  </p>
                </div>
                {showScoresSheet !== true && (
                  <div
                    className={` ${
                      viewAllTags ? "hidden" : "flex"
                    } px-50 mt-7 justify-between`}
                  >
                    <div className="flex items-center gap-4">
                      {tags.map((tag, index) => (
                        <div
                          className="h-32 bg-blue-inputBlue flex gap-8 items-center px-15 rounded-xs"
                          key={index}
                        >
                          <p className=" text-gray-text">#{tag.tagName}</p>
                          <p className=" text-primary-blue">{tag.used}</p>
                        </div>
                      ))}
                    </div>
                    <button
                      className="text-primary-darkGreen text-sm"
                      onClick={() => setViewAllTags(true)}
                    >
                      View all
                    </button>
                  </div>
                )}
              </div>

              <div
                className={`flex flex-col justify-between  h-full ${styles.hiddenScrollbar}`}
              >
                <div className={` py-20 px-50  flex flex-col  pb-150`}>
                  <h6>comments will be here</h6>
                </div>
              </div>

              {/* COMMENT BOX */}
              {showScoresSheet !== true && (
                <div className="px-50  w-full  py-10 absolute bottom-0 bg-white-white ">
                  {activeCommentBox === "noInspiration" && (
                    <CommentBox
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Ask questions" && (
                    <AskQuestionsComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Ask for clarity" && (
                    <AskForClarityComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Course concepts" && (
                    <CourseConceptsComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Personal experience" && (
                    <PersonalExperienceComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Real-world applications" && (
                    <RealWorldComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Legal or ethical concerns" && (
                    <LegalEthicalComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Alternative perspectives" && (
                    <AlternativeComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "A meme" && (
                    <MemeComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "A graphic organizer" && (
                    <GraphicOrganizerComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "A media" && (
                    <CreateMediaComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Media" && (
                    <ShareMediaComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "A Quote" && (
                    <QuoteComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Study strategies" && (
                    <StudyStrategiesComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "A debate" && (
                    <DebateComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "An AMA thread" && (
                    <AMAThreadComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "A search tree" && (
                    <SearchTreeComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {/* RESPONDING */}
                  {activeCommentBox === "Alternatives" && (
                    <AlternativeCommentResp
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Illustrations" && (
                    <IllustrationsComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Insights" && (
                    <InsightsComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Resources" && (
                    <ResourcesComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Directly" && (
                    <DirectlyComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "For clarification" && (
                    <ClarificationComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "More questions" && (
                    <MoreQuestionsComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Questions" && (
                    <QuestionsComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "For Clarification" && (
                    <AskForClarifComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "1 Star 5 Stars" && (
                    <OneStarFiveComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Critical Review" && (
                    <CriticalReviewComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Loved, Learned" && (
                    <LovedLearnedComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Heart" && (
                    <HeartComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Mad" && (
                    <MadComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                  {activeCommentBox === "Mindblown" && (
                    <MindblownComment
                      togglePostInsp={togglePostInsp}
                      setActiveCommentBox={setActiveCommentBox}
                    />
                  )}
                </div>
              )}
            </div>
            {viewAllTags && (
              <div className="border-l-2 w-252   border-border-line">
                <div className=" mb-22 border-b-2 border-other-disabled p-24  flex justify-between items-center">
                  <p className="text-primary-darkGreen">Trending tags (6)</p>
                  <div
                    className="flex justify-center items-center"
                    onClick={() => setViewAllTags(false)}
                  >
                    <Image
                      src="https://res.cloudinary.com/insomaryland/image/upload/v1655455953/InsoImages/cancel_zcyobf.svg"
                      alt="cancel"
                      layout="fixed"
                      width="14"
                      height="14"
                    />
                  </div>
                </div>
                <div className="px-24">
                  {tags.map((tag, index) => (
                    <div
                      className="h-32 mb-10 bg-blue-inputBlue flex mr-10 gap-8 items-center px-15 rounded-xs w-189"
                      key={index}
                    >
                      <p className=" text-gray-text">#{tag.tagName}</p>
                      <p className=" text-primary-blue">{tag.used}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {showScoresSheet && (
              <div className=" w-1/2 py-8 px-20">
                {scoreType === "automatic" && (
                  <div className=" rounded-lg  h-full shadow-lg p-20  flex flex-col">
                    <div className=" flex justify-between items-center">
                      <h6 className=" text-primary-darkGreen ">
                        Automatic scoring
                      </h6>
                      <div
                        className="flex justify-center items-center"
                        onClick={() => setShowScoresSheet(false)}
                      >
                        <Image
                          src="https://res.cloudinary.com/insomaryland/image/upload/v1655455953/InsoImages/cancel_zcyobf.svg"
                          alt="cancel"
                          layout="fixed"
                          width="14"
                          height="14"
                        />
                      </div>
                    </div>

                    <div className={`${styles.tableHeader} grid-cols-12`}>
                      <div className="col-span-4 flex  items-center justify-start">
                        <div className="w-20 opacity-0 mr-10">S</div>
                        <div className="flex  items-center  justify-center">
                          <span>
                            User
                            <span className=" text-gray-faintGray">
                              ({automaticScoring.length})
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="col-span-2 flex  items-center  justify-center">
                        <span className=" text-xs">
                          Instru...{" "}
                          <span className=" text-gray-faintGray">(20)</span>{" "}
                        </span>
                      </div>
                      <div className="col-span-2 flex  items-center  justify-center">
                        <span className=" text-xs">
                          Intera...{" "}
                          <span className=" text-gray-faintGray">(28)</span>
                        </span>
                      </div>
                      <div className="col-span-2 flex  items-center  justify-center">
                        <span className=" text-xs">
                          Impact
                          <span className=" text-gray-faintGray">(12)</span>
                        </span>
                      </div>
                      <div className="col-span-2 flex  items-center  justify-center">
                        <span className=" text-xs">Total score</span>
                      </div>
                    </div>
                    <div
                      className={`${styles.hiddenScrollbar} h-full flex-grow`}
                    >
                      {automaticScoring.map((user, index) => (
                        <AutomaticScoringTemp user={user} key={index} />
                      ))}
                    </div>
                  </div>
                )}

                {scoreType === "rubric" && (
                  <div className=" rounded-lg  h-full shadow-lg p-20  flex flex-col">
                    <div className="flex justify-between items-center">
                      <h6 className=" text-primary-darkGreen ">
                        Rubric scoring
                      </h6>
                      <div
                        className="flex justify-center items-center"
                        onClick={() => setShowScoresSheet(false)}
                      >
                        <Image
                          src="https://res.cloudinary.com/insomaryland/image/upload/v1655455953/InsoImages/cancel_zcyobf.svg"
                          alt="cancel"
                          layout="fixed"
                          width="14"
                          height="14"
                        />
                      </div>
                    </div>
                    <div className={`${styles.tableHeader} grid-cols-10 gap-4`}>
                      <div className="col-span-4 flex  items-center justify-start ">
                        <div className="w-20 opacity-0 mr-10">S</div>
                        <div className="flex  items-center  justify-center">
                          <span>
                            User
                            <span className=" text-gray-faintGray">
                              ({automaticScoring.length})
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className=" col-span-2   flex  items-center  justify-center">
                        <span className=" text-xs">
                          Graded
                          <span className=" text-gray-faintGray">(2)</span>{" "}
                        </span>
                      </div>
                      <div className="col-span-2  flex  items-center  justify-center">
                        <span className=" text-xs">
                          Feedback
                          <span className=" text-gray-faintGray">(28)</span>
                        </span>
                      </div>

                      <div className="col-span-2  flex  items-center  justify-center">
                        <span className=" text-xs">Total score</span>
                      </div>
                    </div>
                    <div className=" h-full">
                      <div className=" h-1/2">
                        <div
                          className={`${styles.hiddenScrollbar} h-full flex-grow`}
                        >
                          {rubricScoring.map((user, index) => (
                            <RubricScoringTemp user={user} key={index} />
                          ))}
                        </div>
                      </div>
                      <div className={` h-1/2`}>
                        <div
                          className={`${styles.tableHeader}  h-1/2  grid-cols-11   gap-4`}
                        >
                          <div className="col-span-5 flex  items-center  justify-start">
                            <span className=" text-xs">
                              Criteria
                              <span className=" text-gray-faintGray">(5)</span>
                            </span>
                          </div>
                          <div className="col-span-4 grid grid-cols-6 justify-between items-center">
                            <span className=" text-gray-analyticsGray">0</span>
                            <span className=" text-gray-analyticsGray">1</span>
                            <span className=" text-gray-analyticsGray">2</span>
                            <span className=" text-gray-analyticsGray">3</span>
                            <span className=" text-gray-analyticsGray">4</span>
                            <span className=" text-gray-analyticsGray">5</span>
                          </div>
                          <div className="col-span-2">
                            <span className=" text-xs">Points</span>
                          </div>
                        </div>

                        <div className={`${styles.hiddenScrollbar} `}>
                          {rubricCriteria.map((item, index) => (
                            <RubricCriteriaTemp item={item} key={index} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {editDiscussion && <EditDiscussion />}
        </div>
      ) : (
        <FullPostInspirations
          setViewFullPostInsp={setViewFullPostInsp}
          setActiveCommentBox={setActiveCommentBox}
        />
      )}
    </Layout>
  );
};

export default ViewDiscussion;
