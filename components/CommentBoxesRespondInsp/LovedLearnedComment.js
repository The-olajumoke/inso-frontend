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

const LovedLearnedComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorStateSummary, setEditorStateSummary] = useState(
    EditorState.createEmpty()
  );
  const [editorStateLoved, setEditorStateLoved] = useState(
    EditorState.createEmpty()
  );
  const [editorStateLearned, setEditorStateLearned] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Summary");
  const [summaryValue, setSummaryValue] = useState("");
  const [lovedValue, setLovedValue] = useState("");
  const [learnedValue, setLearnedValue] = useState("");

  // FIRST
  const onEditorStateChangeSummary = (editorStateSummary) => {
    setEditorStateSummary(editorStateSummary);
    const summary = draftToHtml(
      convertToRaw(editorStateSummary.getCurrentContent())
    );
    setSummaryValue(summary);
  };

  //   SECOND
  const onEditorStateChangeLoved = (editorStateLoved) => {
    setEditorStateLoved(editorStateLoved);
    const loved = draftToHtml(
      convertToRaw(editorStateLoved.getCurrentContent())
    );
    setLovedValue(loved);
  };

  //   THIRD
  const onEditorStateChangeLearned = (editorStateLearned) => {
    setEditorStateLearned(editorStateLearned);
    const learn = draftToHtml(
      convertToRaw(editorStateLearned.getCurrentContent())
    );
    setLearnedValue(learn);
  };
  console.log(summaryValue);
  console.log(lovedValue);
  console.log(learnedValue);

  const toolbarStyle = ` absolute bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150   !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Evaluate the post based on what you loved and what you learned."
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
              currentSection === "Loved"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Loved")}
          >
            Loved
          </button>
          <button className="border-b-2 border-other-disabled"></button>
          <button
            className={`${
              currentSection === "Learned"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Learned")}
          >
            Learned
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
        {currentSection === "Loved" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateLoved}
              onEditorStateChange={onEditorStateChangeLoved}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Identify one aspect of the post that you loved."
            />
          </div>
        )}
        {currentSection === "Learned" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateLearned}
              onEditorStateChange={onEditorStateChangeLearned}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Explain how the ideas in the post informed your understanding of the topic."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Loved, Learned"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default LovedLearnedComment;
