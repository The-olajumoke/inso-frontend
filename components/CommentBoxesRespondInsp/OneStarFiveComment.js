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

const OneStarFiveComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorStateSummary, setEditorStateSummary] = useState(
    EditorState.createEmpty()
  );
  const [editorStateOneStar, setEditorStateOneStar] = useState(
    EditorState.createEmpty()
  );
  const [editorStateFiveStars, setEditorStateFiveStars] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Summary");
  const [summaryValue, setSummaryValue] = useState("");
  const [oneStarValue, setOneStarValue] = useState("");
  const [fiveStarsValue, setFiveStarsValue] = useState("");

  // FIRST
  const onEditorStateChangeSummary = (editorStateSummary) => {
    setEditorStateSummary(editorStateSummary);
    const summary = draftToHtml(
      convertToRaw(editorStateSummary.getCurrentContent())
    );
    setSummaryValue(summary);
  };

  //   SECOND
  const onEditorStateChangeOneStar = (editorStateOneStar) => {
    setEditorStateOneStar(editorStateOneStar);
    const star = draftToHtml(
      convertToRaw(editorStateOneStar.getCurrentContent())
    );
    setOneStarValue(star);
  };

  //   THIRD
  const onEditorStateChangeFiveStars = (editorStateFiveStars) => {
    setEditorStateFiveStars(editorStateFiveStars);
    const star = draftToHtml(
      convertToRaw(editorStateFiveStars.getCurrentContent())
    );
    setFiveStarsValue(star);
  };
  console.log(summaryValue);
  console.log(oneStarValue);
  console.log(fiveStarsValue);

  const toolbarStyle = ` absolute bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150   !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Evaluate the post based on a 5-star rating."
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
              currentSection === "1 Star"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("1 Star")}
          >
            1 Star
          </button>
          <button className="border-b-2 border-other-disabled"></button>
          <button
            className={`${
              currentSection === "5 Stars"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("5 Stars")}
          >
            5 Stars
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
        {currentSection === "1 Star" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateOneStar}
              onEditorStateChange={onEditorStateChangeOneStar}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Identify one aspect of the post that you would rate as 1-star and justify your rating."
            />
          </div>
        )}
        {currentSection === "5 Stars" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateFiveStars}
              onEditorStateChange={onEditorStateChangeFiveStars}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Identify one aspect of the post that you would rate as 5-star and justify your rating."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="1 Star 5 Stars"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default OneStarFiveComment;
