import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styles from "@/styles/discussion.module.css";
import Image from "next/image";
import Link from "next/link";
import CommentBox from "@/components/CommentBox";
import { GlobalContext } from "@/context/Provider";

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
import { API_URL } from "@/utils/url";
import { getSingleDiscussion } from "@/context/actions/discussion/getSingleDiscussion";
import LargeSpinner from "@/components/LargeSpinner";
import withAuth from "@/HOC/withAuth";
import { getPostInspirations } from "@/context/actions/discussion/getPostInsp";
import Posts from "@/components/Posts";
import ParticipantsRow from "@/components/ParticipantsRow";
const parse = require("html-react-parser");
const ViewDiscussion = () => {
  const router = useRouter();
  const id = router.query.id;
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(null);
  const [discId, setDiscId] = useState(null);
  const [activeCommentBox, setActiveCommentBox] = useState("noInspiration");
  const [viewAllTags, setViewAllTags] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openEditDropdown, setOpenEditDropdown] = useState(false);
  const [scoreType, setScoreType] = useState("");

  const [showScoresSheet, setShowScoresSheet] = useState(false);
  const [viewFullPostInsp, setViewFullPostInsp] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);
  const [discTitle, setDiscTitle] = useState("");
  const [starterPrompt, setStarterPrompt] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [scores, setScores] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [topSixTags, setTopSixTags] = useState([]);
  const [allParticipants, setAllParticipants] = useState([]);
  const [replyingId, setReplyingId] = useState({
    user: "",
    id: "",
  });
  const {
    discussionDispatch,
    discussionState: {
      discussion: { loading, singleDiscData, postInspData, postSuccess },
    },
  } = useContext(GlobalContext);
  const {
    userDispatch,
    userState: {
      user: { profileData },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    setToken(accessToken);
  }, []);
  useEffect(() => {
    if (profileData !== null) {
      const { _id } = profileData;
      setUserId(_id);
    }
  }, [profileData]);
  useEffect(() => {
    if (token !== "" && id) {
      getSingleDiscussion(API_URL, token, id)(discussionDispatch);
    }
  }, [id, token, postSuccess]);
  useEffect(() => {
    if (token !== "") {
      getPostInspirations(API_URL, token)(discussionDispatch);
    }
  }, [id, token]);
  useEffect(() => {
    if (postInspData !== null) {
    }
  }, [postInspData]);
  console.log(allPosts);
  useEffect(() => {
    if (singleDiscData !== null) {
      setDiscTitle(singleDiscData.name);
      setDiscId(singleDiscData._id);
      setStarterPrompt(singleDiscData?.settings?.starter_prompt);
      setFirstName(singleDiscData?.poster.f_name);
      setLastName(singleDiscData?.poster.l_name);
      setUserName(singleDiscData?.poster.username);
      setAllPosts(singleDiscData?.posts);
      setAllParticipants(singleDiscData?.participants);
      setAllTags(singleDiscData?.tags);
      setTopSixTags(singleDiscData?.tags?.slice(0, 5));
      if (
        singleDiscData?.settings?.scores !== null &&
        singleDiscData?.settings?.scores?.type === "auto"
      ) {
        setScoreType("automatic");
        // setScores(singleDiscData?.settings?.scores?.criteria);
      }

      if (
        singleDiscData?.settings?.scores !== null &&
        singleDiscData?.settings?.scores?.type === "rubric"
      ) {
        setScoreType("rubric");
        setScores(singleDiscData?.settings?.scores?.criteria);
      }
    }
  }, [singleDiscData]);
  const togglePostInsp = () => {
    setViewFullPostInsp(!viewFullPostInsp);
  };

  return (
    <Layout
      title={`Inso | Discussion`}
      searchBar={false}
      bgColor="bg-white-white"
      showHeader={false}
    >
      {/* {loading ? (
        <div className="flex items-center justify-center h-[40vh] mt-60">
          <LargeSpinner />
        </div>
      ) : ( */}
      <div className="h-full">
        {!viewFullPostInsp ? (
          <div className={` h-full flex flex-col relative w-full `}>
            <div
              className={` h-65 vp-980:h-auto bg-gray-background ${
                viewAllTags ? "mb-0" : "mb-5"
              }  vp-980:mt-16 px-16 vp-min-601:px-42 flex  items-center justify-between `}
            >
              <div className=" flex items-center">
                <Link href="/discussions" passHref>
                  <div className="flex items-center justify-center">
                    <Image
                      src="https://res.cloudinary.com/insomaryland/image/upload/v1660169099/arrow_back_blue_jqgoiq.svg"
                      alt="back"
                      layout="fixed"
                      width="30"
                      height="30"
                    />
                  </div>
                </Link>
                <h5 className="ml-13 capitalize">{discTitle}</h5>
              </div>
              {/* ACTIONS */}
              <div className=" hidden vp-980:flex items-center justify-center relative">
                <div
                  className="flex items-center justify-center "
                  onClick={() => setOpenDropdown(true)}
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
                {openDropdown && (
                  <>
                    <div
                      className={`fixed h-screen w-screen top-0 left-0 bg-other-overlay animate-fade-in z-50`}
                      onClick={() => setOpenDropdown(false)}
                    ></div>
                    <div
                      className={`w-176   top-6  -right-6 bg-white-white absolute px-16 py-7 z-60  rounded-lg shadow-xs `}
                    >
                      <div className="w-full ">
                        <div
                          className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none border-gray-analyticsGray  cursor-pointer flex justify-start"
                        >
                          <div
                            className=" mr-12
                               flex justify-center items-center"
                          >
                            <Image
                              src="https://res.cloudinary.com/insomaryland/image/upload/v1660172073/drafts_y6fbx2.svg"
                              alt="more"
                              layout="fixed"
                              width="20"
                              height="20"
                            />
                          </div>
                          <p className=" text-black-analText">Drafts</p>
                        </div>
                        <div
                          className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none border-gray-analyticsGray  cursor-pointer flex justify-start"
                        >
                          <div
                            className=" mr-12
                               flex justify-center items-center"
                          >
                            <Image
                              src="https://res.cloudinary.com/insomaryland/image/upload/v1660172073/charts_izhlnl.svg"
                              alt="more"
                              layout="fixed"
                              width="21"
                              height="21"
                            />
                          </div>
                          <p className=" text-black-analText">Charts</p>
                        </div>
                        <div
                          className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none border-gray-analyticsGray  cursor-pointer flex justify-start"
                          onClick={() => {
                            setShowScoresSheet(true);
                            setShowParticipants(false);
                            setOpenDropdown(false);
                          }}
                        >
                          <div
                            className=" mr-12
                               flex justify-center items-center"
                          >
                            <Image
                              src="https://res.cloudinary.com/insomaryland/image/upload/v1660172073/scoreSheet_fpziio.svg"
                              alt="more"
                              layout="fixed"
                              width="21"
                              height="21"
                            />
                          </div>
                          <p className=" text-black-analText">Scoresheet</p>
                        </div>
                        <div
                          className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none border-gray-analyticsGray  cursor-pointer flex justify-start"
                          onClick={() => {
                            setShowParticipants(true);
                            setShowScoresSheet(false);
                            setOpenDropdown(false);
                          }}
                        >
                          <div
                            className=" mr-12
                               flex justify-center items-center"
                          >
                            <Image
                              src="https://res.cloudinary.com/insomaryland/image/upload/v1660172073/participants_zgvlm1.svg"
                              alt="more"
                              layout="fixed"
                              width="21"
                              height="21"
                            />
                          </div>
                          <p className=" text-black-analText">Participantst</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* <div className="vp-980:hidden">
                  <form action="">
                    <div className={`${styles.searchInput}     `}>
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
                </div> */}
              <div className="flex vp-980:hidden items-center gap-6 h-full border">
                <div
                  className="flex items-end justify-center  h-22"
                  title="Drafts"
                >
                  <Image
                    src="https://res.cloudinary.com/insomaryland/image/upload/v1660172073/drafts_y6fbx2.svg"
                    alt="more"
                    layout="fixed"
                    width="20"
                    height="20"
                  />
                </div>
                <div
                  className="flex items-center justify-center "
                  title="Charts"
                >
                  <Image
                    src="https://res.cloudinary.com/insomaryland/image/upload/v1660172073/charts_izhlnl.svg"
                    alt="more"
                    layout="fixed"
                    width="21"
                    height="21"
                  />
                </div>
                <div
                  className="flex items-center justify-center "
                  title="Scoresheet"
                  onClick={() => {
                    setShowScoresSheet(true);
                    setShowParticipants(false);
                    setOpenDropdown(false);
                  }}
                >
                  {" "}
                  <Image
                    src="https://res.cloudinary.com/insomaryland/image/upload/v1660172073/scoreSheet_fpziio.svg"
                    alt="more"
                    layout="fixed"
                    width="21"
                    height="21"
                  />
                </div>
                <div
                  className="flex items-center justify-center "
                  title="Participants"
                  onClick={() => {
                    setShowParticipants(true);
                    setShowScoresSheet(false);
                  }}
                >
                  <Image
                    src="https://res.cloudinary.com/insomaryland/image/upload/v1660172073/participants_zgvlm1.svg"
                    alt="more"
                    layout="fixed"
                    width="21"
                    height="21"
                  />
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
                <div
                  className="flex items-center justify-center cursor-pointer"
                  title="Help"
                >
                  <Image
                    src="https://res.cloudinary.com/insomaryland/image/upload/v1660172073/help_aako7c.svg"
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
                    className={` px-16 vp-min-601:px-42 py-10 bg-gray-background ${
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
                          <h6 className=" font-medium capitalize">
                            {firstName} {lastName}
                            <span className=" text-primary-darkGreen text-xs font-normal ml-3 uppercase">
                              @{userName}
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
                                  <Link
                                    passHref
                                    href={`/discussions/edit-discussion/${id}`}
                                  >
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
                                  </Link>
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
                    {singleDiscData?.settings?.starter_prompt === "" ? (
                      <p className=" text-black-postInsp">
                        For this discussion, we are going to explore{" "}
                        {parse(discTitle)}
                      </p>
                    ) : (
                      <div className="mt-10 text-black-postInsp  break-words">
                        {parse(starterPrompt)}
                      </div>
                    )}
                  </div>
                  {showScoresSheet !== true && (
                    <div
                      className={` ${
                        viewAllTags ? "hidden" : "flex"
                      } px-16 vp-min-601:px-42 mt-7 justify-between vp-600:overflow-x-scroll `}
                    >
                      <div className="flex items-center gap-2  w-full ">
                        {topSixTags?.map((tag, index) => (
                          <div
                            className="h-25 bg-blue-inputBlue flex  items-center px-8 rounded-xs "
                            key={index}
                          >
                            <p className=" text-gray-text  flex">
                              #{parse(tag.tag)}
                            </p>
                            <p className="ml-16 text-primary-blue">
                              {tag.count}
                            </p>
                          </div>
                        ))}
                      </div>
                      <button
                        className=" w-100 text-primary-darkGreen text-sm "
                        onClick={() => setViewAllTags(true)}
                      >
                        View all
                      </button>
                    </div>
                  )}
                </div>

                <div
                  className={`flex flex-col justify-between  h-full ${styles.hiddenScrollbar} `}
                >
                  <div
                    className={` py-20 px-16 vp-min-601:px-42  flex flex-col  pb-150`}
                  >
                    {allPosts?.map((post, index) => (
                      <Posts
                        posts={post}
                        key={index}
                        discId={discId}
                        setReplyingId={setReplyingId}
                      />
                    ))}
                  </div>
                </div>

                {/* COMMENT BOX */}
                {showScoresSheet !== true && (
                  <div className="px-16 vp-min-601:px-42  w-full  py-10 absolute bottom-0 bg-white-white">
                    {replyingId.id !== "" && (
                      <p className="mb-2 text-gray-text">
                        replying to{" "}
                        <span className=" text-primary-darkGreen">
                          @{replyingId.user}
                        </span>
                      </p>
                    )}
                    {activeCommentBox === "noInspiration" && (
                      <CommentBox
                        togglePostInsp={togglePostInsp}
                        setActiveCommentBox={setActiveCommentBox}
                        discId={discId}
                        replyingId={replyingId}
                        postSuccess={postSuccess}
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
                <div className="border-l-2 w-252 border-primary-darkGreen">
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
                    {allTags.map((tag, index) => (
                      <div
                        className="h-32 mb-10 bg-blue-inputBlue flex mr-10 gap-8 items-center px-15 rounded-xs w-189"
                        key={index}
                      >
                        <p className=" text-gray-text  flex">
                          #{parse(tag.tag)}
                        </p>
                        <p className="ml-16 text-primary-blue">{tag.count}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {showParticipants && (
                <div className="border-l-2 w-350 border-primary-darkGreen">
                  <div className=" mb-22 border-b-2 border-other-disabled p-24  flex justify-between items-center">
                    <p className="text-primary-darkGreen">Participants (4)</p>
                    <div
                      className="flex justify-center items-center"
                      onClick={() => setShowParticipants(false)}
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
                  {/* PARTICIPANTS */}
                  {allParticipants.map((parti, index) => (
                    <ParticipantsRow key={index} participants={parti} />
                  ))}
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

                      <div className={`${styles.tableHeader} grid-cols-8`}>
                        <div className="col-span-3 flex  items-center justify-start">
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
                        <div className=" flex  items-center  justify-center">
                          <span className=" text-xs">Posts</span>
                        </div>
                        <div className=" flex  items-center  justify-center">
                          <span className=" text-xs">Days</span>
                        </div>
                        <div className=" flex  items-center  justify-center">
                          <span className=" text-xs">Comments</span>
                        </div>
                        <div className=" flex  items-center  justify-center">
                          <span className=" text-xs">P. insp</span>
                        </div>
                        <div className=" flex  items-center  justify-center">
                          <span className=" text-xs">Total score</span>
                        </div>
                      </div>
                      <div
                        className={`${styles.hiddenScrollbar} h-full flex-grow`}
                      >
                        {automaticScoring.map((user, index) => (
                          <AutomaticScoringTemp
                            user={user}
                            key={index}
                            scores={scores}
                          />
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
                      <div
                        className={`${styles.tableHeader} grid-cols-10 gap-4`}
                      >
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
                            <span className=" text-gray-faintGray">
                              (2)
                            </span>{" "}
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
                              <RubricScoringTemp
                                user={user}
                                key={index}
                                scores={scores}
                              />
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
                                <span className=" text-gray-faintGray">
                                  (5)
                                </span>
                              </span>
                            </div>
                            <div className="col-span-4 grid grid-cols-6 justify-between items-center">
                              <span
                                className=" text-gray-analyticsGray cursor-pointer"
                                title={rubricCriteria.totalScore * 0}
                              >
                                0
                              </span>
                              <span
                                className=" text-gray-analyticsGray cursor-pointer"
                                title={rubricCriteria.totalScore * 0.5}
                              >
                                1
                              </span>
                              <span
                                className=" text-gray-analyticsGray cursor-pointer"
                                title={rubricCriteria.totalScore * 0.7}
                              >
                                2
                              </span>
                              <span
                                className=" text-gray-analyticsGray cursor-pointer"
                                title={rubricCriteria.totalScore * 0.8}
                              >
                                3
                              </span>
                              <span
                                className=" text-gray-analyticsGray cursor-pointer"
                                title={rubricCriteria.totalScore * 0.9}
                              >
                                4
                              </span>
                              <span
                                className=" text-gray-analyticsGray cursor-pointer"
                                title={rubricCriteria.totalScore * 1}
                              >
                                5
                              </span>
                            </div>
                            <div className="col-span-2">
                              <span className=" text-xs">Points</span>
                            </div>
                          </div>

                          <div className={`${styles.hiddenScrollbar} `}>
                            {scores?.map((item, index) => (
                              <RubricCriteriaTemp
                                item={item}
                                key={index}
                                // total={rubricCriteria.totalScore}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <FullPostInspirations
            setViewFullPostInsp={setViewFullPostInsp}
            setActiveCommentBox={setActiveCommentBox}
          />
        )}
      </div>
      {/* )} */}
    </Layout>
  );
};

export default withAuth(ViewDiscussion);
