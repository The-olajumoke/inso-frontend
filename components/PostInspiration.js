import React, { useState } from "react";
import Image from "next/image";
import Inspiration from "./Inspiration";
import SynthInspiration from "./SynthInspiration";

const PostInspiration = ({ setActiveSection }) => {
  const PostingInspirations = ["Resources", "Polls", "Resources", "Resources"];
  const RespondingInspirations = ["Resources", "Polls", "Resources"];
  const SynthesizingInspirations = ["Threads", "Tags", "Connections"];
  const UnUsedInspirations = ["Resources", "Resources", "Resources"];
  const [activeInspiration, setActiveInspiration] = useState("posting");
  return (
    <div className="">
      <div className="px-45 flex items-center h-89 ">
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
        <h3 className="ml-30 ">Post inspiration</h3>
      </div>
      <div className="  bg-gray-createDisc px-45 pt-22 pb-70 ">
        <div className="grid  grid-cols-3 text-sm gap-8 mb-20">
          <button
            className={`${
              activeInspiration === "posting" ? "btn" : "btn-nonActive"
            }   h-30`}
            onClick={() => setActiveInspiration("posting")}
          >
            Posting
          </button>
          <button
            className={`${
              activeInspiration === "responding" ? "btn" : "btn-nonActive"
            }   h-30`}
            onClick={() => setActiveInspiration("responding")}
          >
            Responding
          </button>
          <button
            className={`${
              activeInspiration === "synthesizing" ? "btn" : "btn-nonActive"
            }   h-30`}
            onClick={() => setActiveInspiration("synthesizing")}
          >
            Synthesizing
          </button>
        </div>
        {activeInspiration === "posting" && (
          <div>
            <div className=" h-250 overflow-auto">
              {PostingInspirations.map((insp, index) => (
                <Inspiration
                  id={insp}
                  key={index}
                  checked={true}
                  setActiveSection={setActiveSection}
                />
              ))}
              <div className="w-full flex justify-end mt-15">
                <Image
                  src="/icons/add_icon_blue.svg"
                  alt="add post inspiration"
                  layout="fixed"
                  width="25"
                  height="25"
                />
              </div>
            </div>

            <div>
              <p className=" text-primary-darkGreen mb-7">
                Unused post inspiration
              </p>
              {UnUsedInspirations.map((insp, index) => (
                <Inspiration id={insp} key={index} checked={false} />
              ))}
            </div>
          </div>
        )}
        {activeInspiration === "responding" && (
          <div>
            <div className=" h-250 overflow-auto">
              {RespondingInspirations.map((insp, index) => (
                <Inspiration
                  id={insp}
                  key={index}
                  checked={true}
                  setActiveSection={setActiveSection}
                />
              ))}
              <div className="w-full flex justify-end mt-15">
                <Image
                  src="/icons/add_icon_blue.svg"
                  alt="add post inspiration"
                  layout="fixed"
                  width="25"
                  height="25"
                />
              </div>
            </div>

            <div>
              <p className=" text-primary-darkGreen mb-7">
                Unused post inspiration
              </p>
              {UnUsedInspirations.map((insp, index) => (
                <Inspiration id={insp} key={index} checked={false} />
              ))}
            </div>
          </div>
        )}
        {activeInspiration === "synthesizing" && (
          <div className=" h-auto">
            <div className="">
              {SynthesizingInspirations.map((insp, index) => (
                <SynthInspiration
                  id={insp}
                  key={index}
                  checked={true}
                  setActiveSection={setActiveSection}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default PostInspiration;
