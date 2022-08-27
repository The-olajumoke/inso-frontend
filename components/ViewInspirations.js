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
      className={`mb-7 flex items-center justify-between h-32 w-full px-15  text-black-postInsp  outline-none cursor-pointer  border-l-4 
      ${
        (category === "Ask Something" || category === "Add") &&
        "border-gray-bold"
      }
      ${
        (category === "Connect Something" || category === "Answer") &&
        " border-green-boldGreen"
      }
      ${
        (category === "Create Something" || category === "Ask") &&
        "  border-other-boldOrange"
      }
      ${
        (category === "Share Something" || category === "Evaluate") &&
        " border-other-boldRed"
      }
      ${
        (category === "Start Something" || category === "React") &&
        " border-primary-darkGreen"
      }
      `}
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
          src="/static/icons/arrow_forward.svg"
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
