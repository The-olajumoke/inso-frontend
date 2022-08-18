import React, { useState } from "react";
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

const AMAThreadComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorStateAskMe, setEditorStateAskMe] = useState(
    EditorState.createEmpty()
  );
  const [editorStateUnder, setEditorStateUnder] = useState(
    EditorState.createEmpty()
  );
  const [editorStateQuestion, setEditorStateQuestion] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Ask Me");
  const [askMeValue, setAskMeValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");
  const [questionValue, setQuestionValue] = useState("");

  // FIRST
  const onEditorStateChangeAskMe = (editorStateAskMe) => {
    setEditorStateAskMe(editorStateAskMe);
    const ask = draftToHtml(convertToRaw(editorStateAskMe.getCurrentContent()));
    setAskMeValue(ask);
  };

  //   SECOND
  const onEditorStateChangeUnderstanding = (editorStateUnder) => {
    setEditorStateUnder(editorStateUnder);
    const understanding = draftToHtml(
      convertToRaw(editorStateUnder.getCurrentContent())
    );
    setUnderstandingValue(understanding);
  };

  //   THIRD
  const onEditorStateChangeQuestion = (editorStateQuestion) => {
    setEditorStateQuestion(editorStateQuestion);
    const question = draftToHtml(
      convertToRaw(editorStateQuestion.getCurrentContent())
    );
    setQuestionValue(question);
  };
  console.log(askMeValue);
  console.log(understandingValue);
  console.log(questionValue);

  const toolbarStyle = `absolute bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150   !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Start an AMA thread about some concept(s) related this topic about which you are prepared to lead a conversation."
          setActiveCommentBox={setActiveCommentBox}
        />

        <div className="grid grid-cols-5 ">
          <button
            className={`${
              currentSection === "Ask Me"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Ask Me")}
          >
            Ask Me
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
              currentSection === "Questions"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Questions")}
          >
            Questions
          </button>
        </div>
        {currentSection === "Ask Me" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateAskMe}
              onEditorStateChange={onEditorStateChangeAskMe}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mention}
              toolbar={toolbar}
              placeholder="Create a statement about concepts related to the topic that you feel confident addressing."
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
              toolbar={toolbar}
              mention={mention}
              placeholder="Explain why you believe you are able to address questions related to the concept."
            />
          </div>
        )}
        {currentSection === "Questions" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateQuestion}
              onEditorStateChange={onEditorStateChangeQuestion}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Pose at least three questions about concepts related to the topic that you feel confident addressing."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="An AMA thread"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default AMAThreadComment;
