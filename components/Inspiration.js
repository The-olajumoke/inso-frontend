import React from "react";
import Image from "next/image";
const Inspiration = ({ insp, setActiveDetailedInsp, setShowDetailedInsp }) => {
  const { category, categoryIcon } = insp;
  return (
    <div
      className="mb-7 flex items-center justify-between h-45 w-full px-20 py-9 bg-blue-lightBlue rounded-lg text-lg
      text-gray-text outline-none cursor-pointer"
    >
      <div className="flex items-center">
        <div className=" flex items-center justify-center">
          <Image
            src={`${categoryIcon}`}
            alt={category}
            layout="fixed"
            width="24"
            height="24"
          />
        </div>
        <h6
          className="ml-16 text-black-analText"
          onClick={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp(`${category}`);
          }}
        >
          {category}
        </h6>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/icons/arrow_forward.svg"
          alt="arrow-right"
          layout="fixed"
          width="16"
          height="16"
        />
      </div>
    </div>
  );
};

export default Inspiration;
