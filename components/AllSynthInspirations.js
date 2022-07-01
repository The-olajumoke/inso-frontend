import React from "react";
import Connections from "./Connections";
import Tags from "./Tags";
import Threads from "./Threads";

export const AllSynthInspirations = ({
  activeViewInspiration,
  setViewInspirations,
  setActiveViewInspiration,
}) => {
  return (
    <div>
      {" "}
      {activeViewInspiration === "Threads" && (
        <Threads
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
        />
      )}
      {activeViewInspiration === "Tags" && (
        <Tags
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
        />
      )}
      {activeViewInspiration === "Connections" && (
        <Connections
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
        />
      )}
    </div>
  );
};
