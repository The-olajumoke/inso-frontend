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
import { createArchivedDiscussion } from "@/context/actions/discussion/createArchivedDisc";
import { joinDiscussion } from "@/context/actions/discussion/joinDiscussion";

import add_icon_white from "../../public/static/icons/add_icon_white.svg";
import sort from "../../public/static/new_icons/sort.svg";
import archive from "../../public/static/new_icons/archive.svg";
import { getDiscCreated } from "@/context/actions/discussion/getDiscussionCreated";
import { getDiscJoined } from "@/context/actions/discussion/getDiscussionJoined";
import { getDiscSearch } from "@/context/actions/discussion/getDiscussionSearch";
const Index = () => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(null);
  const [filter, setFilter] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [allDiscussions, setAllDiscussions] = useState([]);
  const [searchItem, setSearchItem] = useState("");

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

  const createArchived = (discId) => {
    createArchivedDiscussion(API_URL, token, discId)(discussionDispatch);
  };
  const filterOptions = ["All", "Discussions created", "Discussion joined"];
  useEffect(() => {
    if (filter === "All") {
      getDiscussions(API_URL, token, userId)(discussionDispatch);
    }
    if (filter === "Discussions created") {
      getDiscCreated(API_URL, token, userId)(discussionDispatch);
    }
    if (filter === "Discussion joined") {
      getDiscJoined(API_URL, token, userId)(discussionDispatch);
    }
  }, [filter]);

  const handleJoinDiscussion = (code) => {
    joinDiscussion(API_URL, token, userId, code)(discussionDispatch);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    getDiscSearch(API_URL, token, userId, searchItem)(discussionDispatch);
  };
  return (
    <Layout
      title="Inso | Discussions"
      searchBar={true}
      bgColor="bg-gray-background"
      searchItem={searchItem}
      setSearchItem={setSearchItem}
      handleSearch={handleSearch}
    >
      <div
        className={`${styles.hiddenScrollbar} relative h-full p-35 vp-600:p-23 vp-980:p-46 w-full`}
      >
        <div className="flex justify-between w-full mb-33 vp-980:hidden">
          <Link passHref href="/discussions/create-discussion">
            <button
              className="btn text-sm w-259 px-25 flex justify-start items-center h-48 font-medium "
              // onClick={() => setCreateDiscussion(true)}
            >
              <div className="flex justify-center items-center mr-15">
                <Image
                  src={add_icon_white.src}
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
                icon={sort}
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
                    src={archive.src}
                    alt="create discussion"
                    layout="fixed"
                    width="24"
                    height="24"
                  />
                </div>
                <span className="text-xs">Archives</span>
              </button>
            </Link>
          </div>
        </div>
        <div className=" hidden vp-980:flex mb-20 w-full items-center">
          {/* <div className="flex items-center vp-600:flex-col"> */}
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className={`${styles.searchInput} border-none flex-grow `}
              placeholder="Search"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </form>
          <div className=" vp-980:flex hidden h-54 w-full justify-end">
            <Link passHref href="/discussions/create-discussion">
              <div className="h-54 w-54 rounded-full bg-primary-darkGreen flex justify-center items-center">
                <Image
                  src={add_icon_white.src}
                  alt="no discussion"
                  layout="fixed"
                  width="14"
                  height="14"
                />
              </div>
            </Link>
          </div>
          {/* </div> */}
          {/* <div className="flex items-center justify-center ml-20">
            <Image
              src="/static/icons/more_icon.svg"
              alt="more"
              layout="fixed"
              width="20"
              height="20"
            />
          </div> */}
        </div>

        <div className="relative">
          {loading ? (
            <div className="flex items-center justify-center h-[40vh]">
              <LargeSpinner />
            </div>
          ) : allDiscussions.length ? (
            <div className="flex justify-start flex-wrap gap-8 gap-y-10 ">
              {allDiscussions.map((disc, index) => (
                <DiscussionBox
                  discussion={disc}
                  key={index}
                  createArchived={createArchived}
                  userId={userId}
                />
              ))}
            </div>
          ) : (
            <div className=" flex flex-col items-center justify-end h-400 ">
              <Image
                src="/static/illustrations/no_discussion.svg"
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

        {/* <div className=" vp-980:flex hidden mt-20 h-54 w-full absolute bottom-0  right-9 left-0 justify-end">
          <Link passHref href="/discussions/create-discussion">
            <div className="h-54 w-54 rounded-full bg-primary-darkGreen flex justify-center items-center">
              <Image
                src={add_icon_white.src}
                alt="no discussion"
                layout="fixed"
                width="14"
                height="14"
              />
            </div>
          </Link>
        </div> */}
      </div>
    </Layout>
  );
};
export default withAuth(Index);
