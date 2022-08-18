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

const AskQuestionsComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorStateUnder, setEditorStateUnder] = useState(
    EditorState.createEmpty()
  );
  const [editorStateOutcome, setEditorStateOutcome] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Questions");
  const [questionsValue, setQuestionsValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");
  const [outcomeValue, setOutcomeValue] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const question = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setQuestionsValue(question);
  };
  const onEditorStateChangeUnderstanding = (editorStateUnder) => {
    setEditorStateUnder(editorStateUnder);
    const understanding = draftToHtml(
      convertToRaw(editorStateUnder.getCurrentContent())
    );
    setUnderstandingValue(understanding);
  };
  const onEditorStateChangeOutcome = (editorStateOutcome) => {
    setEditorStateOutcome(editorStateOutcome);
    const outcome = draftToHtml(
      convertToRaw(editorStateOutcome.getCurrentContent())
    );
    setOutcomeValue(outcome);
  };

  const toolbarStyle = ` absolute bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150  !text-md`;
  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white py-20 px-29 rounded-t-lg">
        <CommentBoxHeader
          instruction="  Pose questions to encourage discussion about the topic."
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
              currentSection === "Outcomes"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Outcomes")}
          >
            Outcomes
          </button>
        </div>
        {currentSection === "Questions" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mention}
              toolbar={toolbar}
              placeholder="Pose three questions about the topic that would encourage further discussion."
            />
          </div>
        )}
        {currentSection === "Understanding" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateUnder}
              onEditorStateChange={onEditorStateChangeUnderstanding}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mention}
              toolbar={toolbar}
              placeholder="Explain your current understanding of the topic."
            />
          </div>
        )}
        {currentSection === "Outcomes" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateOutcome}
              onEditorStateChange={onEditorStateChangeOutcome}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mention}
              toolbar={toolbar}
              placeholder="Recommend three outcomes you would hope to see from discussion about your questions."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Ask questions"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default AskQuestionsComment;
