import React from "react";

import Image from "next/image";

import Layout from "@/components/Layout";
import RecentPost from "@/components/RecentPost";
import Mention from "@/components/Mention";
import Upvotes from "@/components/Upvotes";
import Replied from "@/components/Replied";
const Notifications = () => {
  return (
    <Layout title="Inso | Notifications" bgColor="bg-gray-background">
      <div className="py-25 px-40">
        <div className="flex items-center justify-between">
          <h4 className=" text-primary-darkGreen mb-35">Notifications</h4>
          <Image
            src="/icons/more_icon_grey.svg"
            alt=" Discussion dropdown "
            draggable="false"
            layout="fixed"
            width="5"
            height="20"
          />
        </div>
        <div className="bg-white-white h-66 w-full grid grid-cols-3 rounded-xs shadow-xs px-24 items-center mb-28">
          <div className="col-span-2 flex items-center ">
            <div className="mr-20 flex items-center justify-center ">
              <Image
                src="/illustrations/action.svg"
                alt=" Discussion dropdown "
                draggable="false"
                layout="fixed"
                width="30"
                height="30"
              />
            </div>
            <h6>
              Get in on the action as{" "}
              <span className=" text-primary-blue">“Price action”</span> is
              about come to an end.
            </h6>
          </div>
          <div className=" border-l-2 border-green-lightGreen flex items-center justify-center">
            <div className=" w-203 bg-other-lightRed h-34 rounded px-14 flex items-center justify-center">
              <Image
                src="/icons/clock.svg"
                alt=" Discussion dropdown "
                draggable="false"
                layout="fixed"
                width="16"
                height="16"
              />
              <p className="ml-14">
                <span className=" text-other-danger font-medium">14</span> days
                to close date
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white-white h-66 w-full grid grid-cols-3 rounded-xs shadow-xs px-24 items-center mb-28">
          <div className="col-span-2 flex items-center ">
            <div className="mr-20 flex items-center justify-center ">
              <Image
                src="/illustrations/perfect_score.svg"
                alt=" Discussion dropdown "
                draggable="false"
                layout="fixed"
                width="30"
                height="30"
              />
            </div>
            <h6>
              Getting a perfect score in{" "}
              <span className=" text-primary-blue">“Price action”</span> is just
              a few steps away.
            </h6>
          </div>
          <div className=" border-l-2 border-green-lightGreen flex items-center justify-center">
            <div className=" w-203 bg-blue-inputBlue h-34 rounded px-14 flex items-center justify-center">
              <p className="ml-14">
                <span className=" text-primary-darkGreen font-medium"> 4 </span>
                {}
                posts to go
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white-white h-66 w-full grid grid-cols-3 rounded-xs shadow-xs px-24 items-center mb-28">
          <div className="col-span-2 flex items-center ">
            <div className="mr-20 flex items-center justify-center ">
              <Image
                src="/illustrations/badge.svg"
                alt=" Discussion dropdown "
                draggable="false"
                layout="fixed"
                width="33"
                height="45"
              />
            </div>
            <h6>
              You are doing great. Just a few more posts to earn your next
              badge.
            </h6>
          </div>
          <div className=" border-l-2 border-green-lightGreen flex items-center justify-center">
            <div className=" w-203 bg-blue-inputBlue h-34 rounded px-14 flex items-center justify-center">
              <p className="ml-14">
                <span className=" text-primary-darkGreen font-medium"> 4 </span>
                {}
                posts to go
              </p>
            </div>
          </div>
        </div>
        <RecentPost />
        <Replied />

        <Mention />
        <Replied />

        <Upvotes />
      </div>
    </Layout>
  );
};

export default Notifications;
