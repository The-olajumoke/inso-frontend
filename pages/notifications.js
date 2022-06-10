import React from "react";

import Image from "next/image";

import Layout from "@/components/Layout";
import RecentPost from "@/components/RecentPost";
import Mention from "@/components/Mention";
import Upvotes from "@/components/Upvotes";
import Replied from "@/components/Replied";
import ActionNotiTemp from "@/components/ActionNotiTemp";
import PerfectScoreNotiTemp from "@/components/PerfectScoreNotiTemp";
import BadgeNotiTemp from "@/components/BadgeNotiTemp";
const Notifications = () => {
  return (
    <Layout title="Inso | Notifications" bgColor="bg-gray-background">
      <div className="py-25 px-40 vp-600:p-23 vp-980:p-46">
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

        {/* <ActionNotiTemp /> */}
        {/* <PerfectScoreNotiTemp /> */}
        {/* <BadgeNotiTemp /> */}

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
