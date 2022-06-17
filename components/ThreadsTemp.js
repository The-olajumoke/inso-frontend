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
      
    </div>
  );
};

export default ThreadsTemp;
