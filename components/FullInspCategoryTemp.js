import React from "react";
import Image from "next/image";

const FullInspCategoryTemp = ({ arrayInsp, setSeeInDetail }) => {
  return (
    <div className=" grid grid-cols-4 vp-980:grid-cols-2 vp-600:grid-cols-1 gap-4">
      {arrayInsp.map((insp, index) => (
        <div
          className="h-70 rounded-lg bg-blue-postInsp flex items-center justify-between pr-44 pl-23 cursor-pointer"
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
            <h6 className=" ml-12 text-black-postInsp"> {insp.category}</h6>
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
  );
};

export default FullInspCategoryTemp;
