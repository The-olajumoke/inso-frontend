import React, { useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import styles from "@/styles/progressbar.module.css";
import LineChart from "chart/LineChart";

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
              <p className=" text-black-analText">Sets</p>
              <h3 className=" text-primary-darkGreen">14</h3>
            </div>
            <div className="flex flex-col  items-start">
              <p className=" text-black-analText">Discussions</p>
              <h3 className=" text-primary-darkGreen">38</h3>
            </div>
            <div className="flex flex-col  items-start">
              <p className=" text-black-analText">Users</p>
              <h3 className=" text-primary-darkGreen">100</h3>
            </div>
            <div className="flex flex-col  items-start">
              <p className=" text-black-analText">Posts</p>
              <h3 className=" text-primary-darkGreen">1250</h3>
            </div>
          </div>
          <div className=" col-span-3 px-32 h-full bg-white-white rounded-sm  shadow-xs flex   flex-col items-center  justify-center">
            <div className=" flex items-center justify-between w-full">
              <p className=" w-135  text-gray-text mr-48">
                {" "}
                Compare discussion :
              </p>
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
                  src="/icons/arrow_down_green.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="10"
                  height="5"
                />
              </div>
            </div>
            <div className=" flex items-center justify-between w-full">
              <p className="w-135 text-gray-text mr-48"> Timeframe :</p>
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
            <div className="h-445  mb-18 bg-white-white rounded-xl py-16 px-27  flex flex-col">
              <div className="flex items-center mb-40">
                <h6 className=" text-primary-darkGreen mr-18">Active Users </h6>
                <Image
                  src="/icons/arrow_down_green.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="10"
                  height="5"
                />
              </div>
              <div className="flex-grow">
                <LineChart
                  lineData1={[18, 14, 25, 18, 16, 22, 15, 28, 5, 5, 46]}
                  lineData2={[25, 16, 23, 20, 19, 20, 12, 32, 25, 15, 46]}
                  labels={["", "", "", "", "", "", "", ""]}
                />
              </div>
              <div className="w-full  h-45 pl-8">
                <div className="flex items-center gap-4">
                  <p className=" text-primary-blue">Apr 1</p>
                  <div className="flex-grow border border-blue-inputBlue"></div>
                  <p className=" text-primary-blue">Apr 28</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className=" text-primary-darkGreen">May 1</p>
                  <div className="flex-grow border border-blue-inputBlue"></div>
                  <p className=" text-primary-darkGreen">May 28</p>
                </div>
              </div>
            </div>
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
                  <div className="h-34 text-gray-analyticsGray text-sm flex justify-center items-center">
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
                          <progress
                            className={`${styles.progressBarBlue} w-full`}
                            value={data.value}
                            max={100}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex  flex-col">
                  {" "}
                  <div className="h-34 text-gray-analyticsGray text-sm flex justify-center items-center">
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

                          <progress
                            className={`${styles.progressBarGreen} w-full`}
                            value={data.value}
                            max={100}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-5  bg-white-white rounded-xl">
            <div className=" col-span-3 flex flex-col">
              <p className=" text-primary-darkGreen h-49 px-29 flex items-center justify-start">
                Engagement Metrics
              </p>
              <div className="  flex-grow w-full border-t-2  border-r-2 border-blue-inputBlue px-29 py-11 ">
                <p className=" text-black-analText mb-20 ">Participants:</p>
                <p className=" text-black-analText mb-20">Total Posts:</p>
                <p className=" text-black-analText mb-20">
                  Total session Time:
                </p>
                <p className=" text-black-analText mb-20">
                  Average session Time:
                </p>
                <p className=" text-black-analText mb-20">Total word count:</p>
                <p className=" text-black-analText mb-20">
                  Average word count:
                </p>
                <p className=" text-black-analText mb-20">Longest thread:</p>
                <p className=" text-black-analText mb-20">Average thread:</p>
                <p className=" text-black-analText mb-20">Total Upvotes:</p>
                <p className=" text-black-analText mb-20">
                  Percent of posts upvoted:
                </p>
                <p className=" text-black-analText mb-20">
                  Percent of perfect scores:
                </p>
                <p className=" text-black-analText mb-20">
                  Post inspirations used:
                </p>
                <p className=" text-black-analText mb-20">Total emojis:</p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2  h-49">
                <p className="  text-gray-analyticsGray   flex items-center justify-center">
                  A
                </p>
                <p className="  text-gray-analyticsGray  flex items-center justify-center">
                  B
                </p>
              </div>
              <div className=" w-full border-t-2  border-blue-inputBlue py-11  ">
                {/* Participant */}
                <div className=" flex w-full mb-20">
                  <p className="flex flex-grow justify-center items-center text-black-analText ">
                    12
                  </p>

                  <p className="flex flex-grow justify-center items-center  text-primary-blue ">
                    12
                  </p>
                </div>
                {/* Total Post*/}

                <div className=" flex w-full mb-20">
                  <p className="flex flex-grow justify-center items-center text-black-analText ">
                    12
                  </p>

                  <p className="flex flex-grow justify-center items-center  text-primary-blue ">
                    12
                  </p>
                </div>
                {/* Total session Time */}
                <div className=" flex w-full mb-20">
                  <p className="flex flex-grow justify-center items-center text-black-analText ">
                    12
                  </p>

                  <p className="flex flex-grow justify-center items-center  text-primary-blue ">
                    12
                  </p>
                </div>
                {/* Avg session time */}
                <div className=" flex w-full mb-20">
                  <p className="flex flex-grow justify-center items-center text-black-analText ">
                    12
                  </p>

                  <p className="flex flex-grow justify-center items-center  text-primary-blue ">
                    12
                  </p>
                </div>
                {/* Total word count */}
                <div className=" flex w-full mb-20">
                  <p className="flex flex-grow justify-center items-center text-black-analText ">
                    12
                  </p>

                  <p className="flex flex-grow justify-center items-center  text-primary-blue ">
                    12
                  </p>
                </div>
                {/* Averagge word count */}
                <div className=" flex w-full mb-20">
                  <p className="flex flex-grow justify-center items-center text-black-analText ">
                    12
                  </p>

                  <p className="flex flex-grow justify-center items-center  text-primary-blue ">
                    12
                  </p>
                </div>
                {/* Longest thread */}
                <div className=" flex w-full mb-20">
                  <p className="flex flex-grow justify-center items-center text-black-analText ">
                    12
                  </p>

                  <p className="flex flex-grow justify-center items-center  text-primary-blue ">
                    12
                  </p>
                </div>
                {/* Avg thread */}
                <div className=" flex w-full mb-20">
                  <p className="flex flex-grow justify-center items-center text-black-analText ">
                    12
                  </p>

                  <p className="flex flex-grow justify-center items-center  text-primary-blue ">
                    12
                  </p>
                </div>
                {/* total upvotes */}
                <div className=" flex w-full mb-20">
                  <p className="flex flex-grow justify-center items-center text-black-analText ">
                    12
                  </p>

                  <p className="flex flex-grow justify-center items-center  text-primary-blue ">
                    12
                  </p>
                </div>
                {/* % of posts upvoted */}
                <div className=" flex w-full mb-20">
                  <p className="flex flex-grow justify-center items-center text-black-analText ">
                    12
                  </p>

                  <p className="flex flex-grow justify-center items-center  text-primary-blue ">
                    12
                  </p>
                </div>
                {/* % of perfect scores */}
                <div className=" flex w-full mb-20">
                  <p className="flex flex-grow justify-center items-center text-black-analText ">
                    12
                  </p>

                  <p className="flex flex-grow justify-center items-center  text-primary-blue ">
                    12
                  </p>
                </div>
                {/* %of post insp used */}
                <div className=" flex w-full mb-20">
                  <p className="flex flex-grow justify-center items-center text-black-analText ">
                    12
                  </p>

                  <p className="flex flex-grow justify-center items-center  text-primary-blue ">
                    12
                  </p>
                </div>
                {/* emojis used */}
                <div className=" flex w-full mb-20">
                  <p className="flex flex-grow justify-center items-center text-black-analText ">
                    12
                  </p>

                  <p className="flex flex-grow justify-center items-center  text-primary-blue ">
                    12
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
