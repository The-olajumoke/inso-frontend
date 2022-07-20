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

const MemeComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorStateMeme, setEditorStateMeme] = useState(
    EditorState.createEmpty()
  );
  const [editorStateUnder, setEditorStateUnder] = useState(
    EditorState.createEmpty()
  );
  const [editorStateQuestion, setEditorStateQuestion] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Meme");
  const [memeValue, setMemeValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");
  const [questionValue, setQuestionValue] = useState("");

  // FIRST
  const onEditorStateChangeMeme = (editorStateMeme) => {
    setEditorStateMeme(editorStateMeme);
    const meme = draftToHtml(convertToRaw(editorStateMeme.getCurrentContent()));
    setMemeValue(meme);
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
  console.log(memeValue);
  console.log(understandingValue);
  console.log(questionValue);

  const toolbarStyle = ` absolute bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150   !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Create a meme that you believe conveys important ideas about concepts related to the topic."
          setActiveCommentBox={setActiveCommentBox}
        />

        <div className="grid grid-cols-5 ">
          <button
            className={`${
              currentSection === "Meme"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Meme")}
          >
            Meme
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
              currentSection === "Question"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Question")}
          >
            Question
          </button>
        </div>
        {currentSection === "Meme" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateMeme}
              onEditorStateChange={onEditorStateChangeMeme}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mention}
              toolbar={toolbar}
              placeholder="Insert the meme image you created and include a short caption about the meme."
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
              placeholder="Explain how you believe the meme enhances understanding of the topic."
            />
          </div>
        )}
        {currentSection === "Question" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateQuestion}
              onEditorStateChange={onEditorStateChangeQuestion}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Pose a question that would encourage further discussion about the ideas conveyed in your creation."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="A meme"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default MemeComment;
