import React, { useContext, useEffect, useState } from "react";
import DiscussionBox from "@/components/DiscussionBox";
import Dropdown from "@/components/Dropdown";
import LargeSpinner from "@/components/LargeSpinner";
import Layout from "@/components/Layout";
import Image from "next/image";
import { GlobalContext } from "@/context/Provider";

import styles from "@/styles/discussion.module.css";

import withAuth from "@/HOC/withAuth";
import Link from "next/link";
import { getDiscussions } from "@/context/actions/discussion/getDiscussions";
import { API_URL } from "@/utils/url";
const Index = () => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(null);
  const [filter, setFilter] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [allDiscussions, setAllDiscussions] = useState([]);

  // const [createDiscussion, setCreateDiscussion] = useState(false);
  // const [createDiscussionResp, setCreateDiscussionResp] = useState(false);

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
    if (userId !== null && token !== "") {
      getDiscussions(API_URL, token, userId)(discussionDispatch);
    }
  }, [userId, token]);

  useEffect(() => {
    if (discussionData !== null) {
      console.log(discussionData);
      setAllDiscussions(discussionData);
    }
  }, [error, loading, discussionData]);

  const filterOptions = ["All", "Discussions created", "Discussion joined"];

  return (
    <Layout
      title="Inso | Discussions"
      searchBar={true}
      bgColor="bg-gray-background"
    >
      <div
        className={`${styles.hiddenScrollbar} relative h-full py-50 px-35 vp-600:p-23 vp-980:p-46 w-full`}
      >
        <div className="flex justify-between w-full mb-33 vp-980:hidden">
          <Link passHref href="/discussions/create-discussion">
            <button
              className="btn text-sm w-259 px-25 flex justify-start items-center h-48 font-medium "
              // onClick={() => setCreateDiscussion(true)}
            >
              <div className="flex justify-center items-center mr-15">
                <Image
                  src="/icons/add_icon_white.svg"
                  alt="create discussion"
                  layout="fixed"
                  width="14"
                  height="14"
                />
              </div>
              Create new discussion
            </button>
          </Link>

          <div className="flex items-center">
            <button className="flex items-center mr-43">
              <Dropdown
                value={filter}
                setValue={setFilter}
                icon="/icons/filter_icon.svg"
                title="Filter by..."
                items={filterOptions}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                showTitle={true}
              />
            </button>

            <Link passHref href="/discussions/archives">
              <button className="flex items-center">
                <div className="mr-14 flex justify-center items-center">
                  <Image
                    src="/icons/archive_icon.svg"
                    alt="create discussion"
                    layout="fixed"
                    width="18"
                    height="18"
                  />
                </div>
                <span className="text-xs">Archives</span>
              </button>
            </Link>
          </div>
        </div>
        <div className=" hidden vp-980:flex mb-20">
          <input
            type="text"
            className={`${styles.searchInput} border-none flex-grow `}
            placeholder="Search"
          />
          <div className="flex items-center justify-center ml-20">
            <Image
              src="/icons/more_icon.svg"
              alt="more"
              layout="fixed"
              width="20"
              height="20"
            />
          </div>
        </div>

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
                src="/illustrations/no_discussion.svg"
                alt="no discussion"
                layout="fixed"
                width="128"
                height="128"
              />
              <h6 className=" text-gray-illustrationText">
                It’s lonely in here. Create a new discussion
              </h6>
            </div>
          )}
        </div>

        <div className=" vp-980:flex hidden mt-20 h-54 w-full absolute bottom-0  right-9 left-0 justify-end">
          <Link passHref href="/discussions/create-discussion">
            <div className="h-54 w-54 rounded-full bg-primary-darkGreen flex justify-center items-center">
              <Image
                src="/icons/add_icon_white.svg"
                alt="no discussion"
                layout="fixed"
                width="14"
                height="14"
              />
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
// export default Index;
export default withAuth(Index);
