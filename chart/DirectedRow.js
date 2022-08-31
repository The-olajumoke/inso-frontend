import React from "react";
import TrendChart from "./TrendChart";

const DirectedRow = ({ index, tags }) => {
  return (
    <div className="mb-8 grid grid-cols-4 items-end ">
      <div className="">
        <p>Tag1 {index} </p>
      </div>
      <div className=" flex ">
        <p>Trending Up</p>
      </div>
      <div className=" flex  items-end">
        <TrendChart
          thick={10}
          radius={5}
          labels={["S", "M", "T", "W", "T", "F", "S"]}
          barData={[5, 8, 8, 8, 4, 1, 3, 4]}
          color="#48BBFD"
        />
      </div>
      <div className=" flex justify-end">
        <p>
          <span className=" text-primary-darkGreen font-medium">32</span> times
        </p>
      </div>
    </div>
  );
};

export default DirectedRow;
