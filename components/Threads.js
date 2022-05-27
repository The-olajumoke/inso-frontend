import React from "react";
import Image from "next/image";
const Threads = ({ setActiveSection }) => {
  return (
    <div className="">
      <div className=" bg-white-white h-89 flex items-center px-45 justify-between">
        <div className="flex items-center">
          <button
            className="flex items-center justify-center"
            onClick={() => setActiveSection("postInspiration")}
          >
            <Image
              src="/icons/arrow_left_green.svg"
              alt="back"
              layout="fixed"
              width="20"
              height="20"
            />
          </button>
          <h3 className="ml-30  font-medium">Threads</h3>
        </div>
        <button onClick={() => setActiveSection("postInspiration")}>
          <Image
            src="/icons/cancel.svg"
            alt="cancel"
            layout="fixed"
            width="17"
            height="17"
          />
        </button>
      </div>
      <div className=" bg-gray-createDisc py-24 px-45">
        <p className=" text-primary-darkGreen mb-7">Instruction</p>
        <h5 className=" text-gray-text w-11/12 mb-28">
          Analyse this chart to see interesting threads mapped to posts.
        </h5>
        <p className=" text-primary-darkGreen mb-7">Chart</p>
        <div className="">
          <Image
            src="/illustrations/Thread_chart.svg"
            alt="cancel"
            layout="fixed"
            width="120"
            height="120"
          />
        </div>
        <p className=" text-primary-darkGreen mb-7">Headers and prompts</p>
        <h5 className=" text-gray-text w-11/12 ">Summary</h5>
        <p className=" text-border-dropdownLine">
          Summarize your synthesis from the chart above
        </p>
      </div>
    </div>
  );
};

export default Threads;
