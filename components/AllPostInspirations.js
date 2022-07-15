import React from "react";
import PostingInspirationTemp from "./PostingInspirationTemp";

const AllPostInspirations = ({
  activeViewInspiration,
  setViewInspirations,
  setActiveViewInspiration,
  setShowDetailedInsp,
  setActiveDetailedInsp,
}) => {
  return (
    <div>
      {activeViewInspiration === "Ask questions" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Ask Something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Ask questions"
          instruction="Pose questions to encourage discussion about the topic.
"
          firstHeading="Questions"
          firstValue="Pose three questions about the topic that would encourage further discussion."
          secondHeading="Understanding"
          secondValue="Explain your current understanding of the topic."
          ThirdHeading="Outcomes"
          ThirdValue="Recommend three outcomes you would hope to see from discussion about your questions."
        />
      )}
      {activeViewInspiration === "Ask for clarity" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Ask Something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Ask for clarity"
          instruction="Pose questions about the topic that would help you gain a better understanding of important concepts."
          firstHeading="Questions"
          firstValue="Pose three questions about specific aspects of the topic that would help you gain a better understanding."
          secondHeading="Understanding"
          secondValue="Explain your current understanding of the topic and the specific aspects about which you would like further explanation."
          ThirdHeading="Insights"
          ThirdValue="Describe the insights you would hope to gain through a discussion about your questions."
        />
      )}

      {activeViewInspiration === "Course concepts" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Connect something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Course concepts"
          instruction="Explain how specific concepts from the topic relate to other concepts in this course or concepts from another course or area."
          firstHeading="Connections"
          firstValue="Describe the relationship(s) you identified between specific concepts."
          secondHeading="Understanding"
          secondValue="Explain how the relationship(s) can help increase understanding of the topic."
          ThirdHeading="New Ideas"
          ThirdValue="List three new ideas you are having because of the concepts and connections you identified."
        />
      )}

      {activeViewInspiration === "Personal experience" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Connect something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Personal experience"
          instruction="Share a personal experience you have had with concepts related to the topic."
          firstHeading="Experience"
          firstValue="Describe the experience(s) you have had with specific concepts related to the topic."
          secondHeading="Understanding"
          secondValue="Explain how this experience has informed your understanding of the concepts."
          ThirdHeading="Reflection"
          ThirdValue="Generalize lessons you learned during this experience to other experiences you might have."
        />
      )}
      {activeViewInspiration === "Real-world applications" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Connect something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Real-world applications"
          instruction="Explain how concepts about the topic could apply to real-world situations."
          firstHeading="Real-world"
          firstValue="Identify a specific real-world scenario that could be informed by, or could inform, concepts related to the topic."
          secondHeading="Understanding"
          secondValue="Explain how application of concepts to this real-world scenario can increase understanding of the topic."
          ThirdHeading="Application"
          ThirdValue="Recommend ways you could effectively interact with the concepts you identified in the context of other real-world scenarios."
        />
      )}
      {activeViewInspiration === "Legal or ethical concerns" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Connect something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Legal or ethical concerns"
          instruction="Identify concepts related to the topic that could have legal or ethical implications."
          firstHeading="Concerns"
          firstValue="Identify a concept from the topic and explain the legal or ethical implications of it."
          secondHeading="Understanding"
          secondValue="Explain the importance of understanding the legal or ethical implications of the concept."
          ThirdHeading="Implications"
          ThirdValue="Suggest at least one positive and one negative legal or ethical implication related to the concepts and concerns you identified."
        />
      )}
      {activeViewInspiration === "Alternative perspectives" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Connect something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Alternative perspectives"
          instruction="Compare alternative perspectives about concepts related to the topic."
          firstHeading="Perspectives"
          firstValue="Identify a specific concept related to the topic about which there are at least two alternative perspectives."
          secondHeading="Understanding"
          secondValue="Explain how each perspective understands the concept."
          ThirdHeading="Commonality"
          ThirdValue="Recommend ways that each perspective can benefit from the ideas of the other."
        />
      )}

      {activeViewInspiration === "A meme" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Create something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="A meme"
          instruction="Create a meme that you believe conveys important ideas about concepts related to the topic."
          firstHeading="Meme"
          firstValue="Insert the meme image you created and include a short caption about the meme."
          secondHeading="Understanding"
          secondValue="Explain how you believe the meme enhances understanding of the topic."
          ThirdHeading="Question"
          ThirdValue="Pose a question that would encourage further discussion about the ideas conveyed in your creation."
        />
      )}
      {activeViewInspiration === "A graphic organizer" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Create something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="A graphic organizer"
          instruction="Create a graphic organizer that helps you undestand concepts related to the topic."
          firstHeading="Graphic Organizer"
          firstValue="Insert an image of or a link to the graphic organizer you created."
          secondHeading="Understanding"
          secondValue="Explain how the graphic organizer helps you understand specific concepts related to the topic."
          ThirdHeading="Question"
          ThirdValue="Pose a question that would encourage further discussion about the ideas conveyed in your creation."
        />
      )}
      {activeViewInspiration === "A media" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Create something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Media"
          instruction="Create some form of media, such as a podcast, poem, webpage, video, song, graphic, etc. that conveys your ideas about concepts related to the topic."
          firstHeading="Media"
          firstValue="Insert a copy of or a link to the media you created."
          secondHeading="Understanding"
          secondValue="Explain what you created and how your creation conveys important ideas about concepts related to the topic."
          ThirdHeading="Question"
          ThirdValue="Pose a question that would encourage further discussion about the ideas conveyed in your creation."
        />
      )}
      {activeViewInspiration === "Media" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Share something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Media"
          instruction="Identify a media element, such as a web-based resource, an image, a recent newstory, etc. that you believe connects to concepts related to the topic."
          firstHeading="Media"
          firstValue="Insert a copy of or a link to the media you identified."
          secondHeading="Understanding"
          secondValue="Explain how the media you identified informs your understanding of concepts related to the topic."
          ThirdHeading="Question"
          ThirdValue="Pose a question that would encourage further discussion about the ideas conveyed in the media."
        />
      )}
      {activeViewInspiration === "A Quote" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Share something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="A Quote"
          instruction="Identify a quote from an assigned reading or resource or a resource you identified that captures important information about concepts related to the topic."
          firstHeading="Quote"
          firstValue="Paste (or retype) a quote from an assigned resource or a resource you identified that captures important information about concepts related to the topic."
          secondHeading="Understanding"
          secondValue="Explain how the quote you identified informs your understanding of concepts related to the topic."
          ThirdHeading="Question
"
          ThirdValue="Pose a question that would encourage further discussion about the ideas conveyed in the quote."
        />
      )}
      {activeViewInspiration === "Study strategies" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Share something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Study strategies"
          instruction="Describe the strategies you are using to make sense of and remember concepts related to the topic, such as an acrostic you created, a song you wrote to remember key ideas, a framework identifying main points, etc."
          firstHeading="Strategies"
          firstValue="Share the strategies you are using to learn about the topic."
          secondHeading="Understanding"
          secondValue="Explain how the strategies you are using help you learn about concepts related to the topic."
          ThirdHeading="Questions"
          ThirdValue="Pose at least three questions about concepts related to the topic you feel confident answering."
        />
      )}

      {activeViewInspiration === "A debate" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Start something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="A debate"
          instruction="Start a debate about some concept(s) related this topic (e.g., Socialism is better than capitalism)."
          firstHeading="Debate Topic"
          firstValue="Create a statement about concepts related to the topic that would inspire informative and healthy discussion."
          secondHeading="Understanding"
          secondValue="Explain your understanding of at least two of the perspectives on the debate topic you chose."
          ThirdHeading="Questions
"
          ThirdValue="Pose at least three questions related to the concept you identified that would encourage further debate."
        />
      )}

      {activeViewInspiration === "An AMA thread" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Start something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="An AMA thread"
          instruction="Start an AMA thread about some concept(s) related this topic about which you are prepared to lead a conversation."
          firstHeading="Ask Me"
          firstValue="Create a statement about concepts related to the topic that you feel confident addressing."
          secondHeading="Understanding"
          secondValue="Explain why you believe you are able to address questions related to the concept."
          ThirdHeading="Questions
"
          ThirdValue="Pose at least three questions about concepts related to the topic that you feel confident addressing."
        />
      )}

      {activeViewInspiration === "A search tree" && (
        <PostingInspirationTemp
          moveBack={() => {
            setShowDetailedInsp(true);
            setActiveDetailedInsp("Start something");
            setViewInspirations(false);
          }}
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="A search tree"
          instruction="Select three concepts related to the topic and share web-based resources connected to each."
          firstHeading="Search"
          firstValue="List three concepts related to the topic and include a link to at least one web-based resource related to each concept."
          secondHeading="Understanding"
          secondValue="Explain how the resources you identified inform your understanding of the concepts related to the topic."
          ThirdHeading="Addition"
          ThirdValue="Recommend three other concepts about which you would like others to investigate and share resources."
        />
      )}
    </div>
  );
};

export default AllPostInspirations;
