import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
const Analytics = () => {
  return (
    <Layout title="Inso | Analytics" bgColor="bg-gray-background">
      <div className="py-25 px-40">
        <div className=" flex h-81">
          <div className=" px-32 h-full w-500 bg-white-white rounded-sm  shadow-xs flex items-center justify-between mr-30">
            <div className="flex flex-col items-center">
              <span className=" text-xs text-gray-text">Sets</span>
              <h3 className=" text-primary-darkGreen">14</h3>
            </div>
            <div className="flex flex-col items-center">
              <span className=" text-xs text-gray-text">Discussions</span>
              <h3 className=" text-primary-darkGreen">38</h3>
            </div>
            <div className="flex flex-col items-center">
              <span className=" text-xs text-gray-text">Users</span>
              <h3 className=" text-primary-darkGreen">100</h3>
            </div>
            <div className="flex flex-col items-center">
              <span className=" text-xs text-gray-text">Posts</span>
              <h3 className=" text-primary-darkGreen">1250</h3>
            </div>
          </div>
          <div className=" px-32 h-full w-736 bg-white-white rounded-sm  shadow-xs flex items-center justify-between mr-30">
            <div className=" flex items-center justify-between w-full">
              <span className=" text-xs text-gray-text mr-48"> Compare discussion :
              </span>
              <div className="w-230 h-34 rounded bg-border-settingsLine px-20 flex items-center justify-between mr-12">
                <p className=" text-border-line ">Discussion A</p>
                <Image
                  src="/icons/arrow_down_blue.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="10"
                  height="5"
                />
              </div>
              <div className="w-230 h-34 rounded bg-border-settingsLine px-20 flex items-center justify-between">
                <p className=" text-primary-darkGreen ">Discussion B</p>
                <Image
                  src="/icons/arrow_down_blue.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="10"
                  height="5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
