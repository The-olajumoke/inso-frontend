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

const CriticalReviewComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorStateSummary, setEditorStateSummary] = useState(
    EditorState.createEmpty()
  );
  const [editorStateMaximize, setEditorStateMaximize] = useState(
    EditorState.createEmpty()
  );
  const [editorStateDevelop, setEditorStateDevelop] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Summary");
  const [summaryValue, setSummaryValue] = useState("");
  const [maximizeValue, setMaximizeValue] = useState("");
  const [developValue, setDevelopValue] = useState("");

  // FIRST
  const onEditorStateChangeSummary = (editorStateSummary) => {
    setEditorStateSummary(editorStateSummary);
    const summary = draftToHtml(
      convertToRaw(editorStateSummary.getCurrentContent())
    );
    setSummaryValue(summary);
  };

  //   SECOND
  const onEditorStateChangeMaximize = (editorStateMaximize) => {
    setEditorStateMaximize(editorStateMaximize);
    const max = draftToHtml(
      convertToRaw(editorStateMaximize.getCurrentContent())
    );
    setMaximizeValue(max);
  };

  //   THIRD
  const onEditorStateChangeDevelop = (editorStateDevelop) => {
    setEditorStateDevelop(editorStateDevelop);
    const dev = draftToHtml(
      convertToRaw(editorStateDevelop.getCurrentContent())
    );
    setDevelopValue(dev);
  };
  console.log(summaryValue);
  console.log(maximizeValue);
  console.log(developValue);

  const toolbarStyle = ` absolute bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150   !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Evaluate the strenghts and areas for growth in the post."
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
              currentSection === "Maximize"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Maximize")}
          >
            Maximize
          </button>
          <button className="border-b-2 border-other-disabled"></button>
          <button
            className={`${
              currentSection === "Develop"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Develop")}
          >
            Develop
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
        {currentSection === "Maximize" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateMaximize}
              onEditorStateChange={onEditorStateChangeMaximize}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Identify one aspect of the post that was informative."
            />
          </div>
        )}
        {currentSection === "Develop" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateDevelop}
              onEditorStateChange={onEditorStateChangeDevelop}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Identify one aspect of the post that needs further development and recommend specific stteps for improvement."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Critical Review"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default CriticalReviewComment;
