import React, { useState } from "react";
import Image from "next/image";
import ShowInspirations from "../ShowInspirations";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import CommentBoxHeader from "../CommentBoxHeader";
import { mention } from "@/utils/mentions";
import { toolbar } from "@/utils/toolbar";

const Editor = dynamic(
  import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

const AskForClarityComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorStateQuest, setEditorStateQuest] = useState(
    EditorState.createEmpty()
  );
  const [editorStateUnder, setEditorStateUnder] = useState(
    EditorState.createEmpty()
  );
  const [editorStateInsights, setEditorStateInsights] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Questions");
  const [questionsValue, setQuestionsValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");
  const [insightsValue, setInsightsValue] = useState("");

  const onEditorStateChangeQuestions = (editorStateQuest) => {
    setEditorStateQuest(editorStateQuest);
    const question = draftToHtml(
      convertToRaw(editorStateQuest.getCurrentContent())
    );
    setQuestionsValue(question);
  };
  const onEditorStateChangeUnderstanding = (editorStateUnder) => {
    setEditorStateUnder(editorStateUnder);
    const understanding = draftToHtml(
      convertToRaw(editorStateUnder.getCurrentContent())
    );
    setUnderstandingValue(understanding);
  };
  const onEditorStateChangeInsights = (editorStateInsights) => {
    setEditorStateInsights(editorStateInsights);
    const insights = draftToHtml(
      convertToRaw(editorStateInsights.getCurrentContent())
    );
    setInsightsValue(insights);
  };

  const toolbarStyle = ` absolute -bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-200  !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white py-20 px-29 rounded-t-lg">
        <CommentBoxHeader
          instruction="  Pose questions about the topic that would help you gain a better
              understanding of important concepts."
          setActiveCommentBox={setActiveCommentBox}
        />

        <div className="grid grid-cols-5 ">
          <button
            className={`${
              currentSection === "Questions"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Questions")}
          >
            Questions
          </button>
          <button className="border-b-2 border-other-disabled"></button>
          <button
            className={`${
              currentSection === "Understanding"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Understanding")}
          >
            Understanding
          </button>
          <button className="border-b-2 border-other-disabled"></button>
          <button
            className={`${
              currentSection === "Insights"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Insights")}
          >
            Insights
          </button>
        </div>
        {currentSection === "Questions" && (
          <div className=" h-200 bg-white-white ">
            <Editor
              editorState={editorStateQuest}
              onEditorStateChange={onEditorStateChangeQuestions}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mention}
              toolbar={toolbar}
              placeholder="Pose three questions about specific aspects of the topic that would help you gain a better understanding."
            />
          </div>
        )}
        {currentSection === "Understanding" && (
          <div className=" h-200 bg-white-white ">
            <Editor
              editorState={editorStateUnder}
              onEditorStateChange={onEditorStateChangeUnderstanding}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mention}
              toolbar={toolbar}
              placeholder="Explain your current understanding of the topic and the specific aspects about which you would like further explanation."
            />
          </div>
        )}
        {currentSection === "Insights" && (
          <div className=" h-200 bg-white-white ">
            <Editor
              editorState={editorStateInsights}
              onEditorStateChange={onEditorStateChangeInsights}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mention}
              toolbar={toolbar}
              placeholder="Describe the insights you would hope to gain through a discussion about your questions"
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Ask for clarity"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default AskForClarityComment;
