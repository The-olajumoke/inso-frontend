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

const DirectlyComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorStateSummary, setEditorStateSummary] = useState(
    EditorState.createEmpty()
  );
  const [editorStateAnswer, setEditorStateAnswer] = useState(
    EditorState.createEmpty()
  );
  const [editorStateSupport, setEditorStateSupport] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Summary");
  const [summaryValue, setSummaryValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");
  const [supportValue, setSupportValue] = useState("");

  // FIRST
  const onEditorStateChangeSummary = (editorStateSummary) => {
    setEditorStateSummary(editorStateSummary);
    const summary = draftToHtml(
      convertToRaw(editorStateSummary.getCurrentContent())
    );
    setSummaryValue(summary);
  };

  //   SECOND
  const onEditorStateChangeAnswer = (editorStateAnswer) => {
    setEditorStateAnswer(editorStateAnswer);
    const answer = draftToHtml(
      convertToRaw(editorStateAnswer.getCurrentContent())
    );
    setAnswerValue(answer);
  };

  //   THIRD
  const onEditorStateChangeSupport = (editorStateSupport) => {
    setEditorStateSupport(editorStateSupport);
    const support = draftToHtml(
      convertToRaw(editorStateSupport.getCurrentContent())
    );
    setSupportValue(support);
  };
  console.log(summaryValue);
  console.log(answerValue);
  console.log(supportValue);

  const toolbarStyle = ` absolute bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150   !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Answer questions asked."
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
              currentSection === "Answer"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Answer")}
          >
            Answer
          </button>
          <button className="border-b-2 border-other-disabled"></button>
          <button
            className={`${
              currentSection === "Support"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Support")}
          >
            Support
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
        {currentSection === "Answer" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateAnswer}
              onEditorStateChange={onEditorStateChangeAnswer}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Address the questions posed in the post."
            />
          </div>
        )}
        {currentSection === "Support" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateSupport}
              onEditorStateChange={onEditorStateChangeSupport}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Paste the link to at least one web-based resource that supports your response and summarize the ideas in the resource."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Directly"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default DirectlyComment;
