import React from "react";
import Image from "next/image";

const Connections = ({ setViewInspirations }) => {
  return (
    <div className="">
      <div
        className="px-45 flex items-center cursor-pointer  "
        onClick={() => setViewInspirations(false)}
      >
        <div className="flex justify-center items-center">
          <Image
            src="/icons/arrow_left_green.svg"
            alt="back"
            layout="fixed"
            width="16"
            height="16"
          />
        </div>
        <h6 className="ml-16 text-gray-faintGray">Back</h6>
      </div>
      <h5 className="px-45 my-17 text-black-analText">Connections</h5>
      <div className=" bg-gray-createDisc py-24 px-45">
        <p className=" text-primary-darkGreen mb-7">Instruction</p>
        <h5 className=" text-gray-text mb-28">
          Analyse this chart to displays interaction connections between
          students.
        </h5>
        <p className=" text-primary-darkGreen mb-7">Chart</p>
        <div className="">
          <Image
            src="/illustrations/Connections_chart.svg"
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

export default Connections;
