import React, { useState } from "react";
import Image from "next/image";
import ShowInspirations from "../ShowInspirations";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { mention } from "@/utils/mentions";
import { toolbar } from "@/utils/toolbar";
import CommentBoxHeader from "../CommentBoxHeader";
const Editor = dynamic(
  import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

const AskForClarifComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorStateSummary, setEditorStateSummary] = useState(
    EditorState.createEmpty()
  );
  const [editorStateClarification, setEditorStateClarification] = useState(
    EditorState.createEmpty()
  );
  const [editorStateInsights, setEditorStateInsights] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Summary");
  const [summaryValue, setSummaryValue] = useState("");
  const [clarificationValue, setClarificationValue] = useState("");
  const [insightsValue, setInsightsValue] = useState("");

  // FIRST
  const onEditorStateChangeSummary = (editorStateSummary) => {
    setEditorStateSummary(editorStateSummary);
    const summary = draftToHtml(
      convertToRaw(editorStateSummary.getCurrentContent())
    );
    setSummaryValue(summary);
  };

  //   SECOND
  const onEditorStateChangeClarification = (editorStateClarification) => {
    setEditorStateClarification(editorStateClarification);
    const clarif = draftToHtml(
      convertToRaw(editorStateClarification.getCurrentContent())
    );
    setClarificationValue(clarif);
  };

  //   THIRD
  const onEditorStateChangeInsights = (editorStateInsights) => {
    setEditorStateInsights(editorStateInsights);
    const outcome = draftToHtml(
      convertToRaw(editorStateInsights.getCurrentContent())
    );
    setInsightsValue(outcome);
  };
  console.log(summaryValue);
  console.log(clarificationValue);
  console.log(insightsValue);

  const toolbarStyle = ` absolute bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150   !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Pose questions to increase understanding about specific concepts."
          setActiveCommentBox={setActiveCommentBox}
        />

        <div className="grid grid-cols-5 ">
          <button
            className={`${
              currentSection === "Summary"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Summary")}
          >
            Summary
          </button>
          <button className="border-b-2 border-other-disabled"></button>
          <button
            className={`${
              currentSection === "Clarification"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Clarification")}
          >
            Clarification
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
        {currentSection === "Summary" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateSummary}
              onEditorStateChange={onEditorStateChangeSummary}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mention}
              toolbar={toolbar}
              placeholder="Summarize your understanding of the main points to which you are responding."
            />
          </div>
        )}
        {currentSection === "Clarification" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateClarification}
              onEditorStateChange={onEditorStateChangeClarification}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Pose at least three questions that would encourage further discussion about concepts in the post."
            />
          </div>
        )}
        {currentSection === "Insights" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateInsights}
              onEditorStateChange={onEditorStateChangeInsights}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Describe the insights you would hope to gain through a discussion about the questions you posed."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="For Clarification"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default AskForClarifComment;
