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

const CreateMediaComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorStateMedia, setEditorStateMedia] = useState(
    EditorState.createEmpty()
  );
  const [editorStateUnder, setEditorStateUnder] = useState(
    EditorState.createEmpty()
  );
  const [editorStateQuestion, setEditorStateQuestion] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Media");
  const [mediaValue, setMediaValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");
  const [questionValue, setQuestionValue] = useState("");

  // FIRST
  const onEditorStateChangeMedia = (editorStateMedia) => {
    setEditorStateMedia(editorStateMedia);
    const media = draftToHtml(
      convertToRaw(editorStateMedia.getCurrentContent())
    );
    setMediaValue(media);
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
  console.log(mediaValue);
  console.log(understandingValue);
  console.log(questionValue);

  const toolbarStyle = ` absolute bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150   !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Create some form of media, such as a podcast, poem, webpage, video, song, graphic, etc. that conveys your ideas about concepts related to the topic."
          setActiveCommentBox={setActiveCommentBox}
        />

        <div className="grid grid-cols-5 ">
          <button
            className={`${
              currentSection === "Media"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Media")}
          >
            Media
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
        {currentSection === "Media" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateMedia}
              onEditorStateChange={onEditorStateChangeMedia}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mention}
              toolbar={toolbar}
              placeholder="Insert a copy of or a link to the media you created."
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
              placeholder="Explain what you created and how your creation conveys important ideas about concepts related to the topic."
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
        title="A media"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default CreateMediaComment;
