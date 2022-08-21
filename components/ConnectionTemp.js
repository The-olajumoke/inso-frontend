import React from "react";
import Image from "next/image";
import styles from "@/styles/viewDiscussion.module.css";

const ConnectionTemp = () => {
  return (
    <div
      className={`${styles.showValueInsp} absolute px-44 py-34 shadow-lg flex flex-col justify-between `}
    >
      <div>
        <p className=" text-primary-darkGreen">Instruction</p>
        <h5 className="">
          Analyse this chart to displays interaction connections between
          students.
        </h5>
      </div>
      <div>
        <p className=" text-primary-darkGreen">Charts</p>

        <Image
          src="/static/illustrations/Connections_chart_q70koh.svg"
          alt="cancel"
          layout="fixed"
          width="120"
          height="120"
        />
      </div>
      <div>
        <h5 className=" text-black-analText">Summary</h5>
        <p className=" text-gray-analyticsGray ">
          Summarize your synthesis from the chart above
        </p>
      </div>
    </div>
  );
};

export default ConnectionTemp;
