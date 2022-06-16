import React from "react";
import styles from "@/styles/viewDiscussion.module.css";
import Image from "next/image";
const ThreadsTemp = () => {
  return (
    <div
      className={`${styles.showValueInsp} absolute px-44 py-34 shadow-lg flex flex-col justify-between `}
    >
      <div>
        <p className=" text-primary-darkGreen">Instruction</p>
        <h5 className="">
          Analyse this chart to see interesting threads mapped to posts.
        </h5>
      </div>
      <div>
        <p className=" text-primary-darkGreen">Charts</p>

        <Image
          src="https://res.cloudinary.com/insomaryland/image/upload/v1655328330/InsoImages/Thread_chart_a1isvi.svg"
          alt="cancel"
          layout="fixed"
          width="157"
          height="157"
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

export default ThreadsTemp;
