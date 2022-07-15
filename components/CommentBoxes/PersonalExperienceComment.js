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

const PersonalExperienceComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorStateExperience, setEditorStateExperience] = useState(
    EditorState.createEmpty()
  );
  const [editorStateUnder, setEditorStateUnder] = useState(
    EditorState.createEmpty()
  );
  const [editorStateReflection, setEditorStateReflection] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Experience");
  const [experienceValue, setExperienceValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");
  const [reflectionValue, setReflectionValue] = useState("");

  // FIRST
  const onEditorStateChangeExperience = (editorStateExperience) => {
    setEditorStateExperience(editorStateExperience);
    const experience = draftToHtml(
      convertToRaw(editorStateExperience.getCurrentContent())
    );
    setExperienceValue(experience);
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
  const onEditorStateChangeReflection = (editorStateReflection) => {
    setEditorStateReflection(editorStateReflection);
    const reflection = draftToHtml(
      convertToRaw(editorStateReflection.getCurrentContent())
    );
    setReflectionValue(reflection);
  };
  console.log(experienceValue);
  console.log(understandingValue);
  console.log(reflectionValue);

  const toolbarStyle = ` absolute -bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-200  !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Share a personal experience you have had with concepts related to the topic."
          setActiveCommentBox={setActiveCommentBox}
        />

        <div className="grid grid-cols-5 ">
          <button
            className={`${
              currentSection === "Experience"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Experience")}
          >
            Experience
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
              currentSection === "Reflection"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Reflection")}
          >
            Reflection
          </button>
        </div>
        {currentSection === "Experience" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateExperience}
              onEditorStateChange={onEditorStateChangeExperience}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mention}
              toolbar={toolbar}
              placeholder="Describe the experience(s) you have had with specific concepts related to the topic."
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
              placeholder="Explain how this experience has informed your understanding of the concepts."
            />
          </div>
        )}
        {currentSection === "Reflection" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateReflection}
              onEditorStateChange={onEditorStateChangeReflection}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Generalize lessons you learned during this experience to other experiences you might have."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Personal experience"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default PersonalExperienceComment;
