import React, { useState } from "react";
import DiscussionBox from "@/components/DiscussionBox";
import Dropdown from "@/components/Dropdown";
import LargeSpinner from "@/components/LargeSpinner";
import Layout from "@/components/Layout";
import Image from "next/image";
import CreateDiscussion from "@/components/CreateDiscussion";

const index = () => {
  let loading = false;
  // const discussions = [
  //   {
  //     id: 1,
  //     userName: "Patrick Dempsey",
  //     users: 5,
  //     title: "Price Action in Foreign Exchange",
  //     date: "Mar 21",
  //     code: "51RP70F",
  //   },
  //   {
  //     id: 2,
  //     userName: "Patrick Dempsey",
  //     users: 5,
  //     title: "Price Action in Foreign Exchange",
  //     date: "Mar 21",
  //     code: "51RP70F",
  //   },
  //   {
  //     id: 3,
  //     userName: "Patrick Dempsey",
  //     users: 5,
  //     title: "Price Action in Foreign Exchange",
  //     date: "Mar 21",
  //     code: "51RP70F",
  //   },
  //   {
  //     id: 4,
  //     userName: "Patrick Dempsey",
  //     users: 5,
  //     title: "Price Action in Foreign Exchange",
  //     date: "Mar 21",
  //     code: "51RP70F",
  //   },
  // ];
  const discussions = [];
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
      <div className=" h-full py-50 px-50">
        <div className="flex justify-between w-full mb-33">
          <button
            className="btn text-sm w-259 px-25 flex justify-start items-center h-48"
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

        <div className="relative">
          {loading ? (
            <div className="flex items-center justify-center h-[40vh]">
              <LargeSpinner />
            </div>
          ) : discussions.length ? (
            // <div className=" grid vp-600:grid-cols-1  vp-980:grid-cols-2 vp-1024:grid-cols-3 grid-cols-4  justify-between w-full gap-x-8 gap-y-10 ">
            <div className="flex justify-start flex-wrap gap-8">
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
          <CreateDiscussion setOpenModal={setCreateDiscussion} />
        )}
      </div>
    </Layout>
  );
};

export default index;
