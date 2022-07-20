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

const DebateComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorStateDebateTopic, setEditorStateDebateTopic] = useState(
    EditorState.createEmpty()
  );
  const [editorStateUnder, setEditorStateUnder] = useState(
    EditorState.createEmpty()
  );
  const [editorStateQuestion, setEditorStateQuestion] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Debate Topic");
  const [debateTopicValue, setDebateTopicValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");
  const [questionValue, setQuestionValue] = useState("");

  // FIRST
  const onEditorStateChangeDebateTopic = (editorStateDebateTopic) => {
    setEditorStateDebateTopic(editorStateDebateTopic);
    const debate = draftToHtml(
      convertToRaw(editorStateDebateTopic.getCurrentContent())
    );
    setDebateTopicValue(debate);
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
  console.log(debateTopicValue);
  console.log(understandingValue);
  console.log(questionValue);

  const toolbarStyle = ` absolute bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150   !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Start a debate about some concept(s) related this topic (e.g., Socialism is better than capitalism)."
          setActiveCommentBox={setActiveCommentBox}
        />

        <div className="grid grid-cols-5 ">
          <button
            className={`${
              currentSection === "Debate Topic"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Debate Topic")}
          >
            Debate Topic
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
        {currentSection === "Debate Topic" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateDebateTopic}
              onEditorStateChange={onEditorStateChangeDebateTopic}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mention}
              toolbar={toolbar}
              placeholder="Create a statement about concepts related to the topic that would inspire informative and healthy discussion."
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
              placeholder="Explain your understanding of at least two of the perspectives on the debate topic you chose."
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
              placeholder="Pose at least three questions related to the concept you identified that would encourage further debate."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="A debate"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default DebateComment;
