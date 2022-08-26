import React, { useState, useEffect } from "react";
import Image from "next/image";
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

const CourseConceptsComment = ({
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
  const [editorStateConnections, setEditorStateConnections] = useState(
    EditorState.createEmpty()
  );
  const [editorStateUnder, setEditorStateUnder] = useState(
    EditorState.createEmpty()
  );
  const [editorStateNewIdeas, setEditorStateNewIdeas] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Connections");
  const [connectionsValue, setConnectionsValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");
  const [newIdeasValue, setNewIdeasValue] = useState("");
  const [mentionsArray, setMentionsArray] = useState([]);
  // FIRST
  const onEditorStateChangeConnections = (editorStateQuestConnections) => {
    setEditorStateConnections(editorStateQuestConnections);
    const connections = draftToHtml(
      convertToRaw(editorStateQuestConnections.getCurrentContent())
    );
    setConnectionsValue(connections);
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
  const onEditorStateChangeNewIdeas = (editorStateNewIdeas) => {
    setEditorStateNewIdeas(editorStateNewIdeas);
    const newIdeas = draftToHtml(
      convertToRaw(editorStateNewIdeas.getCurrentContent())
    );
    setNewIdeasValue(newIdeas);
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
      setEditorStateConnections(EditorState.createEmpty());
      setEditorStateUnder(EditorState.createEmpty());
      setEditorStateNewIdeas(EditorState.createEmpty());
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
            Connections: `${connectionsValue}`,
            Understanding: `${understandingValue}`,
            "New Ideas": `${newIdeasValue}`,
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
            Connections: `${connectionsValue}`,
            Understanding: `${understandingValue}`,
            "New Ideas": `${newIdeasValue}`,
          },
        },
        post_inspiration: `${activePostInspId}`,
      };
      handleCreatePost(discId, body);
    }
  };

  const toolbarStyle = ` absolute bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150  !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Explain how specific concepts from the topic relate to other concepts in this course or concepts from another course or area."
          setActiveCommentBox={setActiveCommentBox}
        />

        <div className="grid grid-cols-5 ">
          <button
            className={`${
              currentSection === "Connections"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Connections")}
          >
            Connections
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
              currentSection === "New Ideas"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("New Ideas")}
          >
            New Ideas
          </button>
        </div>
        {currentSection === "Connections" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateConnections}
              onEditorStateChange={onEditorStateChangeConnections}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mentionsArray}
              toolbar={toolbar}
              placeholder="Describe the relationship(s) you identified between specific concepts."
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
              placeholder="Explain how the relationship(s) can help increase understanding of the topic."
            />
          </div>
        )}
        {currentSection === "New Ideas" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateNewIdeas}
              onEditorStateChange={onEditorStateChangeNewIdeas}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mentionsArray}
              placeholder="List three new ideas you are having because of the concepts and connections you identified."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Course concepts"
        togglePostInsp={togglePostInsp}
        onButtonClick={handlePost}
        setActivePostInspId={setActivePostInspId}
      />
    </div>
  );
};

export default CourseConceptsComment;
