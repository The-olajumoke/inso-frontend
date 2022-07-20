import React from "react";
import Image from "next/image";

const FullInspirationTemp = ({
  arrayInsp,
  setViewFullPostInsp,
  setActiveCommentBox,
}) => {
  return (
    <div>
      {arrayInsp.map((insp, index) => (
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
                className=" h-236 border border-gray-analyticsGray rounded-lg flex flex-col overflow-hidden cursor-pointer"
                key={index}
                onClick={() => {
                  setViewFullPostInsp(false);
                  setActiveCommentBox(`${inspiration.title}`);
                }}
              >
                {" "}
                <div className="flex-grow px-16 pt-16 flex  flex-col">
                  <p className=" mb-8 text-primary-darkGreen ">Instruction</p>
                  <h6 className=" text-gray-faintGrayOpacity hover:text-gray-faintGray mb-20 h-65">
                    {inspiration?.instruction}
                  </h6>
                </div>
                <div className=" bg-blue-postInsp h-50 px-28 flex items-center text-sm text-black-postInsp">
                  {" "}
                  {inspiration.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullInspirationTemp;
