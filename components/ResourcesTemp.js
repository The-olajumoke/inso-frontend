import React from "react";
import styles from "@/styles/viewDiscussion.module.css";

const ResourcesTemp = () => {
  return (
    <div
      className={`${styles.showValueInsp} absolute px-44 py-34 shadow-lg flex flex-col justify-between `}
    >
      <div>
        <p className=" text-primary-darkGreen">Instruction</p>
        <h5 className="">
          Share at least one web-based resource related to specific concepts
          from this topic.
        </h5>
      </div>
      <div>
        <p className=" text-primary-darkGreen mb-1">Headers and prompts</p>
        <h5 className=" text-black-analText">Resource name</h5>
        <p className=" text-gray-analyticsGray ">
          Paste a link to the resource
        </p>
      </div>
      <div>
        <h5 className=" text-black-analText">Summary</h5>
        <p className=" text-gray-analyticsGray ">
          Summarize the content of the the resource
        </p>
      </div>
      <div>
        <h5 className=" text-black-analText">Connections</h5>
        <p className=" text-gray-analyticsGray">
          Identify specific course concept in the resource
        </p>
      </div>
    </div>
  );
};

export default ResourcesTemp;
