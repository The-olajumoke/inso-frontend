import React from "react";
import Image from "next/image";

export const ScoreSettings = ({ setActiveSection }) => {
  return (
    <div className="">
      <div className=" bg-white-white h-89 flex items-center px-45 justify-between">
        <div className="flex items-center">
          <button
            className="flex items-center justify-center"
            onClick={() => setActiveSection("discussions")}
          >
            <Image
              src="/icons/arrow_left_green.svg"
              alt="back"
              layout="fixed"
              width="20"
              height="20"
            />
          </button>
          <h3 className="ml-30  font-medium">Score Settings</h3>
        </div>
        <button onClick={() => setActiveSection("discussions")}>
          <Image
            src="/icons/cancel.svg"
            alt="cancel"
            layout="fixed"
            width="17"
            height="17"
          />
        </button>
      </div>
    </div>
  );
};
