import SunburstChart from "chart/SunBurstChart";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import DirectedRow from "chart/DirectedRow";
import Image from "next/image";
import cancel from "../public/static/icons/cancel.svg";
const ChordChart = dynamic(() => import("../chart/ChordChart"), {
  ssr: false,
});
const ShowCharts = ({ setOpenChartModal, allTags }) => {
  const [activeChart, setActiveChart] = useState("burst");
  return (
    <>
      <div
        className={`fixed h-screen w-screen  top-0 left-0 bg-black-overlay vp-980:bg-white-white animate-fade-in z-50 vp-980:w-full vp-980:top-0 vp-980:right-0 vp-980:left-0  `}
        onClick={() => setOpenChartModal(false)}
      ></div>
      <div
        className={` w-736 vp-980:left-0  vp-980:top-0 vp-980:right-0 vp-980:w-full h-548  top-20 right-6 bg-white-white absolute  z-60  rounded-xl overflow-hidden  shadow-createDiscussion `}
      >
        <div className="h-14 bg-primary-blue"></div>
        <div className="flex justify-end w-full mt-15  px-36">
          <div
            className="flex justify-center items-center"
            onClick={() => setOpenChartModal(false)}
          >
            <Image
              src={cancel.src}
              alt="cancel"
              layout="fixed"
              width="14"
              height="14"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 px-20 pt-25">
          <div
            className={`${
              activeChart === "burst" ? "activeChart" : "inactiveChart"
            }`}
            onClick={() => setActiveChart("burst")}
          >
            Burst chart
          </div>
          <div
            className={`vp-600:hidden ${
              activeChart === "dependency" ? "activeChart" : "inactiveChart"
            }`}
            onClick={() => setActiveChart("dependency")}
          >
            Dependency chart
          </div>
          <div
            className={`vp-600:flex hidden justify-center ${
              activeChart === "dependency" ? "activeChart" : "inactiveChart"
            }`}
            onClick={() => setActiveChart("dependency")}
          >
            Dependency
          </div>
          <div
            className={`vp-600:hidden ${
              activeChart === "directed" ? "activeChart" : "inactiveChart"
            }`}
            onClick={() => setActiveChart("directed")}
          >
            Directed graph
          </div>
          <div
            className={`vp-600:flex hidden justify-center ${
              activeChart === "directed" ? "activeChart" : "inactiveChart"
            }`}
            onClick={() => setActiveChart("directed")}
          >
            Directed
          </div>
        </div>
        {activeChart === "burst" && (
          <div className="flex justify-center px-40">
            <SunburstChart />
          </div>
        )}
        {activeChart === "dependency" && (
          <div className="px-40 h-400">
            <ChordChart />
          </div>
        )}
        {activeChart === "directed" && (
          <div className="px-70 vp-980:px-20">
            {/* {allTags.map((tags, index) => (
              <DirectedRow key={index} index={index} tags={tags} />
            ))} */}
            <DirectedRow />
            <DirectedRow />
            <DirectedRow />
            <DirectedRow />
          </div>
        )}
      </div>
    </>
  );
};

export default ShowCharts;
