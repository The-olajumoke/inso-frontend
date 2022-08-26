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

const LegalEthicalComment = ({
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
  const [editorStateConcerns, setEditorStateConcerns] = useState(
    EditorState.createEmpty()
  );
  const [editorStateUnder, setEditorStateUnder] = useState(
    EditorState.createEmpty()
  );
  const [editorStateImplications, setEditorStateImplications] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Concerns");
  const [concernsValue, setConcernsValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");
  const [implicationsValue, setImplicationsValue] = useState("");
  const [mentionsArray, setMentionsArray] = useState([]);
  // FIRST
  const onEditorStateChangeConcerns = (editorStateConcerns) => {
    setEditorStateConcerns(editorStateConcerns);
    const concerns = draftToHtml(
      convertToRaw(editorStateConcerns.getCurrentContent())
    );
    setConcernsValue(concerns);
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
  const onEditorStateChangeImplications = (editorStateImplications) => {
    setEditorStateImplications(editorStateImplications);
    const implication = draftToHtml(
      convertToRaw(editorStateImplications.getCurrentContent())
    );
    setImplicationsValue(implication);
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
      setEditorStateConcerns(EditorState.createEmpty());
      setEditorStateUnder(EditorState.createEmpty());
      setEditorStateImplications(EditorState.createEmpty());
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
            Concerns: `${concernsValue}`,
            Understanding: `${understandingValue}`,
            Implications: `${implicationsValue}`,
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
            Concerns: `${concernsValue}`,
            Understanding: `${understandingValue}`,
            Implications: `${implicationsValue}`,
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
          instruction="Identify concepts related to the topic that could have legal or ethical implications."
          setActiveCommentBox={setActiveCommentBox}
        />

        <div className="grid grid-cols-5 ">
          <button
            className={`${
              currentSection === "Concerns"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Concerns")}
          >
            Concerns
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
              currentSection === "Implications"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Implications")}
          >
            Implications
          </button>
        </div>
        {currentSection === "Concerns" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateConcerns}
              onEditorStateChange={onEditorStateChangeConcerns}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mentionsArray}
              toolbar={toolbar}
              placeholder="Identify a concept from the topic and explain the legal or ethical implications of it."
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
              placeholder="Explain the importance of understanding the legal or ethical implications of the concept."
            />
          </div>
        )}
        {currentSection === "Implications" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateImplications}
              onEditorStateChange={onEditorStateChangeImplications}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mentionsArray}
              placeholder="Suggest at least one positive and one negative legal or ethical implication related to the concepts and concerns you identified."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Legal/Ethical Concerns"
        togglePostInsp={togglePostInsp}
        onButtonClick={handlePost}
        setActivePostInspId={setActivePostInspId}
      />
    </div>
  );
};

export default LegalEthicalComment;
