import React, { useContext, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/discussion.module.css";
import { GlobalContext } from "@/context/Provider";
import { getArchivedDiscussions } from "@/context/actions/discussion/getArchivedDiscussion";
import { API_URL } from "@/utils/url";
import LargeSpinner from "@/components/LargeSpinner";
import DiscussionBox from "@/components/DiscussionBox";
import Image from "next/image";
const Archives = () => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(null);
  const [allDiscussions, setAllDiscussions] = useState([]);
  const {
    discussionDispatch,
    discussionState: {
      discussion: { loading, error, discussionData },
    },
  } = useContext(GlobalContext);

  const {
    userDispatch,
    userState: {
      user: { profileData },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (userId !== null && token !== "") {
      getArchivedDiscussions(API_URL, token, userId)(discussionDispatch);
    }
  }, [userId, token]);
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
    if (discussionData !== null) {
      console.log(discussionData);
      setAllDiscussions(discussionData);
    }
  }, [error, loading, discussionData]);
  return (
    <Layout title="Inso | Archives">
      <div
        className={`${styles.hiddenScrollbar} relative h-full py-50 px-38 vp-600:p-23 vp-980:p-46 w-full`}
      >
        <h4 className=" text-primary-darkGreen">Archives</h4>
        <div className="relative">
          {loading ? (
            <div className="flex items-center justify-center h-[40vh]">
              <LargeSpinner />
            </div>
          ) : allDiscussions.length ? (
            <div className="flex justify-start flex-wrap gap-8 gap-y-10 ">
              {allDiscussions.map((disc, index) => (
                <DiscussionBox discussion={disc} key={index} />
              ))}
            </div>
          ) : (
            <div className=" flex flex-col items-center justify-end h-400 ">
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1659792852/no_discussion_chztel.svg"
                alt="no discussion"
                layout="fixed"
                width="128"
                height="128"
              />
              <h6 className=" text-gray-illustrationText">
                No available discussion in archives
              </h6>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Archives;
