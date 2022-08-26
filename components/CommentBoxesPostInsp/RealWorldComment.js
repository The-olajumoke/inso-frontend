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

const RealWorldComment = ({
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
  const [editorStateRealWorld, setEditorStateRealWorld] = useState(
    EditorState.createEmpty()
  );
  const [editorStateUnder, setEditorStateUnder] = useState(
    EditorState.createEmpty()
  );
  const [editorStateApplication, setEditorStateApplication] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Real-world");
  const [realWorldValue, setRealWorldValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");
  const [applicationValue, setApplicationValue] = useState("");
  const [mentionsArray, setMentionsArray] = useState([]);
  // FIRST
  const onEditorStateChangeRealWorld = (editorStateRealWorld) => {
    setEditorStateRealWorld(editorStateRealWorld);
    const realWorld = draftToHtml(
      convertToRaw(editorStateRealWorld.getCurrentContent())
    );
    setRealWorldValue(realWorld);
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
  const onEditorStateChangeApplication = (editorStateApplication) => {
    setEditorStateApplication(editorStateApplication);
    const application = draftToHtml(
      convertToRaw(editorStateApplication.getCurrentContent())
    );
    setApplicationValue(application);
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
      console.log(menti);
      setMentionsArray(menti);
    }
  }, [participants]);
  useEffect(() => {
    if (postSuccess == true) {
      setEditorStateRealWorld(EditorState.createEmpty());
      setEditorStateUnder(EditorState.createEmpty());
      setEditorStateApplication(EditorState.createEmpty());
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
            "Real world": `${realWorldValue}`,
            Understanding: `${understandingValue}`,
            Application: `${applicationValue}`,
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
            "Real world": `${realWorldValue}`,
            Understanding: `${understandingValue}`,
            Application: `${applicationValue}`,
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
          instruction="Explain how concepts about the topic could apply to real-world situations."
          setActiveCommentBox={setActiveCommentBox}
        />

        <div className="grid grid-cols-5 ">
          <button
            className={`${
              currentSection === "Real-world"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Real-world")}
          >
            Real-world
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
              currentSection === "Application"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Application")}
          >
            Application
          </button>
        </div>
        {currentSection === "Real-world" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateRealWorld}
              onEditorStateChange={onEditorStateChangeRealWorld}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mentionsArray}
              toolbar={toolbar}
              placeholder="Identify a specific real-world scenario that could be informed by, or could inform, concepts related to the topic."
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
              placeholder="Explain how application of concepts to this real-world scenario can increase understanding of the topic."
            />
          </div>
        )}
        {currentSection === "Application" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateApplication}
              onEditorStateChange={onEditorStateChangeApplication}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mentionsArray}
              placeholder="Recommend ways you could effectively interact with the concepts you identified in the context of other real-world scenarios."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Real-world"
        togglePostInsp={togglePostInsp}
        onButtonClick={handlePost}
        setActivePostInspId={setActivePostInspId}
      />
    </div>
  );
};

export default RealWorldComment;
