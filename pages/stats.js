import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/progressbar.module.css";
import Barchart from "chart/Barchart";
import StatsTableRow from "@/components/StatsTableRow";
import badge from "../public/static/illustrations/badge.svg";
import arrow_down_green from "../public/static/icons/arrow_down_green.svg";
import clock from "../public/static/icons/clock.svg";
import upvote_grey from "../public/static/icons/upvote_grey.svg";
import disc_grey from "../public/static/icons/disc_grey.svg";
import emoji_grey from "../public/static/icons/emoji_grey.svg";
import avatar from "../public/static/images/avatar.svg";
const Index = () => {
  const statsData = [
    {
      post: "Currently, Government agencies are ...",
      time: "3 mins ago",
      views: 14,
      upvotes: 50,
      reply: 12,
      emojis: 19,
    },
    {
      set: "Fundamentals of Nuclear power",
      time: "10 mins ago",
      views: 14,
      upvotes: 1,
      reply: 12,
      emojis: 60,
    },
    {
      post: "I’m more concerned about the opini ...",
      time: "5 mins ago",
      views: 130,
      upvotes: 18,
      reply: 12,
      emojis: 10,
    },
    {
      set: "Price Action in Foreign Exchange",
      time: "10 mins ago",
      views: 11,
      upvotes: 23,
      reply: 19,
      emojis: 60,
    },
  ];
  return (
    <Layout title="Inso | Stats" bgColor="bg-gray-background">
      <div
        className={`${styles.hiddenScrollbar} h-full py-25 px-40 vp-980:px-0 `}
      >
        {" "}
        <div className="items-center  h-50 mb-12 hidden vp-980:flex vp-600:px-23 px-46 ">
          <div className="flex justify-center items-center mr-23">
            <Image
              src="/static/icons/arrow_left_green.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="18"
              height="18"
            />
          </div>
          <h4 className=" text-black-analText">Stats</h4>
        </div>
        <div className=" rounded-sm  px-32 vp-600:px-23 vp-980:px-46 h-81 vp-980:h-auto bg-white-white w-full flex vp-980:py-13 items-center justify-start  gap-40 vp-980:gap-3 vp-min-601:gap-6 vp-980:grid vp-980:grid-cols-3 vp-600:grid-cols-2 vp-980:rounded-none vp-min-601:justify-between shadow-xs mb-61">
          <div className="flex flex-col items-center">
            <p className="  text-black-analText text-xs">Discussions joined</p>
            <h3 className=" text-primary-darkGreen">132</h3>
          </div>
          <div className="flex flex-col items-center">
            <p className="  text-black-analText text-xs">Posts made</p>
            <h3 className=" text-primary-darkGreen">114</h3>
          </div>

          <div className="flex flex-col items-center">
            <p className="  text-black-analText text-xs">Comments received</p>
            <h3 className=" text-primary-darkGreen">100</h3>
          </div>
          <div className="flex flex-col items-center">
            <p className="  text-black-analText text-xs">Upvotes received</p>
            <h3 className=" text-primary-darkGreen">38</h3>
          </div>
          <div className="flex flex-col items-center">
            <p className="  text-black-analText text-xs">Discussions created</p>
            <h3 className=" text-primary-darkGreen">4</h3>
          </div>
        </div>
        <div className=" grid grid-cols-7  vp-1024:flex flex-col gap-14 mb-41 ">
          <div className=" col-span-4">
            {" "}
            <h4 className=" vp-600:px-23 vp-980:px-46 text-primary-darkGreen mb-15">
              Achievements
            </h4>
            <div className="vp-600:overflow-scroll">
              <div className="px-15   vp-600:px-23 vp-980:px-46  py-13 h-auto rounded-xl vp-980:rounded-none bg-white-white shadow-lg  vp-600:w-680">
                <div className="flex justify-between mb-14 ">
                  <p className=" text-primary-darkGreen">
                    Badges <span className="text-other-disabledText">(2)</span>{" "}
                  </p>
                  <Link passHref href="/badges">
                    <h6 className="  cursor-pointer text-primary-blue">
                      View all{" "}
                    </h6>
                  </Link>
                </div>
                <div className="mb-36 flex items-center gap-10 ">
                  <Image
                    src={ badge.src}
                    alt=" Discussion dropdown "
                    draggable="false"
                    layout="intrinsic"
                    width="33"
                    height="45"
                  />
                  <Image
                    src={ badge.src}
                    alt=" Discussion dropdown "
                    draggable="false"
                    layout="intrinsic"
                    width="33"
                    height="45"
                  />
                  <Image
                    src={ badge.src}
                    alt=" Discussion dropdown "
                    draggable="false"
                    layout="intrinsic"
                    width="33"
                    height="45"
                  />
                  <Image
                    src={ badge.src}
                    alt=" Discussion dropdown "
                    draggable="false"
                    layout="intrinsic"
                    width="33"
                    height="45"
                  />
                  <Image
                    src={ badge.src}
                    alt=" Discussion dropdown "
                    draggable="false"
                    layout="intrinsic"
                    width="33"
                    height="45"
                  />
                  <Image
                    src={ badge.src}
                    alt=" Discussion dropdown "
                    draggable="false"
                    layout="intrinsic"
                    width="33"
                    height="45"
                  />
                  <Image
                    src={ badge.src}
                    alt=" Discussion dropdown "
                    draggable="false"
                    layout="intrinsic"
                    width="33"
                    height="45"
                  />
                  <Image
                    src={ badge.src}
                    alt=" Discussion dropdown "
                    draggable="false"
                    layout="intrinsic"
                    width="33"
                    height="45"
                  />
                  <Image
                    src={ badge.src}
                    alt=" Discussion dropdown "
                    draggable="false"
                    layout="intrinsic"
                    width="33"
                    height="45"
                  />
                  <Image
                    src={ badge.src}
                    alt=" Discussion dropdown "
                    draggable="false"
                    layout="intrinsic"
                    width="33"
                    height="45"
                  />
                  <Image
                    src={ badge.src}
                    alt=" Discussion dropdown "
                    draggable="false"
                    layout="intrinsic"
                    width="33"
                    height="45"
                  />
                </div>
                <div className="">
                  <p className=" text-primary-darkGreen mb-15">
                    Progress tracker
                  </p>
                  <div className="grid grid-cols-2">
                    <div className="pr-25">
                      <div className=" flex items-center mb-7">
                        <div className=" bg-green-lightGreen w-150 h-30 rounded px-14 flex-grow  text-xs flex items-center mr-10">
                          Make 10 posts
                        </div>
                        <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                          <progress
                            className={`${styles.progressBarBadge} w-full`}
                            value={65}
                            max={100}
                          />
                          <div className="flex-grow flex items-start">
                            <p> In progress</p>
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center mb-7">
                        <div className=" bg-green-lightGreen w-150 h-30  rounded px-14  flex-grow  text-xs flex items-center mr-10">
                          Give 30 upvotes
                        </div>
                        <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                          <progress
                            className={`${styles.progressBarBadge} w-full`}
                            value={20}
                            max={100}
                          />
                          <div className="flex-grow flex items-start">
                            <p> In progress</p>
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center mb-7">
                        <div className=" bg-green-lightGreen w-150 h-30 rounded px-14 flex-grow  text-xs flex items-center mr-10">
                          Obtain a max score
                        </div>
                        <div className="w-100 bg-other-disabled h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                          <p className=""> Undone</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l border-blue-inputBlue pl-25 flex flex-col items-end">
                      <div className=" flex items-center mb-7">
                        <div className=" bg-green-lightGreen w-150 h-30 rounded px-14 flex-grow  text-xs flex items-center mr-10">
                          Reply in a thread
                        </div>
                        <div className="w-100  bg-other-disabled h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                          <p> Undone</p>
                        </div>
                      </div>
                      <div className=" flex items-center mb-7">
                        <div className=" bg-green-lightGreen w-150 h-30 rounded px-14 flex-grow   text-xs flex items-center mr-10">
                          Reply in a thread
                        </div>
                        <div className="w-100  bg-other-disabled h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                          <p> Undone</p>
                        </div>
                      </div>
                      <div className=" flex items-center mb-7">
                        <div className=" bg-green-lightGreen w-150 h-30 rounded px-14  flex-grow text-xs flex items-center mr-10">
                          Reply in a thread
                        </div>
                        <div className="w-100  bg-other-disabled h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                          <p> Undone</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-3 flex flex-col">
            {" "}
            <h4 className=" vp-600:px-23 vp-980:px-46 text-primary-darkGreen mb-15">
              Active days
            </h4>
            <div className="vp-600:overflow-scroll  flex-grow flex">
              <div className="py-14 px-22 vp-600:px-23 vp-980:px-46  h-full vp-980:h-auto rounded-xl bg-white-white shadow-lg flex-grow flex justify-between flex-col vp-600:w-528">
                <div className="mb-40 flex items-center gap-4">
                  <div className=" flex-grow vp-1024:flex-grow-0 h-34 px-21   bg-border-green  rounded-xl  flex items-center ">
                    <span className=" text-xs text-black-analText mr-14">
                      Discussions
                    </span>
                    <Image
                      src={ arrow_down_green.src}
                      alt=" Discussion dropdown "
                      draggable="false"
                      layout="fixed"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div className=" h-34  bg-other-lightRed  rounded-xl px-15 vp-min-601:px-10  flex items-center ">
                    <Image
                      src={ clock.src}
                      alt=" Discussion dropdown "
                      draggable="false"
                      layout="fixed"
                      width="14"
                      height="14"
                    />
                    <span className=" text-black-analText text-xs  ml-15 vp-min-601:ml-2">
                      <span className=" text-other-danger">14</span> days to
                      close date
                    </span>
                  </div>
                </div>
                <Barchart
                  title="Product Sales"
                  thick={9}
                  labels={[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "May",
                    "Jun",
                    "Jul",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ]}
                  barData={[
                    12, 19, 3, 5, 2, 12, 19, 3, 12, 19, 3, 10, 19, 3, 19, 3, 12,
                    19, 3, 19, 3, 12, 19, 3,
                  ]}
                />
                <div className="flex justify-between w-full items-center">
                  <p className="text-black-analText">Mar 1 </p>
                  <p className="text-black-analText">Mar 28 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto grid grid-cols-7 vp-1024:flex flex-col gap-12">
          <div className=" col-span-5 h-full">
            <h4 className="  vp-600:px-23 vp-980:px-46 text-primary-darkGreen mb-15">
              Stats
            </h4>
            <div className="vp-600:overflow-scroll">
              <div className=" rounded-xl bg-white-white shadow-lg py-12 px-21  vp-600:px-23 vp-980:px-46 vp-600:w-680">
                <div className="border-b h-40 grid grid-cols-9 vp-600:grid-cols-11 gap-4 border-blue-inputBlue pb-6">
                  {" "}
                  <div className="col-span-4 vp-600:col-span-5 flex items-center">
                    <p className=" text-primary-darkGreen ">My Posts</p>
                  </div>
                  <div className="col-span-2 flex justify-center items-center">
                    <div className="h-34 w-95 rounded bg-border-green text-xs flex justify-center items-center">
                      Sort by...
                      <Image
                        src={ arrow_down_green.src}
                        alt=" Discussion dropdown "
                        draggable="false"
                        layout="fixed"
                        width="10"
                        height="5"
                        className="ml-5"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src={ upvote_grey.src}
                      alt="upvotes"
                      draggable="false"
                      layout="fixed"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src={ disc_grey.src}
                      alt="discussions"
                      draggable="false"
                      layout="fixed"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src={ emoji_grey.src}
                      alt="emojis"
                      draggable="false"
                      layout="fixed"
                      width="24"
                      height="24"
                    />
                  </div>
                </div>
                {statsData.map((stat, index) => (
                  <StatsTableRow key={index} stat={stat} />
                ))}
              </div>
            </div>
          </div>
          <div className=" col-span-2 h-full flex flex-col">
            {" "}
            <h4 className="  vp-600:px-23 vp-980:px-46 text-gray-background mb-15">
              Active days
            </h4>
            <div className=" flex-grow rounded-xl bg-white-white shadow-lg p-21  vp-600:px-23 vp-980:px-46">
              <p className=" text-primary-darkGreen pb-13 border-b  border-blue-inputBlue mb-21">
                People you are connected to
              </p>
              <div className=" mb-15 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src={ avatar.src}
                      alt="user"
                      draggable="false"
                      layout="fixed"
                      width="20"
                      height="20"
                    />
                  </div>
                  <p className=" text-black-analText font-medium ml-12">
                    Emily Sanders
                  </p>
                  <span
                    style={{ fontSize: "10px" }}
                    className=" text-primary-darkGreen ml-4"
                  >
                    @sanders
                  </span>
                </div>
                <p className=" text-black-analText">14</p>{" "}
              </div>
              <div className=" mb-15 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src={ avatar.src}
                      alt="user"
                      draggable="false"
                      layout="fixed"
                      width="20"
                      height="20"
                    />
                  </div>
                  <p className=" text-black-analText font-medium ml-12">
                    Camel Butch
                  </p>
                  <span
                    style={{ fontSize: "10px" }}
                    className=" text-primary-darkGreen ml-4"
                  >
                    @butchy
                  </span>
                </div>
                <p className=" text-black-analText">14</p>{" "}
              </div>
              <div className=" mb-15 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src={ avatar.src}
                      alt="user"
                      draggable="false"
                      layout="fixed"
                      width="20"
                      height="20"
                    />
                  </div>
                  <p className=" text-black-analText font-medium ml-12">
                    Ruby James
                  </p>
                  <span
                    style={{ fontSize: "10px" }}
                    className=" text-primary-darkGreen ml-4"
                  >
                    @R.james
                  </span>
                </div>
                <p className=" text-black-analText">1</p>{" "}
              </div>
              <div className=" mb-15 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src={ avatar.src}
                      alt="user"
                      draggable="false"
                      layout="fixed"
                      width="20"
                      height="20"
                    />
                  </div>
                  <p className=" text-black-analText font-medium ml-12">
                    Camel Butch
                  </p>
                  <span
                    style={{ fontSize: "10px" }}
                    className=" text-primary-darkGreen ml-4"
                  >
                    @butchy
                  </span>
                </div>
                <p className=" text-black-analText">14</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
