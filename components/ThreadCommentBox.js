import React from "react";
import Image from "next/image";
import ShowInspirations from "./ShowInspirations";
const ThreadCommentBox = ({ setActiveCommentBox }) => {
  return (
    <div className="border border-primary-darkGreen rounded-lg  mb-32  ">
      <div className="py-24 px-29 ">
        <div className="  flex items-center mb-12 w-full border-b pb-15 border-green-lightGreen">
          <div className="flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/insomaryland/image/upload/v1655333490/info_outline_exdgeh.svg"
              alt="back"
              layout="fixed"
              width="24"
              height="24"
              className=" cursor-pointer"
            />
          </div>
          <h6 className=" text-primary-darkGreen ml-14">
            Analyse this chart to see interesting threads mapped to posts.
          </h6>
        </div>
        <div className="w-full mb-15 flex">
          <div className="">
            <div>
              <p className=" text-black-analText">Charts</p>

              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1655328330/InsoImages/Thread_chart_a1isvi.svg"
                alt="cancel"
                layout="fixed"
                width="280"
                height="280"
              />
            </div>
            <div>
              <h5 className=" text-black-analText">Summary</h5>
              <p className=" text-gray-analyticsGray ">
                Summarize your synthesis from the chart above
              </p>
            </div>
          </div>
        </div>
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Threads"
      />
    </div>
  );
};

export default ThreadCommentBox;
