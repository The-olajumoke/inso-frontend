import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styles from "@/styles/discussion.module.css";
import Image from "next/image";
import Link from "next/link";
import CommentBox from "@/components/CommentBox";
import ResourceCommentBox from "@/components/ResourceCommentBox";
import PopularTagsComment from "@/components/PopularTagsComment";
import ThreadCommentBox from "@/components/ThreadCommentBox";
import { tags } from "@/utils/sampleData";

const ViewDiscussion = () => {
  const router = useRouter();
  const id = router.query.id;
  const [activeCommentBox, setActiveCommentBox] = useState("noInspiration");
  const [viewAllTags, setViewAllTags] = useState(false);

  return (
    <Layout
      title={`Inso | Discussion`}
      searchBar={false}
      bgColor="bg-white-white"
    >
      <div className={` h-full flex flex-col relative w-full`}>
        <div
          className={`h-70 bg-gray-background $${
            viewAllTags ? "mb-0" : "mb-10"
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
          <div className="flex  items-center gap-6">
            <div className="flex items-center justify-center cursor-pointer">
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1655331782/InsoImages/more_icon_desucz.svg"
                alt="more"
                layout="fixed"
                width="20"
                height="20"
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
        <div className=" flex h-full ">
          <div className="h-full flex flex-col w-full justify-between ">
            <div>
              <div className="px-50 py-10 bg-gray-background ">
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
                      <h5 className=" font-medium">
                        Dante Bowe
                        <span className=" text-primary-darkGreen text-xs font-normal ml-3">
                          @DANTE
                        </span>
                      </h5>
                      <span className="text-xs text-gray-text">
                        posted 6 mins ago
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <Image
                      src="https://res.cloudinary.com/insomaryland/image/upload/v1655331924/InsoImages/more_icon_grey_gpknda.svg"
                      alt="back"
                      layout="fixed"
                      width="7"
                      height="26"
                      className=" cursor-pointer"
                    />
                  </div>
                </div>
                <h6 className="mt-10 text-gray-text break-words">
                  What’s your opinion on the Fukushima Nuclear power plant
                  incident in 2011 and how does it relate with current
                  occurences now in 2021?
                </h6>
              </div>
              <div
                className={` ${
                  viewAllTags ? "hidden" : "flex"
                } px-50 mt-7 justify-between`}
              >
                <div className="flex items-center">
                  {tags.map((tag, index) => (
                    <div
                      className="h-32 bg-blue-inputBlue flex mr-10 gap-8 items-center px-15 rounded-xs"
                      key={index}
                    >
                      <h6 className=" text-gray-text">#{tag.tagName}</h6>
                      <h6 className=" text-primary-blue">{tag.used}</h6>
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
            </div>

            <div className="flex-grow flex flex-col justify-between">
              <div
                style={{ maxHeight: "200px" }}
                className={`overflow-hidden py-10  px-50  flex flex-col`}
              >
                <div className={` h-full`}>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  <h4>Comments & Responces</h4>
                  {/* <h2>hello</h2>
                <h2>hello</h2>
                <h2>hello</h2>
                <h2>hello</h2>
                <h2>hello</h2> */}
                </div>
              </div>
              {/* COMMENT BOX */}
              <div className="px-50   w-full bg-white-white py-10">
                {activeCommentBox === "noInspiration" && (
                  <CommentBox setActiveCommentBox={setActiveCommentBox} />
                )}
                {activeCommentBox === "Resources" && (
                  <ResourceCommentBox
                    setActiveCommentBox={setActiveCommentBox}
                  />
                )}
                {activeCommentBox === "Popular tags" && (
                  <PopularTagsComment
                    setActiveCommentBox={setActiveCommentBox}
                  />
                )}
                {activeCommentBox === "Threads" && (
                  <ThreadCommentBox setActiveCommentBox={setActiveCommentBox} />
                )}
              </div>
            </div>
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
                    <h6 className=" text-gray-text">#{tag.tagName}</h6>
                    <h6 className=" text-primary-blue">{tag.used}</h6>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ViewDiscussion;
