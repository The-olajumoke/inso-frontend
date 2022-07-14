import React from "react";
import PostingInspirationTemp from "./PostingInspirationTemp";

const AllRespondingInspiration = ({
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
      {activeViewInspiration === "Alternatives" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Add");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Alternatives"
          instruction="Recommend alternative perspectives about concepts in the post."
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="Alternatives"
          secondValue="Identify alternatives ideas and explain how those alternatives could lead to broader understanding of the topic."
          ThirdHeading="Continue"
          ThirdValue="Continue the discussion by asking more questions or adding new ideas, perspectives, or resources."
        />
      )}
      {activeViewInspiration === "Illustrations" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Add");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Illustrations"
          instruction="Illustrate concepts in the post by including media such as a video, meme, newstory, or some other resource you located or created. "
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="Illustration"
          secondValue="Paste a copy of (or link to) media you located or created that helps illustrate the ideas made in the post."
          ThirdHeading="Continue"
          ThirdValue="Continue the discussion by asking more questions or adding new ideas, perspectives, or resources."
        />
      )}
      {activeViewInspiration === "Insights" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Add");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Insights"
          instruction="Add new ideas, explain concepts, or address questions posed."
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="Insight"
          secondValue="Add new ideas, explain concepts, and/or address questions to help increase understanding of the topic."
          ThirdHeading="Continue"
          ThirdValue="Continue the discussion by asking more questions or adding new ideas, perspectives, or resources."
        />
      )}
      {activeViewInspiration === "Resources" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Add");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Resources"
          instruction="Share resources related to concepts in the post."
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="Resources"
          secondValue="List three resources related to the topic (include a link and brief description for each)."
          ThirdHeading="Continue"
          ThirdValue="Continue the discussion by asking more questions or adding new ideas, perspectives, or resources."
        />
      )}
      {activeViewInspiration === "Directly" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Answer");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Directly"
          instruction="Answer questions asked."
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="Answer"
          secondValue="Address the questions posed in the post. "
          ThirdHeading="Support"
          ThirdValue="Paste the link to at least one web-based resource that supports your response and summarize the ideas in the resource."
        />
      )}
      {activeViewInspiration === "For clarification" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Answer");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="For clarification"
          instruction="Add clarity to questions by explaining related ideas and concepts."
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="Clarify"
          secondValue="Explain ideas in the post and/or address questions to increase understanding."
          ThirdHeading="Support"
          ThirdValue="Paste the link to at least one web-based resource that supports your response and summarize the ideas in the resource."
        />
      )}
      {activeViewInspiration === "More questions" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Answer");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="More questions"
          instruction=""
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="Clarify"
          secondValue="Ask at least three follow-up questions to help focus on important concepts and possible explanations."
          ThirdHeading="Support"
          ThirdValue="Paste the link to at least one web-based resource that supports your response and summarize the ideas in the resource."
        />
      )}
      {activeViewInspiration === "Questions" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Ask");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Questions"
          instruction="Pose questions to further discussion."
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="Questions"
          secondValue="Pose at least three questions that would encourage further discussion about concepts in the post."
          ThirdHeading="Outcomes"
          ThirdValue="Recommend three outcomes you would hope to see from discussion about your questions."
        />
      )}
      {activeViewInspiration === "For clarification" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Ask");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="For clarification"
          instruction="Pose questions to increase understanding about specific concepts."
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="Clarification"
          secondValue="Pose at least three questions that could increase understanding of specific concepts related to the topic."
          ThirdHeading="Insights"
          ThirdValue="Describe the insights you would hope to gain through a discussion about the questions you posed."
        />
      )}
      {activeViewInspiration === "1 Star 5 Stars" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Evaluate");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="1 Star 5 Stars"
          instruction="Evaluate the post based on a 5-star rating."
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="1 Star "
          secondValue="Identify one aspect of the post that you would rate as 1-star and justify your rating."
          ThirdHeading="5 Stars"
          ThirdValue="Identify one aspect of the post that you would rate as 5-star and justify your rating."
        />
      )}

      {activeViewInspiration === "Critical Review" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Evaluate");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Critical Review"
          instruction="Evaluate the strenghts and areas for growth in the post."
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="Maximize"
          secondValue="Identify one aspect of the post that was informative."
          ThirdHeading="Develop"
          ThirdValue="Identify one aspect of the post that needs further development and recommend specific stteps for improvement."
        />
      )}
      {activeViewInspiration === "Loved, Learned" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Evaluate");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Loved, Learned"
          instruction="Evaluate the post based on what you loved and what you learned."
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="Loved"
          secondValue="Identify one aspect of the post that you loved."
          ThirdHeading="Learned"
          ThirdValue="Explain how the ideas in the post informed your understanding of the topic."
        />
      )}
      {activeViewInspiration === "Heart" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("React");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Heart"
          instruction="Explain why you loved the post."
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="Reaction"
          secondValue="Explain why you chose this reaction."
          ThirdHeading="Continue"
          ThirdValue="Continue the discussion by asking more questions or adding new ideas, perspectives, or resources."
        />
      )}
      {activeViewInspiration === "Mad" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("React");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Mad"
          instruction="Explain why the post made you mad."
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="Reaction"
          secondValue="Explain why you chose this reaction."
          ThirdHeading="Continue"
          ThirdValue="Continue the discussion by asking more questions or adding new ideas, perspectives, or resources."
        />
      )}
      {activeViewInspiration === "Mindblown" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("React");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Mindblown"
          instruction="Explain why the post blew your mind."
          firstHeading="Summary"
          firstValue="Summarize your understanding of the main points to which you are responding."
          secondHeading="Reaction"
          secondValue="Explain why you chose this reaction."
          ThirdHeading="Continue"
          ThirdValue="Continue the discussion by asking more questions or adding new ideas, perspectives, or resources."
        />
      )}
    </div>
  );
};

export default AllRespondingInspiration;
