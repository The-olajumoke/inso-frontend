import React, { useState, useEffect } from "react";
import ShowInspirations from "../ShowInspirations";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { toolbar } from "@/utils/toolbar";
import CommentBoxHeader from "../CommentBoxHeader";
import Image from "next/image";
import checkbox from "../../public/static/new_icons/blue_checkbox.svg";
const Editor = dynamic(
  import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

const AlternativeComment = ({
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
  const [mentionsArray, setMentionsArray] = useState([]);
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
      setEditorStatePerspectives(EditorState.createEmpty());
      setEditorStateUnder(EditorState.createEmpty());
      setEditorStateCommonality(EditorState.createEmpty());
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
            Perspectives: `${perspectivesValue}`,
            Understanding: `${understandingValue}`,
            Commonality: `${commonalityValue}`,
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
            Perspectives: `${perspectivesValue}`,
            Understanding: `${understandingValue}`,
            Commonality: `${commonalityValue}`,
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
            <Image
              src={checkbox}
              alt="checkbox"
              layout="fixed"
              width="12"
              height="12"
              className=" cursor-pointer mr-16"
            />
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
              mention={mentionsArray}
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
              mention={mentionsArray}
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
              mention={mentionsArray}
              placeholder="Recommend ways that each perspective can benefit from the ideas of the other."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Alternative"
        togglePostInsp={togglePostInsp}
        onButtonClick={handlePost}
        setActivePostInspId={setActivePostInspId}
      />
    </div>
  );
};

export default AlternativeComment;
