import React, { useState, useEffect } from "react";
import ShowInspirations from "../ShowInspirations";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { toolbar } from "@/utils/toolbar";
import CommentBoxHeader from "../CommentBoxHeader";
const Editor = dynamic(
  import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

const StudyStrategiesComment = ({
  setActiveCommentBox,
  togglePostInsp,
  discId,
  replyingId,
  postSuccess,
  participants,
  activePostInspId,
  setActivePostInspId,
  handleCreatePost,
}) => {
  const [editorStateStrategies, setEditorStateStrategies] = useState(
    EditorState.createEmpty()
  );
  const [editorStateUnder, setEditorStateUnder] = useState(
    EditorState.createEmpty()
  );
  const [editorStateQuestion, setEditorStateQuestion] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Strategies");
  const [strategiesValue, setStrategiesValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");
  const [questionValue, setQuestionValue] = useState("");
  const [mentionsArray, setMentionsArray] = useState([]);
  // FIRST
  const onEditorStateChangeStrategies = (editorStateStrategies) => {
    setEditorStateStrategies(editorStateStrategies);
    const strategies = draftToHtml(
      convertToRaw(editorStateStrategies.getCurrentContent())
    );
    setStrategiesValue(strategies);
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

  useEffect(() => {
    if (participants.length) {
      const menti = participants.map((part) => {
        return {
          text: part?.username,
          value: part?.username,
          url: part?.username,
        };
      });
      setMentionsArray(menti);
    }
  }, [participants]);
  useEffect(() => {
    if (postSuccess == true) {
      setEditorStateStrategies(EditorState.createEmpty());
      setEditorStateUnder(EditorState.createEmpty());
      setEditorStateQuestion(EditorState.createEmpty());
      setActiveCommentBox("noInspiration");
    }
  }, [postSuccess]);

  const handlePost = () => {
    if (replyingId.id !== "") {
      const body = {
        draft: false,
        comment_for: replyingId.id,
        post: {
          post: ``,
          outline: {
            Strategies: `${strategiesValue}`,
            Understanding: `${understandingValue}`,
            Question: `${questionValue}`,
          },
        },
        post_inspiration: `${activePostInspId}`,
      };
      handleCreatePost(discId, body);
    } else {
      const body = {
        draft: false,
        // comment_for: replyingId.id,
        post: {
          post: ``,
          outline: {
            Strategies: `${strategiesValue}`,
            Understanding: `${understandingValue}`,
            Question: `${questionValue}`,
          },
        },
        post_inspiration: `${activePostInspId}`,
      };
      handleCreatePost(discId, body);
    }
  };
  const toolbarStyle = ` absolute bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150   !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Describe the strategies you are using to make sense of and remember concepts related to the topic, such as an acrostic you created, a song you wrote to remember key ideas, a framework identifying main points, etc."
          setActiveCommentBox={setActiveCommentBox}
        />

        <div className="grid grid-cols-5 ">
          <button
            className={`${
              currentSection === "Strategies"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Strategies")}
          >
            Strategies
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
        {currentSection === "Strategies" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateStrategies}
              onEditorStateChange={onEditorStateChangeStrategies}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mentionsArray}
              toolbar={toolbar}
              placeholder="Share the strategies you are using to learn about the topic."
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
              mention={mentionsArray}
              placeholder="Explain how the strategies you are using help you learn about concepts related to the topic."
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
              mention={mentionsArray}
              placeholder="Pose at least three questions about concepts related to the topic you feel confident answering.."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Study strategies"
        togglePostInsp={togglePostInsp}
        onButtonClick={handlePost}
        setActivePostInspId={setActivePostInspId}
      />
    </div>
  );
};

export default StudyStrategiesComment;
