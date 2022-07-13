import React, { useState } from "react";
import styles from "@/styles/discussion.module.css";

import Image from "next/image";
import {
  PostingInspirations,
  RespondingInspirations,
  SynthesizingInspirations,
} from "@/utils/sampleData";

const FullPostInspirations = ({ setViewFullPostInsp }) => {
  const [activeInsp, setActiveInsp] = useState("Post with");
  const [seeInDetail, setSeeInDetail] = useState(false);
  return (
    <div className={` h-full  ${styles.hiddenScrollbar} `}>
      <div className="h-65 bg-gray-background flex items-center px-37">
        <div className=" flex items-center ">
          <div
            className="flex items-center justify-center"
            onClick={() => setViewFullPostInsp(false)}
          >
            <Image
              src="https://res.cloudinary.com/insomaryland/image/upload/v1655331724/InsoImages/arrow_back_tqezov.svg"
              alt="back"
              layout="fixed"
              width="20"
              height="20"
            />
          </div>
          <h5 className="ml-13">Post Inspiration</h5>
        </div>
      </div>

      {seeInDetail ? (
        <div className={`px-37 mt-15`}>
          <div className="grid grid-cols-5 my-20 ">
            <button
              className={`${
                activeInsp === "Post with"
                  ? "btn-currentSection"
                  : "btn-notCurrentSection"
              }`}
              onClick={() => setActiveInsp("Post with")}
            >
              Post with
            </button>
            <button className="border-b-2 border-other-disabled"></button>
            <button
              className={`${
                activeInsp === "Respond with"
                  ? "btn-currentSection"
                  : "btn-notCurrentSection"
              }`}
              onClick={() => setActiveInsp("Respond with")}
            >
              Respond with
            </button>
            <button className="border-b-2 border-other-disabled"></button>
            <button
              className={`${
                activeInsp === "Synthesise"
                  ? "btn-currentSection"
                  : "btn-notCurrentSection"
              }`}
              onClick={() => setActiveInsp("Synthesise")}
            >
              Synthesise
            </button>
          </div>
          {activeInsp == "Post with" && (
            <div className="">
              {PostingInspirations.map((insp, index) => (
                <div key={index} className="mb-22">
                  <div className="flex items-center mb-13">
                    <div className="flex items-center justify-center">
                      <Image
                        src={`${insp.categoryIcon}`}
                        alt={insp.category}
                        layout="fixed"
                        width="18"
                        height="18"
                      />
                    </div>
                    <p className="ml-12 text-xs text-black-analText ">
                      {insp.category}
                    </p>
                  </div>
                  <div className="grid grid-cols-4 gap-6 ">
                    {insp.inspirations.map((inspiration, index) => (
                      <div
                        className=" h-236 border border-gray-analyticsGray rounded-lg flex flex-col overflow-hidden"
                        key={index}
                      >
                        {" "}
                        <div className="flex-grow px-16 pt-16 flex  flex-col">
                          <span
                            style={{ fontSize: "8px" }}
                            className=" text-primary-darkGreen "
                          >
                            Instruction
                          </span>
                          <span
                            style={{ fontSize: "10px " }}
                            className=" text-gray-faintGray mb-20 h-65"
                          >
                            {inspiration?.instruction}
                          </span>
                          <span
                            style={{ fontSize: "8px" }}
                            className=" text-primary-darkGreen mb-4 "
                          >
                            Headers and prompts
                          </span>
                          {inspiration?.subtitles?.map((sub, index) => (
                            <span
                              key={index}
                              style={{ fontSize: "10px" }}
                              className=" text-gray-faintGray mb-10"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                        <div className=" bg-blue-lightBlue h-50 px-28 flex items-center text-sm text-black-analText">
                          {" "}
                          {inspiration.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeInsp == "Respond with" && (
            <div className="">
              {RespondingInspirations.map((insp, index) => (
                <div key={index} className="mb-22">
                  <div className="flex items-center mb-13">
                    <div className="flex items-center justify-center">
                      <Image
                        src={`${insp.categoryIcon}`}
                        alt={insp.category}
                        layout="fixed"
                        width="18"
                        height="18"
                      />
                    </div>
                    <p className="ml-12 text-xs text-black-analText ">
                      {insp.category}
                    </p>
                  </div>
                  <div className="grid grid-cols-4 gap-6 ">
                    {insp.inspirations.map((inspiration, index) => (
                      <div
                        className=" h-236 border border-gray-analyticsGray rounded-lg flex flex-col overflow-hidden"
                        key={index}
                      >
                        {" "}
                        <div className="flex-grow px-16 pt-16 flex  flex-col">
                          <span
                            style={{ fontSize: "8px" }}
                            className=" text-primary-darkGreen "
                          >
                            Instruction
                          </span>
                          <span
                            style={{ fontSize: "10px " }}
                            className=" text-gray-faintGray mb-20 h-65"
                          >
                            {inspiration?.instruction}
                          </span>
                          <span
                            style={{ fontSize: "8px" }}
                            className=" text-primary-darkGreen mb-4 "
                          >
                            Headers and prompts
                          </span>
                          {inspiration?.subtitles?.map((sub, index) => (
                            <span
                              key={index}
                              style={{ fontSize: "10px" }}
                              className=" text-gray-faintGray mb-10"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                        <div className=" bg-blue-lightBlue h-50 px-28 flex items-center text-sm text-black-analText">
                          {" "}
                          {inspiration.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeInsp == "Synthesise" && (
            <div className="">
              {SynthesizingInspirations.map((insp, index) => (
                <div key={index} className="mb-22">
                  <div className="flex items-center mb-13">
                    <div className="flex items-center justify-center">
                      <Image
                        src={`${insp.categoryIcon}`}
                        alt={insp.category}
                        layout="fixed"
                        width="18"
                        height="18"
                      />
                    </div>
                    <p className="ml-12 text-xs text-black-analText ">
                      {insp.category}
                    </p>
                  </div>
                  <div className="grid grid-cols-4 gap-6 ">
                    {insp.inspirations.map((inspiration, index) => (
                      <div
                        className=" h-236 border border-gray-analyticsGray rounded-lg flex flex-col overflow-hidden"
                        key={index}
                      >
                        {" "}
                        <div className="flex-grow px-16 pt-16 flex  flex-col">
                          <span
                            style={{ fontSize: "8px" }}
                            className=" text-primary-darkGreen "
                          >
                            Instruction
                          </span>
                          <span
                            style={{ fontSize: "10px " }}
                            className=" text-gray-faintGray mb-20 h-65"
                          >
                            {inspiration?.instruction}
                          </span>
                          <span
                            style={{ fontSize: "8px" }}
                            className=" text-primary-darkGreen mb-4 "
                          >
                            Headers and prompts
                          </span>
                          {inspiration?.subtitles?.map((sub, index) => (
                            <span
                              key={index}
                              style={{ fontSize: "10px" }}
                              className=" text-gray-faintGray mb-10"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                        <div className=" bg-blue-lightBlue h-50 px-28 flex items-center text-sm text-black-analText">
                          {" "}
                          {inspiration.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="px-37">
          <div className="grid grid-cols-5 my-20 ">
            <button
              className={`${
                activeInsp === "Post with"
                  ? "btn-currentSection"
                  : "btn-notCurrentSection"
              }`}
              onClick={() => setActiveInsp("Post with")}
            >
              Post with
            </button>
            <button className="border-b-2 border-other-disabled"></button>
            <button
              className={`${
                activeInsp === "Respond with"
                  ? "btn-currentSection"
                  : "btn-notCurrentSection"
              }`}
              onClick={() => setActiveInsp("Respond with")}
            >
              Respond with
            </button>
            <button className="border-b-2 border-other-disabled"></button>
            <button
              className={`${
                activeInsp === "Synthesise"
                  ? "btn-currentSection"
                  : "btn-notCurrentSection"
              }`}
              onClick={() => setActiveInsp("Synthesise")}
            >
              Synthesise
            </button>
          </div>
          {activeInsp === "Post with" && (
            <div className=" grid grid-cols-3 gap-4">
              {PostingInspirations.map((insp, index) => (
                <div
                  className="h-70 rounded-lg bg-blue-lightBlue flex items-center justify-between pr-44 pl-23 cursor-pointer"
                  key={index}
                  onClick={() => setSeeInDetail(true)}
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center">
                      {" "}
                      <Image
                        src={`${insp.categoryIcon}`}
                        alt={insp.category}
                        layout="fixed"
                        width="24"
                        height="24"
                      />
                    </div>
                    <h6 className=" ml-12 text-black-analText">
                      {" "}
                      {insp.category}
                    </h6>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="https://res.cloudinary.com/insomaryland/image/upload/v1656195114/InsoImages/arrow_forward_winp6p.svg"
                      alt="arrow-right"
                      layout="fixed"
                      width="16"
                      height="16"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeInsp === "Respond with" && (
            <div className=" grid grid-cols-3 gap-4">
              {RespondingInspirations.map((insp, index) => (
                <div
                  className="h-70 rounded-lg bg-blue-lightBlue flex items-center justify-between pr-44 pl-23"
                  key={index}
                  onClick={() => setSeeInDetail(true)}
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center">
                      {" "}
                      <Image
                        src={`${insp.categoryIcon}`}
                        alt={insp.category}
                        layout="fixed"
                        width="24"
                        height="24"
                      />
                    </div>
                    <h6 className=" ml-12 text-black-analText">
                      {" "}
                      {insp.category}
                    </h6>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="https://res.cloudinary.com/insomaryland/image/upload/v1656195114/InsoImages/arrow_forward_winp6p.svg"
                      alt="arrow-right"
                      layout="fixed"
                      width="16"
                      height="16"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeInsp === "Synthesise" && (
            <div className=" grid grid-cols-3 gap-4">
              {SynthesizingInspirations.map((insp, index) => (
                <div
                  className="h-70 rounded-lg bg-blue-lightBlue flex items-center justify-between pr-44 pl-23"
                  key={index}
                  onClick={() => setSeeInDetail(true)}
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center">
                      {" "}
                      <Image
                        src={`${insp.categoryIcon}`}
                        alt={insp.category}
                        layout="fixed"
                        width="24"
                        height="24"
                      />
                    </div>
                    <h6 className=" ml-12 text-black-analText">
                      {" "}
                      {insp.category}
                    </h6>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="https://res.cloudinary.com/insomaryland/image/upload/v1656195114/InsoImages/arrow_forward_winp6p.svg"
                      alt="arrow-right"
                      layout="fixed"
                      width="16"
                      height="16"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FullPostInspirations;
