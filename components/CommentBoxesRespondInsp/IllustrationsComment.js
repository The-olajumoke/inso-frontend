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

const IllustrationsComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorStateSummary, setEditorStateSummary] = useState(
    EditorState.createEmpty()
  );
  const [editorStateIllustration, setEditorStateIllustration] = useState(
    EditorState.createEmpty()
  );
  const [editorStateContinue, setEditorStateContinue] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Summary");
  const [summaryValue, setSummaryValue] = useState("");
  const [illustrationValue, setIllustrationValue] = useState("");
  const [continueValue, setContinueValue] = useState("");

  // FIRST
  const onEditorStateChangeSummary = (editorStateSummary) => {
    setEditorStateSummary(editorStateSummary);
    const summary = draftToHtml(
      convertToRaw(editorStateSummary.getCurrentContent())
    );
    setSummaryValue(summary);
  };

  //   SECOND
  const onEditorStateChangeIllustration = (editorStateIllustration) => {
    setEditorStateIllustration(editorStateIllustration);
    const illustration = draftToHtml(
      convertToRaw(editorStateIllustration.getCurrentContent())
    );
    setIllustrationValue(illustration);
  };

  //   THIRD
  const onEditorStateChangeContinue = (editorStateContinue) => {
    setEditorStateContinue(editorStateContinue);
    const conti = draftToHtml(
      convertToRaw(editorStateContinue.getCurrentContent())
    );
    setContinueValue(conti);
  };
  console.log(summaryValue);
  console.log(illustrationValue);
  console.log(continueValue);

  const toolbarStyle = ` absolute bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150   !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Illustrate concepts in the post by including media such as a video, meme, newstory, or some other resource you located or created."
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
              currentSection === "Illustration"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Illustration")}
          >
            Illustration
          </button>
          <button className="border-b-2 border-other-disabled"></button>
          <button
            className={`${
              currentSection === "Continue"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Continue")}
          >
            Continue
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
        {currentSection === "Illustration" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateIllustration}
              onEditorStateChange={onEditorStateChangeIllustration}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Paste a copy of (or link to) media you located or created that helps illustrate the ideas made in the post."
            />
          </div>
        )}
        {currentSection === "Continue" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateContinue}
              onEditorStateChange={onEditorStateChangeContinue}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Continue the discussion by asking more questions or adding new ideas, perspectives, or resources."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Illustrations"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default IllustrationsComment;
