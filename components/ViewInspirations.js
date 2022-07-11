import React from "react";
import Image from "next/image";

const ViewInspirations = ({
  insp,
  setViewInspirations,
  setCurrentDetailedInsp,
}) => {
  const { category, categoryIcon } = insp;
  return (
    <div
      className="mb-7 flex items-center justify-between h-40 w-full px-20  bg-blue-postInsp text-black-postInsp rounded-lg text-lg  outline-none cursor-pointer"
      onClick={() => {
        setViewInspirations(true);
        setCurrentDetailedInsp(`${category}`);
      }}
    >
      <div className="flex items-center">
        <div className=" flex items-center justify-center">
          <Image
            src={`${categoryIcon}`}
            alt={category}
            layout="fixed"
            width="20"
            height="20"
          />
        </div>
        <h6
          className="ml-16 text-black-analText"
          onClick={() => {
            setViewInspirations(true);
            setCurrentDetailedInsp(`${category}`);
          }}
        >
          {category}
        </h6>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/insomaryland/image/upload/v1656195114/InsoImages/arrow_forward_winp6p.svg"
          alt="arrow-right"
          layout="fixed"
          width="16"
          height="16"
        />
      </div>
    </div>
  );
};

export default ViewInspirations;
