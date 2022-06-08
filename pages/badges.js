import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import styles from "@/styles/progressbar.module.css";

const badges = () => {
  return (
    <Layout title="Inso | Badges" bgColor="bg-gray-background">
      <div className="py-25 px-40">
        <div className="flex item-center mb-22">
          <div className="flex items-center justify-center">
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
          <h4 className="ml-22 text-primary-darkGreen">Badges</h4>
        </div>
        <div className="">
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
        </div>
      </div>
    </Layout>
  );
};

export default badges;
