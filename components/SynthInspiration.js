import React from "react";
import CheckBox from "./CheckBox";

const SynthInspiration = ({ id, checked, setActiveSection }) => {
  return (
    <div
      className="mb-7 flex items-center h-45 w-full px-20 py-9 bg-blue-lightBlue rounded-lg text-lg
      text-gray-text outline-none cursor-pointer"
    >
      <CheckBox id={id} checked={checked} />
      <h6
        className="ml-20 text-gray-text"
        onClick={() => setActiveSection(`${id}`)}
      >
        {id}
      </h6>
    </div>
  );
};

export default SynthInspiration;
