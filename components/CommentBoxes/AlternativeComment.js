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

const AlternativeComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorStatePerspectives, setEditorStatePerspectives] = useState(
    EditorState.createEmpty()
  );
  const [editorStateUnder, setEditorStateUnder] = useState(
    EditorState.createEmpty()
  );
  const [editorStateCommonality, setEditorStateCommonality] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Perspectives");
  const [perspectivesValue, setPerspectivesValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");
  const [commonalityValue, setCommonalityValue] = useState("");

  // FIRST
  const onEditorStateChangePerspectives = (editorStatePerspectives) => {
    setEditorStatePerspectives(editorStatePerspectives);
    const perspective = draftToHtml(
      convertToRaw(editorStatePerspectives.getCurrentContent())
    );
    setPerspectivesValue(perspective);
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
  const onEditorStateChangeCommonality = (editorStateCommonality) => {
    setEditorStateCommonality(editorStateCommonality);
    const commonality = draftToHtml(
      convertToRaw(editorStateCommonality.getCurrentContent())
    );
    setCommonalityValue(commonality);
  };
  console.log(perspectivesValue);
  console.log(understandingValue);
  console.log(commonalityValue);

  const toolbarStyle = ` absolute -bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150   !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Compare alternative perspectives about concepts related to the topic."
          setActiveCommentBox={setActiveCommentBox}
        />

        <div className="grid grid-cols-5 ">
          <button
            className={`${
              currentSection === "Perspectives"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Perspectives")}
          >
            Perspectives
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
              currentSection === "Commonality"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Commonality")}
          >
            Commonality
          </button>
        </div>
        {currentSection === "Perspectives" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStatePerspectives}
              onEditorStateChange={onEditorStateChangePerspectives}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mention}
              toolbar={toolbar}
              placeholder="Identify a specific concept related to the topic about which there are at least two alternative perspectives."
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
              placeholder="Explain how each perspective understands the concept."
            />
          </div>
        )}
        {currentSection === "Commonality" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateCommonality}
              onEditorStateChange={onEditorStateChangeCommonality}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Recommend ways that each perspective can benefit from the ideas of the other."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Alternative perspectives"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default AlternativeComment;
