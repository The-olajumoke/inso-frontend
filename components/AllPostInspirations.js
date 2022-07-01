import React from "react";
import PostingInspirationTemp from "./PostingInspirationTemp";

const AllPostInspirations = ({
  activeViewInspiration,
  setViewInspirations,
  setActiveViewInspiration,
}) => {
  return (
    <div>
      {activeViewInspiration === "Resources" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Resources"
          instruction="Share at least one web-based resource related to some concept(s) from this topic.
"
          firstHeading="Resource"
          firstValue="Paste a link to the resource(s)."
          secondHeading="Summary
"
          secondValue="Summarize the resource(s)
"
          ThirdHeading="Connections
"
          ThirdValue="Identify the concept(s) in the resource(s) and explain how those concepts relate to the main ideas conveyed by the resource.
"
        />
      )}
      {activeViewInspiration === "Image" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Image"
          instruction="Share an image that you believe conveys important ideas related to some concept(s) about this topic.
"
          firstHeading="Ideas"
          firstValue="Identify the ideas you believe are conveyed by the image you selected."
          secondHeading="Connections
"
          secondValue="Explain why you believe the image effectively conveys some concept(s) related to this topoc.
"
          ThirdHeading="Image
"
          ThirdValue="Insert a copy of or link to the image you selected.
"
        />
      )}
      {activeViewInspiration === "News story" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="News story"
          instruction="Identify a recent web-based news story that is connected to some concept(s) from this topic.
"
          firstHeading="News story"
          firstValue="Paste a link to a news story that you believe is connected to some concept(s) from this topic."
          secondHeading="Summary
"
          secondValue="Summarize the news story.
"
          ThirdHeading="Connections
"
          ThirdValue="Explain how the web-based news story is connected to the concept(s) from this topic.
"
        />
      )}
      {activeViewInspiration === "Quote" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Quotes"
          instruction="Identify a quote from an assigned reading or resource or a resource you identified that captures important information about some concept(s) from this topic
"
          firstHeading="Quote"
          firstValue="Paste a quote from an assigned resource or a resource you identified that captures important information about some concept(s) from this topic."
          secondHeading="Explanation
"
          secondValue="Explain why you believe the quote is meaningful, specifically as it relates to some concept(s) from this topic..
"
          ThirdHeading="Question
"
          ThirdValue="Ask one question that this quote has made you think about or that you believe others should consider..
"
        />
      )}
      {activeViewInspiration === "Between course concepts" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Connections"
          instruction="Explain how some concept(s) from this topic relate to some other concept(s) from this course.
"
          firstHeading="Concepts"
          firstValue="Identify some concept(s) from this topic that you believe connect with a concept or concepts from other lessons."
          secondHeading="Connections
"
          secondValue="Describe the relationship between the concept(s) you identified.
"
          ThirdHeading="Implications
"
          ThirdValue="Explain how this relationship can help you and others better understand the concept(s).
"
        />
      )}

      {activeViewInspiration === "With concepts from another course" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Interdiscipline"
          instruction="Describe connections you are seeing between concepts from this topic and concepts you have learned about an entirely different topic.
"
          firstHeading="Connections"
          firstValue="Identify connections you are seeing between concepts from this topic and concepts from an entirely different topic."
          secondHeading="Explanation
"
          secondValue="Explain how the concept(s) from this topic inform or are informed by the concept(s) from the other topic(s).
"
          ThirdHeading="New Ideas
"
          ThirdValue="Describe new ideas you are having because of the connections you identified.
"
        />
      )}
      {activeViewInspiration === "To a personal experience you had" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Experience"
          instruction="Share a personal experience you have had with some concept(s) from this topic."
          firstHeading="Idea"
          firstValue="Identify the concept(s) with which you have had a personal experience
"
          secondHeading="Experience
"
          secondValue="Describe the experience you have had with the concept(s).
"
          ThirdHeading="Understanding
"
          ThirdValue="Explain how this experience has informed your understanding of the concept(s).
"
        />
      )}
      {activeViewInspiration === "To applications in the real world" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Application
"
          instruction="Explain how some concept(s) about this topic could apply to real-world situations.
"
          firstHeading="Concepts
"
          firstValue="Identify the concept(s) from this topic that are interesting or relevant to you.

"
          secondHeading="Real-world

"
          secondValue="Identify a specific real-world scenario that could be informed by, or could inform, the concept(s) you identified.
"
          ThirdHeading="Application"
          ThirdValue="Explain how the concept(s) relates to the real-world scenario you identified.
.
"
        />
      )}
      {activeViewInspiration === "Legal" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Legal

"
          instruction="Identify some concept(s) from this topic that could have legal implications.

"
          firstHeading="Concepts
"
          firstValue="Identify the concept(s) from this topic that you believe could have legal implications.


"
          secondHeading="Legal Implications


"
          secondValue="Describe the legal issue(s) that you believe the concept(s) could have.

"
          ThirdHeading="Navigating
"
          ThirdValue="Explain the ways you could navigate the concept(s) to ensure adherence to legal principles.

.
"
        />
      )}
      {activeViewInspiration === "Ethical" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Ethical

"
          instruction="Identify some concept(s) from this topic that could have ethical implications.


"
          firstHeading="Concepts
"
          firstValue="Identify the concept(s) from this topic that you believe could have ethical implications.
.


"
          secondHeading="Ethical Implications



"
          secondValue="Describe the ethical issue(s) that you believe the concept(s) could have.
.

"
          ThirdHeading="Navigating
"
          ThirdValue="Explain the ways you could navigate the concept(s) to ensure adherence to ethical priorities.
.

.
"
        />
      )}
      {activeViewInspiration === "Other real-world" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Real-world


"
          instruction="Identify some concept(s) from this topic that could have implications in real-world situations.



"
          firstHeading="Concepts
"
          firstValue="Identify the concept(s) from this topic that you believe could have real-world implications.

.


"
          secondHeading="Real World Implications




"
          secondValue="Describe the real world implication(s) that you believe the concept(s) could have.

.

"
          ThirdHeading="Navigating
"
          ThirdValue="Explain the ways you could navigate the concept(s) in the real world.

.

.
"
        />
      )}
      {activeViewInspiration === "Ask for clarity" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Clarity



"
          instruction="Identify the concept(s) from this topic about which you would like further clarity.




"
          firstHeading="Concepts
"
          firstValue="Identify the concept(s) from this topic about which you would like further clarity.


.


"
          secondHeading="Explanation





"
          secondValue="Explain where you believe you are having trouble fully grasping these ideas
.

.

"
          ThirdHeading="Questions

"
          ThirdValue="Pose at least three questions related to the ideas or questions shared in the post that would encourage further explanation and discussion.


.

.
"
        />
      )}
      {activeViewInspiration === "Share study strategies" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Strategies"
          instruction="Describe the strategies you are using to make sense of and remember concepts related to this topic"
          firstHeading="Concepts"
          firstValue="Identify the concept(s) related to this topic on which you could apply some study strategies.
"
          secondHeading="Strategies
"
          secondValue="Share the strategies you are using to make sense and/or remember the concept(s) (e.g., explain your thinking; or share a diagram you drew, an acrostic you created, a rhyme you wrote, an image you think about, etc.)
"
          ThirdHeading="Benefit
"
          ThirdValue="Explain how others could benefit from your strategies.
"
        />
      )}
      {activeViewInspiration === "Compare your perspective" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Perspectives
"
          instruction="Compare your perspective with perspectives someone else might have about some concept(s) from this topic."
          firstHeading="Your Perspective"
          firstValue="Summarize the perspective you have about some concept(s) from this topic.
"
          secondHeading="A Different Perspective
"
          secondValue="Summarize a different perspective someone might have about the concept(s).
"
          ThirdHeading="Commonality
"
          ThirdValue="Explain how both perspectives could be merged to find commonality between them.
"
        />
      )}
      {activeViewInspiration === "Reflect" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Reflection

"
          instruction="Explain how some concept(s) from this topic are informing the way you think about this topic or other ideas that are important to you.
"
          firstHeading="Concepts
"
          firstValue="Identify the concept(s) from this topic that are informing your thinking about other ideas.

"
          secondHeading="Exploration

"
          secondValue="Explain how the concept(s) are informing the way you think about other ideas that are important to you.

"
          ThirdHeading="Action
"
          ThirdValue="Describe one practical outcome for you that has resulted from this new way of thinking
"
        />
      )}
      {activeViewInspiration === "Meme" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Meme

"
          instruction="Create a meme that you believe conveys important ideas related to some concept(s) about this topic.
"
          firstHeading="Connections

"
          firstValue="Explain how the meme connects to some concept(s) related to this topic.

"
          secondHeading="Meme Caption

"
          secondValue="Create a caption for the meme image.
"
          ThirdHeading="Meme Image
"
          ThirdValue="Insert the meme image.
"
        />
      )}
      {activeViewInspiration === "Graphic organiser" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Graphic Organizer

"
          instruction="Share a graphic organizer you created that helps you remember some concept(s) related to this topic.
"
          firstHeading="Elements

"
          firstValue="Identify the concept(s) you included in the graphic organizer.

"
          secondHeading="Remember

"
          secondValue="Explain how the graphic organizer helps you remember the concept(s).
"
          ThirdHeading="Image
"
          ThirdValue="Insert an image of or a link to the graphic organizer you created.
"
        />
      )}
      {activeViewInspiration === "piece of media" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Created Media

"
          instruction="Create some form of media (e.g., podcast, poem, webpage, video, song, graphic, etc.) that conveys your ideas about some concept(s) related to this topic.
"
          firstHeading="Overview

"
          firstValue="Explain what you created and how you believe your creation conveys important ideas about some concept(s) related to this topic.

"
          secondHeading="Elements

"
          secondValue="Identify the concept(s) you included in the media creation.
"
          ThirdHeading="Media Creation
"
          ThirdValue="Insert a copy or or link to the media you created.
"
        />
      )}
      {activeViewInspiration === "Debate" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="Debate


"
          instruction="Start a debate about some concept(s) related this topic.
"
          firstHeading="Debate Topic

"
          firstValue="Create a statement about some concept(s) from this topic that would inspire healthy controversy and conversation (e.g., Socialism is better than capitalism)

"
          secondHeading="Outcome

"
          secondValue="Describe the outcome you hope to achieve from the debate you are starting.
"
          ThirdHeading="Questions
"
          ThirdValue="Pose at least three questions related to the concept(s) you identified that would encourage further discussion.
"
        />
      )}
      {activeViewInspiration === "AMA Thread" && (
        <PostingInspirationTemp
          setViewInspirations={setViewInspirations}
          setActiveViewInspiration={setActiveViewInspiration}
          title="AMA"
          instruction="Start an AMA thread about some concept(s) related this topic about which you are prepared to lead a conversation.
"
          firstHeading="AMA Topic

"
          firstValue="Identify some concept(s) from this topic that you believe you have advanced knowledge on and can answer questions about.

"
          secondHeading="Expertise

"
          secondValue="Explain why you believe you are able to address questions related to the concept(s).
"
          ThirdHeading="Questions
"
          ThirdValue="Pose at least three questions related to the concept(s) you identified that would encourage further discussion.
"
        />
      )}
    </div>
  );
};

export default AllPostInspirations;
