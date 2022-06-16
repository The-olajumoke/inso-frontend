import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import styles from "@/styles/progressbar.module.css";
import Link from "next/link";

const Badges = () => {
  return (
    <Layout title="Inso | Badges" bgColor="bg-white-white">
      <div className="py-25 px-40">
        <div className="flex item-center mb-22">
          <Link passHref href="/stats">
            <div className="flex items-center justify-center ">
              {" "}
              <Image
                src="/icons/arrow_back_green.svg"
                alt="back"
                draggable="false"
                layout="fixed"
                width="20"
                height="20"
              />
            </div>
          </Link>
          <h4 className="ml-22 text-primary-darkGreen">Badges</h4>
        </div>

        <div className=" mb-60">
          <p className=" text-black-analText mb-14">Post badges</p>
          <div className="mb-36 flex items-center gap-10">
            <Image
              src="/illustrations/badge.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_love.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
          </div>
          <div className=" grid grid-cols-3">
            <div className=" flex flex-col  gap-3">
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l  border-blue-inputBlue flex flex-col  items-center gap-3">
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l  border-blue-inputBlue flex flex-col items-end  gap-3">
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-60">
          <p className=" text-black-analText mb-14">Upvotes</p>
          <div className="mb-36 flex items-center gap-10">
            <Image
              src="/illustrations/badge_love.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
          </div>
          <div className=" grid grid-cols-3">
            <div className=" flex flex-col  gap-3">
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l  border-blue-inputBlue flex flex-col  items-center gap-3">
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l  border-blue-inputBlue flex flex-col items-end  gap-3">
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <p className=" text-black-analText mb-14">Likes</p>
          <div className="mb-36 flex items-center gap-10">
            <Image
              src="/illustrations/badge_love.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
            <Image
              src="/illustrations/badge_empty.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="60"
              height="79"
            />
          </div>
          <div className=" grid grid-cols-3">
            <div className=" flex flex-col  gap-3">
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l  border-blue-inputBlue flex flex-col  items-center gap-3">
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l  border-blue-inputBlue flex flex-col items-end  gap-3">
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center mb-7">
                <div className=" bg-green-lightGreen w-180 h-30 rounded px-14   text-xs flex items-center mr-10">
                  Make exactly 10 posts
                </div>
                <div className="w-100  bg-blue-progressBlue h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                  <progress
                    className={`${styles.progressBarBadge} w-full`}
                    value={65}
                    max={100}
                  />
                  <div className=" flex items-start">
                    <p> In progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Badges;
