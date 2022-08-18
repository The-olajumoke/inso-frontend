import React from "react";
import Image from "next/image";

const ViewInspirations = ({
  insp,
  setViewInspirations,
  setCurrentDetailedInsp,
  togglePostInsp,
}) => {
  const { category, categoryIcon } = insp;
  return (
    <div
      className="mb-7 flex items-center justify-between h-32 w-full px-15  bg-blue-postInsp text-black-postInsp rounded-lg outline-none cursor-pointer"
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
            width="17"
            height="17"
          />
        </div>
        <p
          className="ml-9 text-sm text-black-analText"
          onClick={() => {
            setViewInspirations(true);
            setCurrentDetailedInsp(`${category}`);
          }}
        >
          {category}
        </p>
      </div>
      <div
        className="flex justify-center items-center"
        onClick={togglePostInsp}
      >
        <Image
          src="https://res.cloudinary.com/insomaryland/image/upload/v1656195114/InsoImages/arrow_forward_winp6p.svg"
          alt="arrow-right"
          layout="fixed"
          width="12"
          height="12"
        />
      </div>
    </div>
  );
};

export default ViewInspirations;
