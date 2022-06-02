import React, { useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";
const Analytics = () => {
  const [activeInspiration, setActiveInspiration] = useState("posting");

  const comparisonData = [
    {
      name: "Resources A",
      value: 50,
    },
    {
      name: "Polls",
      value: 15,
    },
    {
      name: "Polls",
      value: 30,
    },
    {
      name: "Resource",
      value: 90,
    },
  ];
  return (
    <Layout title="Inso | Analytics" bgColor="bg-gray-background">
      <div className="py-25 px-40 pb-53">
        <div className=" grid grid-cols-5 h-81 justify-between mb-29">
          <div className=" col-span-2 px-32 h-full  bg-white-white rounded-sm  shadow-xs flex items-center justify-between mr-30">
            <div className="flex flex-col  items-start">
              <span className=" text-xs text-gray-text">Sets</span>
              <h3 className=" text-primary-darkGreen">14</h3>
            </div>
            <div className="flex flex-col  items-start">
              <span className=" text-xs text-gray-text">Discussions</span>
              <h3 className=" text-primary-darkGreen">38</h3>
            </div>
            <div className="flex flex-col  items-start">
              <span className=" text-xs text-gray-text">Users</span>
              <h3 className=" text-primary-darkGreen">100</h3>
            </div>
            <div className="flex flex-col  items-start">
              <span className=" text-xs text-gray-text">Posts</span>
              <h3 className=" text-primary-darkGreen">1250</h3>
            </div>
          </div>
          <div className=" col-span-3 px-32 h-full bg-white-white rounded-sm  shadow-xs flex   flex-col items-center  justify-center">
            <div className=" flex items-center justify-between w-full">
              <span className=" w-130 text-xs text-gray-text mr-48">
                {" "}
                Compare discussion :
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
            <div className=" flex items-center justify-between w-full">
              <span className="w-130 text-xs text-gray-text mr-48">
                {" "}
                Timeframe :
              </span>
              <div className="w-230 h-34 px-20 flex items-center justify-between mr-12">
                <p className="  text-gray-analyticsGray ">
                  Jan 1 - Jan 12, 2022
                </p>
              </div>
              <div className="w-230 h-34 px-20 flex items-center justify-between">
                <p className="  text-gray-analyticsGray ">
                  May 1 - May 28, 2021{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid  grid-cols-5">
          <div className="col-span-3  mr-18 flex flex-col">
            <div className="h-445  mb-18 bg-white-white rounded-xl"></div>
            <div>
              <div className="h-45 mb-4  flex  items-center justify-center bg-white-white rounded-t-xl">
                <button
                  className={`${
                    activeInspiration === "posting"
                      ? "btn"
                      : "btn-analNonActive"
                  }   h-30 w-120 text-xs mr-20`}
                  onClick={() => setActiveInspiration("posting")}
                >
                  Posting
                </button>
                <button
                  className={`${
                    activeInspiration === "responding"
                      ? "btn"
                      : "btn-analNonActive"
                  }   h-30 w-120 text-xs mr-20`}
                  onClick={() => setActiveInspiration("responding")}
                >
                  Responding
                </button>
                <button
                  className={`${
                    activeInspiration === "synthesizing"
                      ? "btn"
                      : "btn-analNonActive"
                  }   h-30 w-120 text-xs`}
                  onClick={() => setActiveInspiration("synthesizing")}
                >
                  Synthesizing
                </button>
              </div>
              <div className=" h-250  bg-white-white rounded-b-xl grid grid-cols-2">
                <div className="flex  flex-col">
                  {" "}
                  <div className="h-34 text-gray-analyticsGray text-xs flex justify-center items-center">
                    A (20)
                  </div>
                  <div className="border-t-2  border-r-2 border-blue-inputBlue  flex-grow pt-16 flex justify-center">
                    <div className="w-210">
                      {comparisonData.map((data, index) => (
                        <div key={index} className="  mb-8">
                          <div className="flex justify-between items-center mb-5 ">
                            <p className="w-177">{data.name}</p>
                            <span className=" text-black-analText text-xs">
                              {data.value}%
                            </span>
                          </div>
                          <ProgressBar value={data.value} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex  flex-col">
                  {" "}
                  <div className="h-34 text-gray-analyticsGray text-xs flex justify-center items-center">
                    B (35)
                  </div>
                  <div className="border-t-2  border-blue-inputBlue  flex-grow pt-16 flex justify-center">
                    <div className="w-210">
                      {comparisonData.map((data, index) => (
                        <div key={index} className="  mb-8">
                          <div className="flex justify-between items-center mb-5 ">
                            <p className="w-177">{data.name}</p>
                            <span className=" text-black-analText text-xs">
                              {data.value}%
                            </span>
                          </div>
                          <ProgressBar value={data.value} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2  bg-white-white rounded-xl"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
