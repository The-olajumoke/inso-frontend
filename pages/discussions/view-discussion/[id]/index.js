import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styles from "@/styles/discussion.module.css";
import Image from "next/image";
import Link from "next/link";
import CommentBox from "@/components/CommentBox";
import { GlobalContext } from "@/context/Provider";
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
import arrow_back_blue from "../../../../public/static/icons/arrow_back_blue.svg";
import more_icon_grey from "../../../../public/static/icons/more_icon_grey.svg";
import drafts from "../../../../public/static/icons/drafts.svg";
import charts from "../../../../public/static/icons/charts.svg";
import scoreSheet from "../../../../public/static/icons/scoreSheet.svg";
import divider from "../../../../public/static/icons/divider.svg";
import participants from "../../../../public/static/icons/participants.svg";
import help from "../../../../public/static/icons/help.svg";
import edit_grey from "../../../../public/static/icons/edit_grey.svg";
import close_green from "../../../../public/static/icons/close_green.svg";
import cancel from "../../../../public/static/icons/cancel.svg";
import cancel_white from "../../../../public/static/icons/cancel_white.svg";
import avatar from "../../../../public/static/images/avatar.svg";
import moment from "moment";
import { gradeParticipants } from "@/context/actions/discussion/autoGradeParticipants";
import { createPost } from "@/context/actions/discussion/post";
import { setPostFalse } from "@/context/actions/discussion/setPostFalse";
import ScoreSheetTeacher from "@/components/ScoreSheetTeacher";
import ScoreSheetStudent from "@/components/ScoreSheetStudent";
import ShowParticipants from "@/components/ShowParticipants";
import ShowAllTags from "@/components/ShowAllTags";
import ShowCharts from "@/components/ShowCharts";
import { api } from "@/components/api";
import { getDiscNoLoad } from "@/context/actions/discussion/getDiscNoLoad";
import ShowScoresHover from "@/components/ShowScoresHover";
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
  const [datePosted, setDatePosted] = useState("");
  const [allTags, setAllTags] = useState([]);
  const [topSixTags, setTopSixTags] = useState([]);
  const [allParticipants, setAllParticipants] = useState([]);
  const [openChartModal, setOpenChartModal] = useState(false);

  const [hideComments, setHideComments] = useState(false);
  const [activePostInspId, setActivePostInspId] = useState("");
  const [PostingInspirations, setPostingInspirations] = useState([]);
  const [RespondingInspirations, setRespondingInspirations] = useState([]);
  const [SynthesizingInspirations, setSynthesizingInspirations] = useState([]);
  const [currentUserInfo, setCurrentUserInfo] = useState(null);
  const [updatedScores, setUpdatedScores] = useState(null);
  const [replyingId, setReplyingId] = useState({
    user: "",
    id: "",
  });
  const [role, setRole] = useState("facilitator");
  const [feedback, setFeedback] = useState("");
  const [rubricScoringLoading, setRubricScoringLoading] = useState(false);
  const [hoverScores, setHoverScores] = useState(false);
  // const []
  const {
    discussionDispatch,
    discussionState: {
      discussion: {
        loading,
        singleDiscData,
        postInspData,
        postLoading,
        postSuccess,
        autoScoringData,
      },
    },
  } = useContext(GlobalContext);
  const {
    userDispatch,
    userState: {
      user: { profileData },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (userId == singleDiscData?.poster?._id) {
      setRole("facilitator");
    } else {
      setRole("participant");
    }
  }, [userId, singleDiscData]);
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
  }, [id, token]);
  useEffect(() => {
    getDiscNoLoad(API_URL, token, id)(discussionDispatch);
  }, [postSuccess]);
  useEffect(() => {
    if (token !== "") {
      getPostInspirations(API_URL, token)(discussionDispatch);
    }
  }, [id, token]);
  useEffect(() => {
    if (postInspData !== null) {
      setPostingInspirations(postInspData?.posting);
      setRespondingInspirations(postInspData?.responding);
      setSynthesizingInspirations(postInspData?.synthesizing);
    }
  }, [postInspData]);
  console.log(autoScoringData);
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
      setDatePosted(singleDiscData?.created);

      if (
        singleDiscData?.settings?.scores !== null &&
        singleDiscData?.settings?.scores?.type === "auto"
      ) {
        setScoreType("automatic");

        gradeParticipants(
          API_URL,
          token,
          singleDiscData?._id
        )(discussionDispatch);
      }

      if (
        singleDiscData?.settings?.scores !== null &&
        singleDiscData?.settings?.scores?.type === "rubric"
      ) {
        setScoreType("rubric");
        const allScores = singleDiscData?.settings?.scores?.criteria;
        const updatedAllScores = allScores.map((sco) => ({
          ...sco,
          earned: 0,
        }));
        setUpdatedScores(updatedAllScores);
        setScores(updatedAllScores);
      }
      let closeDate = new Date(singleDiscData?.settings?.calendar?.close);
      if (closeDate) {
        let today = new Date();
        let isNotClosed = moment(closeDate).isAfter(today);
        if (!isNotClosed) {
          setHideComments(true);
        }
        if (singleDiscData?.settings?.calendar === null) {
          setHideComments(false);
        }
      }
    }
  }, [singleDiscData]);
  const togglePostInsp = () => {
    setViewFullPostInsp(!viewFullPostInsp);
  };
  const handleCreatePost = (discId, body) => {
    createPost(API_URL, token, discId, body)(discussionDispatch);
  };
  if (postSuccess) {
    setTimeout(() => {
      setPostFalse()(discussionDispatch);
    }, [3000]);
  }
  const handleScoringSuccess = (res) => {
    setCurrentUserInfo(null);
    setRubricScoringLoading(false);
    console.log(res);
    getDiscNoLoad(API_URL, token, id)(discussionDispatch);
  };
  const handleRubricScoring = () => {
    const newTotal = currentUserInfo?.criteria.reduce((a, b) => {
      return a + b.earned;
    }, 0);

    const body = {
      total: newTotal,
      criteria: currentUserInfo.criteria,
      comments: feedback,
    };
    const participantId = currentUserInfo.partId;
    const url = `${API_URL}/discussions/${discId}/participants/${participantId}/grade`;
    console.log(body);
    setRubricScoringLoading(true);
    api("PATCH", url, body, handleScoringSuccess, null);
    // setCurrentUserInfo(null);
  };
  const getPostCallback = (res) => {
    console.log(res);
    setAllPosts(res);
  };
  const getPostForParticularUser = (id) => {
    const url = `${API_URL}/discussion/${discId}/participant/${id}/posts`;
    api("GET", url, null, getPostCallback, null);
  };
  const handleCloseRubric = () => {
    getDiscNoLoad(API_URL, token, id)(discussionDispatch);
  };
  return (
    <Layout
      title={`Inso | Discussion`}
      searchBar={false}
      bgColor="bg-white-white"
      showHeader={false}
    >
      {loading ? (
        <div className="flex items-center justify-center h-[40vh] mt-60">
          <LargeSpinner />
        </div>
      ) : (
        <div className="h-full">
          {!viewFullPostInsp ? (
            <div className={` h-full flex flex-col relative w-full`}>
              <div
                className={` h-65 vp-980:h-auto bg-gray-background ${
                  viewAllTags ? "mb-0" : "mb-5"
                }  vp-980:mt-16 vp-600:mt-0 px-16 vp-min-601:px-42 flex  items-center justify-between py-8 `}
              >
                <div className=" flex items-center">
                  <Link href="/discussions" passHref>
                    <div className="flex items-center justify-center">
                      <Image
                        src={arrow_back_blue.src}
                        alt="back"
                        layout="fixed"
                        width="30"
                        height="30"
                      />
                    </div>
                  </Link>
                  <div className="vp-600:h-28 overflow-hidden ">
                    <h5 className="ml-13 capitalize vp-600:text-md">
                      {discTitle}
                    </h5>
                  </div>
                </div>
                {/* ACTIONS */}
                <div className=" hidden vp-980:flex items-center justify-center relative">
                  <div
                    className="flex items-center justify-center "
                    onClick={() => setOpenDropdown(true)}
                  >
                    <Image
                      src={more_icon_grey.src}
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
                                src={drafts.src}
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
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none border-gray-analyticsGray  cursor-pointer flex justify-start relative"
                            onClick={() => setOpenChartModal(true)}
                          >
                            <div
                              className=" mr-12
                               flex justify-center items-center"
                            >
                              <Image
                                src={charts.src}
                                alt="more"
                                layout="fixed"
                                width="26"
                                height="26"
                              />
                            </div>
                            <p className=" text-black-analText">Charts</p>
                            {/* {openChartModal && (
                              <ShowCharts
                                setOpenChartModal={setOpenChartModal}
                                allTags={allTags}
                              />
                            )} */}
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
                                src={scoreSheet.src}
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
                                src={participants.src}
                                alt="more"
                                layout="fixed"
                                width="21"
                                height="21"
                              />
                            </div>
                            <p className=" text-black-analText">Participants</p>
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
                          src="/static/icons/search.svg"
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
                <div className="flex vp-980:hidden items-center gap-6 h-full">
                  <div
                    className="flex items-end justify-center  h-22"
                    title="Drafts"
                  >
                    <Image
                      src={drafts.src}
                      alt="more"
                      layout="fixed"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className="relative">
                    <div
                      className="flex items-center justify-center "
                      title="Charts"
                      onClick={() => {
                        setOpenChartModal(true);
                        setOpenDropdown(false);
                      }}
                    >
                      <Image
                        src={charts.src}
                        alt="more"
                        layout="fixed"
                        width="26"
                        height="26"
                      />
                    </div>

                    {/* {openChartModal && (
                      <ShowCharts
                        setOpenChartModal={setOpenChartModal}
                        allTags={allTags}
                      />
                    )} */}
                  </div>
                  <div
                    className="relative"
                    onMouseOver={() => setHoverScores(true)}
                    // onMouseLeave={() => setHoverScores(false)}
                  >
                    <div
                      className="flex items-center justify-center"
                      title="Scoresheet"
                      onClick={() => {
                        if (role == "facilitator") {
                          setShowScoresSheet(true);
                        }
                        setShowParticipants(false);
                        setOpenDropdown(false);
                      }}
                    >
                      {" "}
                      <Image
                        src={scoreSheet.src}
                        alt="more"
                        layout="fixed"
                        width="21"
                        height="21"
                      />
                    </div>
                  </div>
                  {hoverScores && role == "participant" && (
                    <ShowScoresHover
                      setHoverScores={setHoverScores}
                      scoreType={scoreType}
                      setShowScoresSheet={setShowScoresSheet}
                      allParticipants={allParticipants}
                      scores={scores}
                      userId={userId}
                      rubricCriteria={scores}
                      showScoresSheet={showScoresSheet}
                    />
                  )}
                  <div
                    className="flex items-center justify-center"
                    title="Participants"
                    onClick={() => {
                      setShowParticipants(true);
                      setShowScoresSheet(false);
                    }}
                  >
                    <Image
                      src={participants.src}
                      alt="more"
                      layout="fixed"
                      width="21"
                      height="21"
                    />
                  </div>
                  <div className="flex items-center justify-center ">
                    <Image
                      src={divider.src}
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
                      src={help.src}
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
                  className={` ${
                    (showScoresSheet || showParticipants) && "vp-980:hidden"
                  } h-full relative flex flex-col flex-grow  w-1/2 justify-between `}
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
                              src={avatar.src}
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
                              {datePosted !== "" &&
                                moment(datePosted).fromNow()}
                            </span>
                          </div>
                        </div>
                        {showScoresSheet && (
                          <div className="w-128 h-27  text-primary-blue bg-blue-inputBlue flex items-center justify-center rounded">
                            #ReadMode
                          </div>
                        )}
                        {hideComments && (
                          <div className="w-128 h-27  text-white-white bg-other-danger flex items-center justify-center rounded">
                            #DiscussionClosed
                          </div>
                        )}

                        {!showScoresSheet && role === "facilitator" && (
                          <div className="flex items-center justify-center relative  ">
                            <div
                              className="flex items-center justify-center "
                              onClick={() => setOpenEditDropdown(true)}
                            >
                              <Image
                                src={more_icon_grey.src}
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
                                            src={edit_grey.src}
                                            alt="edit"
                                            layout="fixed"
                                            width="24"
                                            height="24"
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
                                          src={close_green.src}
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
                        } vp-600:hidden px-16 vp-min-601:px-42 mt-7 justify-between vp-600:overflow-x-scroll `}
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
                    className={`flex flex-col justify-between  h-full ${styles.hiddenScrollbar}  `}
                  >
                    {allPosts.length ? (
                      <div className={` py-20 flex flex-col  pb-150`}>
                        {allPosts.map((post, index) => (
                          <Posts
                            posts={post}
                            key={index}
                            discId={discId}
                            setReplyingId={setReplyingId}
                            userId={userId}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="h-full  flex justify-center items-center text-sm text-other-disabled">
                        No available post
                      </div>
                    )}
                  </div>

                  {/* COMMENT BOX */}
                  {showScoresSheet !== true && (
                    <div
                      className={`px-16 vp-min-601:px-42  w-full  py-10 absolute bottom-0  z-999 bg-white-white ${
                        hideComments && "hidden"
                      }`}
                    >
                      {replyingId.id !== "" && (
                        <div className=" flex items-center gap-4">
                          <p className="mb-2 text-gray-text">
                            replying to{" "}
                            <span className=" text-primary-darkGreen">
                              @{replyingId.user}
                            </span>
                          </p>
                          <button
                            className=" bg-primary-darkGreen h-16 w-16 rounded-full flex justify-center items-center"
                            onClick={() =>
                              setReplyingId({
                                user: "",
                                id: "",
                              })
                            }
                          >
                            <Image
                              src={cancel_white.src}
                              alt="user"
                              layout="fixed"
                              width="8"
                              height="8"
                            />
                          </button>
                        </div>
                      )}
                      {activeCommentBox === "noInspiration" && (
                        <CommentBox
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postLoading={postLoading}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Ask questions" && (
                        <AskQuestionsComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Ask for clarity" && (
                        <AskForClarityComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {console.log(activeCommentBox)}
                      {activeCommentBox === "Course concepts" && (
                        <CourseConceptsComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Personal experience" && (
                        <PersonalExperienceComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Real-world applications" && (
                        <RealWorldComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Legal or ethical concerns" && (
                        <LegalEthicalComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Alternative perspectives" && (
                        <AlternativeComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Create a meme" && (
                        <MemeComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Create a graphic organizer" && (
                        <GraphicOrganizerComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Create media" && (
                        <CreateMediaComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Share media" && (
                        <ShareMediaComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Share a quote" && (
                        <QuoteComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Share study strategies" && (
                        <StudyStrategiesComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Start a debate" && (
                        <DebateComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Start an AMA thread" && (
                        <AMAThreadComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Start a search tree" && (
                        <SearchTreeComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}

                      {/* RESPONDING */}
                      {activeCommentBox === "Add Alternatives" && (
                        <AlternativeCommentResp
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Add Illustrations" && (
                        <IllustrationsComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Add insights" && (
                        <InsightsComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Add resources" && (
                        <ResourcesComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Answer directly" && (
                        <DirectlyComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Answer for clarification" && (
                        <ClarificationComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Answer more questions" && (
                        <MoreQuestionsComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Ask question" && (
                        <QuestionsComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Ask for clarification" && (
                        <AskForClarifComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Evaluate 1 Star to 5 Stars" && (
                        <OneStarFiveComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Critical Review" && (
                        <CriticalReviewComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Loved, Learned" && (
                        <LovedLearnedComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "React with a Heart" && (
                        <HeartComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Mad Reaction" && (
                        <MadComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                      {activeCommentBox === "Mindblown" && (
                        <MindblownComment
                          togglePostInsp={togglePostInsp}
                          setActiveCommentBox={setActiveCommentBox}
                          discId={discId}
                          replyingId={replyingId}
                          postSuccess={postSuccess}
                          participants={allParticipants}
                          activePostInspId={activePostInspId}
                          setActivePostInspId={setActivePostInspId}
                          handleCreatePost={handleCreatePost}
                        />
                      )}
                    </div>
                  )}
                </div>

                {viewAllTags && (
                  <ShowAllTags
                    setViewAllTags={setViewAllTags}
                    allTags={allTags}
                  />
                )}
                {showParticipants && (
                  <ShowParticipants
                    allParticipants={allParticipants}
                    role={role}
                    setShowParticipants={setShowParticipants}
                  />
                )}
                {showScoresSheet && role == "facilitator" && (
                  <ScoreSheetTeacher
                    scoreType={scoreType}
                    setShowScoresSheet={setShowScoresSheet}
                    allParticipants={allParticipants}
                    role={role}
                    scores={scores}
                    setScores={setScores}
                    showScoresSheet={showScoresSheet}
                    currentUserInfo={currentUserInfo}
                    setCurrentUserInfo={setCurrentUserInfo}
                    feedback={feedback}
                    setFeedback={setFeedback}
                    handleRubricScoring={handleRubricScoring}
                    updatedScores={updatedScores}
                    rubricScoringLoading={rubricScoringLoading}
                    setRubricScoringLoading={setRubricScoringLoading}
                    getPostForParticularUser={getPostForParticularUser}
                    handleCloseRubric={handleCloseRubric}
                  />
                )}
                {showScoresSheet && role == "participant" && (
                  <ScoreSheetStudent
                    scoreType={scoreType}
                    setShowScoresSheet={setShowScoresSheet}
                    allParticipants={allParticipants}
                    scores={scores}
                    userId={userId}
                    rubricCriteria={scores}
                    showScoresSheet={showScoresSheet}
                  />
                )}
                {openChartModal && (
                  <ShowCharts
                    setOpenChartModal={setOpenChartModal}
                    allTags={allTags}
                  />
                )}
              </div>
            </div>
          ) : (
            <FullPostInspirations
              setViewFullPostInsp={setViewFullPostInsp}
              setActiveCommentBox={setActiveCommentBox}
              PostingInspirations={PostingInspirations}
              RespondingInspirations={RespondingInspirations}
              SynthesizingInspirations={SynthesizingInspirations}
            />
          )}
        </div>
      )}
    </Layout>
  );
};

export default withAuth(ViewDiscussion);
