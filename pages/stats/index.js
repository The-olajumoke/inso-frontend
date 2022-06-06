import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/progressbar.module.css";
const zIndex = () => {
  return (
    <Layout title="Inso | Stats" bgColor="bg-gray-background">
      <div className="py-25 px-40">
        {" "}
        <div className=" rounded-sm  px-32 h-81  bg-white-white w-full flex items-center justify-start  gap-40 shadow-xs mb-61">
          <div className="flex flex-col  items-start">
            <p className="  text-black-analText">Discussions created</p>
            <h3 className=" text-primary-darkGreen">4</h3>
          </div>
          <div className="flex flex-col  items-start">
            <p className="  text-black-analText">Posts made</p>
            <h3 className=" text-primary-darkGreen">114</h3>
          </div>
          <div className="flex flex-col  items-start">
            <p className="  text-black-analText">Posts read</p>
            <h3 className=" text-primary-darkGreen">132</h3>
          </div>
          <div className="flex flex-col  items-start">
            <p className="  text-black-analText">Comments received</p>
            <h3 className=" text-primary-darkGreen">100</h3>
          </div>
          <div className="flex flex-col  items-start">
            <p className="  text-black-analText">Upvotes received</p>
            <h3 className=" text-primary-darkGreen">38</h3>
          </div>
          <div className="flex flex-col  items-start">
            <p className="  text-black-analText">Reactions made</p>
            <h3 className=" text-primary-darkGreen">14</h3>
          </div>
        </div>
        <div className=" grid grid-cols-7 gap-14 mb-41">
          <div className=" col-span-4">
            <h4 className=" text-primary-darkGreen mb-15">Achievements</h4>
            <div className=" px-30 py-13 h-auto rounded-xl bg-white-white shadow-lg">
              <div className="flex justify-between mb-14">
                <p className=" text-primary-darkGreen">
                  Badges <span className=" text-other-disabledText">(2)</span>{" "}
                </p>
                <Link passHref href="/stats/badges">
                  <h6 className="  cursor-pointer text-primary-blue">
                    View all{" "}
                  </h6>
                </Link>
              </div>
              <div className="mb-36 flex items-center gap-10">
                <Image
                  src="/illustrations/badge.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_love.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
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
                      <div className=" bg-green-lightGreen w-200 h-30 rounded px-14  text-sm flex items-center mr-10">
                        Make exactly 10 posts
                      </div>
                      <div className="w-100  bg-blue-progressBlue h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                        <progress
                          className={`${styles.progressBarBadge} w-full`}
                          value={65}
                          max={100}
                        />
                        <h6> In progress</h6>
                      </div>
                    </div>
                    <div className=" flex items-center mb-7">
                      <div className=" bg-green-lightGreen w-200 h-30 rounded px-14  text-sm flex items-center mr-10">
                        Give 30 upvotes
                      </div>
                      <div className="w-100  bg-blue-progressBlue h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                        <progress
                          className={`${styles.progressBarBadge} w-full`}
                          value={20}
                          max={100}
                        />
                        <h6> In progress</h6>
                      </div>
                    </div>
                    <div className=" flex items-center mb-7">
                      <div className=" bg-green-lightGreen w-200 h-30 rounded px-14  text-sm flex items-center mr-10">
                        Obtain a max score
                      </div>
                      <div className="w-100 bg-other-disabled h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                        <h6> Undone</h6>
                      </div>
                    </div>
                  </div>
                  <div className="border-l border-blue-inputBlue pl-25 flex flex-col items-end">
                    <div className=" flex items-center mb-7">
                      <div className=" bg-green-lightGreen w-200 h-30 rounded px-14  text-sm flex items-center mr-10">
                        Reply in a thread
                      </div>
                      <div className="w-100  bg-other-disabled h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                        <h6> Undone</h6>
                      </div>
                    </div>
                    <div className=" flex items-center mb-7">
                      <div className=" bg-green-lightGreen w-200 h-30 rounded px-14  text-sm flex items-center mr-10">
                        Reply in a thread
                      </div>
                      <div className="w-100  bg-other-disabled h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                        <h6> Undone</h6>
                      </div>
                    </div>
                    <div className=" flex items-center mb-7">
                      <div className=" bg-green-lightGreen w-200 h-30 rounded px-14  text-sm flex items-center mr-10">
                        Reply in a thread
                      </div>
                      <div className="w-100  bg-other-disabled h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                        <h6> Undone</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-3 flex flex-col  border">
            {" "}
            <h4 className=" text-primary-darkGreen mb-15">Active days</h4>
            <div className=" h-272 rounded-xl bg-white-white shadow-lg flex-grow py-14 px-22">
              <div className="border h-34  bg-border-green ">
                <h6 className=" text-black-analText">
                  Discussion set / Discussions
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-7 gap-14">
          <div className=" col-span-5">
            <h4 className=" text-primary-darkGreen mb-15">Stats</h4>
            <div className="  h-272 rounded-xl bg-white-white shadow-lg"></div>
          </div>
          <div className=" col-span-2">
            {" "}
            <h4 className="  text-white-white mb-15">Active days</h4>
            <div className=" h-272 rounded-xl bg-white-white shadow-lg"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default zIndex;
