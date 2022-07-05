import React from "react";
import Connections from "./Connections";
import Tags from "./Tags";
import Threads from "./Threads";
import PostingInspirationTemp from "./PostingInspirationTemp";

export const AllSynthInspirations = ({
  activeViewInspiration,
  setViewInspirations,
  setActiveViewInspiration,
  setActiveInspiration,
  activeDetailedInsp,
  setShowDetailedInsp,
  setActiveDetailedInsp,
}) => {
  return (
    <div>
      {" "}
      {activeViewInspiration === "Interesting Connections" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Connections");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Interesting Connections"
          instruction="Analyze connections between tags that were interesting to you."
          firstHeading="Connections"
          firstValue="Identify tags with connections that were interesting to you."
          secondHeading="Explain"
          secondValue="Explain why the connection between the tags was interesting to you."
          ThirdHeading="Takeaway "
          ThirdValue="List three lessons others could learn about the topic from your analysis of the relationship between the tags."
        />
      )}
      {activeViewInspiration === "Missing Connections" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Connections");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Missing Connections"
          instruction="Analyse tags that you expected would have stronger connections"
          firstHeading="Connections"
          firstValue="Identify tags that you expected would have stronger connections between them."
          secondHeading="Explain"
          secondValue="Explain why you believe the tags should be more strongly connected."
          ThirdHeading="Takeaway "
          ThirdValue="List three lessons others could learn about the topic from your analysis of the relationship between the tags."
        />
      )}
      {activeViewInspiration === "Popular Connections" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Connections");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Popular Connections"
          instruction="Analyze tags with strong connections between them."
          firstHeading="Connections"
          firstValue="Identify tags with strong connections between them."
          secondHeading="Explain"
          secondValue="Explain why you believe the tags are so strongly connected."
          ThirdHeading="Takeaway "
          ThirdValue="List three lessons others could learn about the topic from your analysis of the relationship between the tags."
        />
      )}
      {activeViewInspiration === "Interesting Tags" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Tags");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Interesting Tags"
          instruction="Analyze tags that were interesting to you."
          firstHeading="Tags"
          firstValue="List three tags used in the discussion that were interesting to you."
          secondHeading="Explain"
          secondValue="Explain why the use of the tags was interesting to you."
          ThirdHeading="Takeaway "
          ThirdValue="List three lessons others could learn about the topic from your analysis of the tags."
        />
      )}
      {activeViewInspiration === "Missing Tags" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Tags");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Missing Tags"
          instruction="Analyze tags (or unused keywords) that you expected to be used more frequently in the discussion."
          firstHeading="Tags"
          firstValue="List three tags that you believe should have been used more frequently in the discussion (or keywords that you believe should have been used but did not appear in the discussion)."
          secondHeading="Explain"
          secondValue="Explain why you believe the tags (or keywords) should have been used more frequently."
          ThirdHeading="Takeaway "
          ThirdValue="List three lessons others could learn about the topic from your analysis of the tags."
        />
      )}
      {activeViewInspiration === "Popular Tags" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Tags");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Popular Tags"
          instruction="Analyze tags that were frequently used."
          firstHeading="Tags"
          firstValue="Identify three tags that were frequently used in the discussion.."
          secondHeading="Explain"
          secondValue="Explain why you believe the tags were used so frequently."
          ThirdHeading="Takeaway "
          ThirdValue="List three lessons others could learn about the topic from your analysis of the tags."
        />
      )}
      {activeViewInspiration === "Interesting Thread" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Thread");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Interesting Thread"
          instruction="Analyze a thread that was interesting to you."
          firstHeading="Threads"
          firstValue="Identity a thread that was interesting to you."
          secondHeading="Explain"
          secondValue="Explain why the thread was interesting to you."
          ThirdHeading="Takeaway "
          ThirdValue="List three lessons others could learn about the topic from your analysis of the thread.."
        />
      )}
      {activeViewInspiration === "Missing Thread" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Thread");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Missing Thread"
          instruction="Analyze a thread that you believe was missing important information."
          firstHeading="Threads"
          firstValue="Identify a thread that you believe was missing important concepts and list the concepts you believe should have been included."
          secondHeading="Explain"
          secondValue="Explain how including those concepts would have provided more insight to the discussion in the thread."
          ThirdHeading="Takeaway "
          ThirdValue="List three lessons that you learned about the topic from your analysis of the thread."
        />
      )}
      {activeViewInspiration === "Popular Thread" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Thread");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Popular Thread"
          instruction="Analyze a thread that was popular."
          firstHeading="Threads"
          firstValue="Identity a thread that was popular in the discussion."
          secondHeading="Explain"
          secondValue="Explain why you believe the thread was so popular. "
          ThirdHeading="Takeaway "
          ThirdValue="List three lessons that you learned about the topic from your analysis of the thread."
        />
      )}
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
