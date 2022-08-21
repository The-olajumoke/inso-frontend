import React from "react";
import Image from "next/image";
import ShowInspirations from "./ShowInspirations";
const PopularTagsComment = ({ setActiveCommentBox }) => {
  return (
    <div className="border border-primary-darkGreen rounded-lg  mb-32  ">
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Popular Tags"
      />
    </div>
  );
};

export default PopularTagsComment;
