import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/utils/url";
import { GlobalContext } from "@/context/Provider";
import StarterPrompt from "@/components/StarterPrompt";
import { updateStarterPrompt } from "@/context/actions/discussion/updateStarterPrompt";
import withAuth from "@/HOC/withAuth";
import Calendar from "@/components/Calendar";
import ScoresSetting from "@/components/ScoresSetting";
import UpdateDiscussion from "@/components/UpdateDiscussion";
import styles from "@/styles/discussion.module.css";
import { getSingleDiscussion } from "@/context/actions/discussion/getSingleDiscussion";
import { createCalendar } from "@/context/actions/discussion/createCalendar";
import { createScores } from "@/context/actions/discussion/createScores";
import { addCalendarToDiscSettings } from "@/context/actions/discussion/addCalendarToSettings";
import moment from "moment";
import { addAvailScoresToSettings } from "@/context/actions/discussion/addScoresToSettings";
import { createDiscussion } from "@/context/actions/discussion/createDiscussion";
import { updateDiscussion } from "@/context/actions/discussion/updateDiscussion";
import SettingsSuccess from "@/components/SettingsSuccess";
import LargeSpinner from "@/components/LargeSpinner";
import arrow_back_blue from "../../../public/static/icons/arrow_back_blue.svg";

// import checkbox_blue from "../../../public/static/icons/checkbox_blue.svg";
import checkbox_blue from "../../../public/static/icons/arrow_back_blue.svg";
const DiscussionSettings = () => {
  const router = useRouter();
  const id = router.query.id;

  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [activeSettings, setActiveSettings] = useState("updateDisc");
  const [discId, setDiscId] = useState("");
  const [discName, setDiscName] = useState("");
  const [starterPrompt, setStarterPrompt] = useState(
    "<p>For this discussion, we are going to explore ______</p>"
  );

  const [starterPromptValue, setStarterPromptValue] = useState("");
  const today = new Date();
  today.setDate(today.getDate() + 1);
  let tommorrow = new Date();
  tommorrow.setDate(today.getDate() + 6);
  const [date, setDate] = useState([today, tommorrow]);
  const [diffInDays, setDiffInDays] = useState(null);

  const [selectedScoringOption, setSelectedScoringOption] =
    useState("automatic");
  const [addCalendarToSettings, setAddCalendarToSettings] = useState(true);
  const [addScoresToSettings, setAddScoresToSettings] = useState(true);
  const [activeScoring, setActiveScoring] = useState("automatic");
  const [maxScore, setMaxScore] = useState("");
  const [postMade, setPostMade] = useState("");
  const [activeDays, setActiveDays] = useState("");
  const [comments, setComments] = useState("");
  const [usePostInsp, setUsePostInsp] = useState("No");
  const [discInsoCode, setDiscInsoCode] = useState(null);
  const [allCriteriaRubric, setAllCriteriaRubric] = useState([]);
  const [rubricTotalScore, setRubricTotalScore] = useState("");

  const {
    discussionDispatch,
    discussionState: {
      discussion: {
        createLoading,
        createData,
        createError,
        loading,
        singleDiscData,
        starterPromptLoading,
        starterPromptData,
        calendarLoading,
        calendarData,
        scoreLoading,
        scoreData,
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
    setActiveSettings("updateDisc");
  }, []);
  useEffect(() => {
    if (singleDiscData !== null) {
      console.log(singleDiscData);
      setDiscName(singleDiscData?.name);
      if (singleDiscData?.settings?.starter_prompt !== "") {
        setStarterPrompt(singleDiscData?.settings?.starter_prompt);
      } else {
      }
      if (singleDiscData?.settings?.calendar !== null) {
        setDate([
          new Date(singleDiscData?.settings?.calendar?.open),
          new Date(singleDiscData?.settings?.calendar?.close),
        ]);
      }
      if (
        singleDiscData?.settings?.scores !== null &&
        singleDiscData?.settings?.scores?.type === "auto"
      ) {
        setMaxScore(singleDiscData?.settings?.scores.total);
        setPostMade(singleDiscData?.settings?.scores.posts_made?.required);
        setActiveDays(singleDiscData?.settings?.scores.active_days?.required);
        setComments(
          singleDiscData?.settings?.scores.comments_received?.required
        );
        if (
          singleDiscData?.settings?.scores.post_inspirations?.selected === true
        ) {
          setUsePostInsp("Yes");
        }
        if (
          singleDiscData?.settings?.scores !== null &&
          singleDiscData?.settings?.scores?.type === "auto"
        ) {
          setSelectedScoringOption("automatic");
          setActiveScoring("automatic");
        }
      }

      if (
        singleDiscData?.settings?.scores !== null &&
        singleDiscData?.settings?.scores?.type === "rubric"
      ) {
        setRubricTotalScore(singleDiscData?.settings?.scores.total);
        const crit = singleDiscData?.settings?.scores?.criteria.map(
          (cri) => cri.criteria
        );
        console.log(crit);
        setAllCriteriaRubric(crit);
        if (singleDiscData?.settings?.scores?.type === "rubric") {
          setSelectedScoringOption("rubric");
          setActiveScoring("rubric");
        }
      }
      setDiscInsoCode(singleDiscData?.insoCode);
    }
  }, [singleDiscData]);
  useEffect(() => {
    const Difference_In_Time = date[1].getTime() - date[0].getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    setDiffInDays(Math.round(Difference_In_Days));
  }, [date]);
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
    if (id !== null && id !== "") {
      console.log(id);
      setDiscId(id);
    }
  }, [id]);
  useEffect(() => {
    if (token !== "" && discId !== "") {
      getSingleDiscussion(API_URL, token, discId)(discussionDispatch);
    }
  }, [discId, token, id, createData, calendarData, scoreData]);

  useEffect(() => {
    console.log(calendarData);

    if (calendarData !== null) {
      const body = {
        calendar: calendarData,
      };

      addCalendarToDiscSettings(
        API_URL,
        token,
        body,
        discId
      )(discussionDispatch);
    }
  }, [calendarData]);

  useEffect(() => {
    console.log(scoreData);

    if (scoreData !== null) {
      const body = {
        score: scoreData,
      };

      addAvailScoresToSettings(
        API_URL,
        token,
        body,
        discId
      )(discussionDispatch);
    }
  }, [scoreData]);

  const handleStarterPrompt = () => {
    const body = {
      starter_prompt: starterPromptValue,
    };
    console.log(body);
    updateStarterPrompt(API_URL, token, body, discId)(discussionDispatch);
  };

  const handleCreateCalendar = () => {
    const body = {
      open: `${date[0]}`,
      close: `${date[1]}`,
    };
    console.log(body);
    createCalendar(API_URL, token, body, userId)(discussionDispatch);
  };
  const handleCreateScoring = (body) => {
    console.log(body);
    createScores(API_URL, token, body, userId)(discussionDispatch);
  };
  const handleCreateDisc = () => {
    const body = {
      name: discName,
      poster: `${userId}`,
      facilitators: [`${userId}`],
    };
    updateDiscussion(API_URL, token, body, discId)(discussionDispatch);
  };

  return (
    <Layout bgColor="bg-gray-background">
      <div
        className={` ${styles.hiddenScrollbar} relative h-full py-35 pb-15 px-35 vp-600:p-23 vp-980:p-46 w-full flex flex-col`}
      >
        <div className=" flex items-center cursor-pointer  justify-between mt-8">
          <div className="flex items-center">
            <Link href="/discussions" passHref>
              <div className="flex items-center justify-center">
                <Image
                  src={"/" + arrow_back_blue.src}
                  alt="back"
                  layout="fixed"
                  width="30"
                  height="30"
                />
              </div>
            </Link>
            <h4 className="ml-13">Discussion Settings</h4>
          </div>
          <div onClick={() => setActiveSettings("success")}>
            <h4 className=" text-primary-darkGreen">Done</h4>
          </div>
        </div>
        {loading ? (
          <div className="flex items-center justify-center h-[40vh] mt-60">
            <LargeSpinner />
          </div>
        ) : (
          <div className=" w-full flex-grow justify-center">
            {activeSettings !== "success" && (
              <div className="flex items-center gap-4 cursor-pointer w-full justify-center pt-35 vp-600:pt-20  vp-600:grid vp-600:grid-cols-2">
                <div
                  className={`flex items-center`}
                  onClick={() => setActiveSettings("updateDisc")}
                >
                  {discName !== "" && (
                    <Image
                      src={"/" + checkbox_blue.src}
                      alt="success"
                      layout="fixed"
                      width="14"
                      height="14"
                    />
                  )}
                  <p
                    className={`ml-10 ${
                      activeSettings === "updateDisc"
                        ? " text-primary-darkGreen  font-medium"
                        : " text-gray-faintGray font-light"
                    }`}
                  >
                    Discussion name
                  </p>
                </div>
                <div className="w-20  bg-other-disabled border border-other-disabled vp-600:hidden"></div>

                <div
                  className={`flex items-center`}
                  onClick={() => setActiveSettings("starterPrompt")}
                >
                  {singleDiscData?.settings?.starter_prompt !== "" && (
                    <Image
                      src={"/" + checkbox_blue.src}
                      alt="success"
                      layout="fixed"
                      width="14"
                      height="14"
                    />
                  )}
                  <p
                    className={`ml-10 ${
                      activeSettings === "starterPrompt"
                        ? " text-primary-darkGreen  font-medium"
                        : " text-gray-faintGray font-light"
                    }`}
                  >
                    Starter prompt
                  </p>
                </div>
                <div className="w-20  bg-other-disabled border border-other-disabled  vp-600:hidden"></div>
                <div
                  className="flex items-center"
                  onClick={() => setActiveSettings("duration")}
                >
                  {singleDiscData?.settings?.calendar !== null && (
                    <Image
                      src={"/" + checkbox_blue.src}
                      alt="success"
                      layout="fixed"
                      width="14"
                      height="14"
                    />
                  )}
                  <p
                    className={`ml-10 ${
                      activeSettings === "duration"
                        ? " text-primary-darkGreen  font-medium"
                        : " text-gray-faintGray font-light"
                    }`}
                  >
                    Duration
                  </p>
                </div>
                <div className="w-20  bg-other-disabled border border-other-disabled  vp-600:hidden"></div>
                <div
                  className="flex items-center"
                  onClick={() => setActiveSettings("scores")}
                >
                  {singleDiscData?.settings?.scores !== null && (
                    <Image
                      src={"/" + checkbox_blue.src}
                      alt="success"
                      layout="fixed"
                      width="14"
                      height="14"
                    />
                  )}
                  <p
                    className={`ml-10 ${
                      activeSettings === "scores"
                        ? " text-primary-darkGreen  font-medium"
                        : " text-gray-faintGray font-light"
                    }`}
                  >
                    Scores
                  </p>
                </div>
              </div>
            )}
            <div className=" flex justify-center mt-37">
              {activeSettings === "updateDisc" && (
                <UpdateDiscussion
                  discName={discName}
                  setDiscName={setDiscName}
                  createLoading={createLoading}
                  createData={createData}
                  handleCreateDisc={handleCreateDisc}
                  setActiveSettings={setActiveSettings}
                />
              )}
              {activeSettings === "starterPrompt" && (
                <StarterPrompt
                  setActiveSettings={setActiveSettings}
                  setStarterPromptValue={setStarterPromptValue}
                  handleStarterPrompt={handleStarterPrompt}
                  discName={discName}
                  starterPrompt={starterPrompt}
                  starterPromptLoading={starterPromptLoading}
                  starterPromptData={starterPromptData}
                />
              )}
              {activeSettings === "duration" && (
                <Calendar
                  setActiveSettings={setActiveSettings}
                  date={date}
                  addCalendarToSettings={addCalendarToSettings}
                  setAddCalendarToSettings={setAddCalendarToSettings}
                  setDate={setDate}
                  diffInDays={diffInDays}
                  handleCreateCalendar={handleCreateCalendar}
                  calendarLoading={calendarLoading}
                  calendarData={calendarData}
                />
              )}
              {activeSettings === "scores" && (
                <ScoresSetting
                  setActiveSettings={setActiveSettings}
                  addScoresToSettings={addScoresToSettings}
                  setAddScoresToSettings={setAddScoresToSettings}
                  selectedScoringOption={selectedScoringOption}
                  setSelectedScoringOption={setSelectedScoringOption}
                  handleCreateScoring={handleCreateScoring}
                  activeScoring={activeScoring}
                  setActiveScoring={setActiveScoring}
                  maxScore={maxScore}
                  setMaxScore={setMaxScore}
                  postMade={postMade}
                  setPostMade={setPostMade}
                  activeDays={activeDays}
                  setActiveDays={setActiveDays}
                  comments={comments}
                  setComments={setComments}
                  usePostInsp={usePostInsp}
                  setUsePostInsp={setUsePostInsp}
                  scoreLoading={scoreLoading}
                  scoreData={scoreData}
                  allCriteriaRubric={allCriteriaRubric}
                  setAllCriteriaRubric={setAllCriteriaRubric}
                  rubricTotalScore={rubricTotalScore}
                  setRubricTotalScore={setRubricTotalScore}
                  diffInDays={diffInDays}
                />
              )}
              {activeSettings === "success" && (
                <SettingsSuccess
                  insoCode={discInsoCode}
                  setActiveSettings={setActiveSettings}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withAuth(DiscussionSettings);
