import React, { useState } from "react";
import DiscussionBox from "@/components/DiscussionBox";
import Dropdown from "@/components/Dropdown";
import LargeSpinner from "@/components/LargeSpinner";
import Layout from "@/components/Layout";
import Image from "next/image";

import styles from "@/styles/discussion.module.css";
import CreateDiscussions from "@/components/CreateDiscussions";
import { discussions } from "@/utils/sampleData";
const Index = () => {
  let loading = false;
  const [filter, setFilter] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [createDiscussion, setCreateDiscussion] = useState(false);

  const filterOptions = ["All", "Discussions created", "Discussion joined"];

  return (
    <Layout
      title="Inso | Discussions"
      searchBar={true}
      bgColor="bg-gray-background"
    >
      <div
        className={`${styles.hiddenScrollbar} h-full relative p-50 vp-600:p-23 vp-980:p-46 w-full`}
      >
        <div className="flex justify-between w-full mb-33 vp-980:hidden">
          <button
            className="btn text-sm w-259 px-25 flex justify-start items-center h-48 font-medium "
            onClick={() => setCreateDiscussion(true)}
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
              />
            </button>

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
              <p>Archives</p>
            </button>
          </div>
        </div>
        <div className=" hidden vp-980:flex mb-40">
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
          ) : discussions.length ? (
            // <div className=" grid vp-600:grid-cols-1  vp-980:grid-cols-2 vp-1024:grid-cols-3 grid-cols-4  justify-between w-full gap-x-8 gap-y-10 ">
            <div className="flex justify-start flex-wrap gap-8 gap-y-10">
              {discussions.map((disc, index) => (
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
        {createDiscussion && (
          <CreateDiscussions setOpenModal={setCreateDiscussion} />
        )}

        <div className=" vp-980:flex hidden mt-20 h-54 w-full absolute bottom-0  right-9 left-0 justify-end">
          <div className="h-54 w-54 rounded-full bg-primary-darkGreen flex justify-center items-center">
            <Image
              src="/icons/add_icon_white.svg"
              alt="no discussion"
              layout="fixed"
              width="14"
              height="14"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
