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

const SearchTreeComment = ({ setActiveCommentBox, togglePostInsp }) => {
  const [editorStateSearch, setEditorStateSearch] = useState(
    EditorState.createEmpty()
  );
  const [editorStateUnder, setEditorStateUnder] = useState(
    EditorState.createEmpty()
  );
  const [editorStateAddition, setEditorStateAddition] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Search");
  const [searchValue, setSearchValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");
  const [additionValue, setAdditionValue] = useState("");

  // FIRST
  const onEditorStateChangeSearch = (editorStateSearch) => {
    setEditorStateSearch(editorStateSearch);
    const search = draftToHtml(
      convertToRaw(editorStateSearch.getCurrentContent())
    );
    setSearchValue(search);
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
  const onEditorStateChangeAddition = (editorStateAddition) => {
    setEditorStateAddition(editorStateAddition);
    const addition = draftToHtml(
      convertToRaw(editorStateAddition.getCurrentContent())
    );
    setAdditionValue(addition);
  };
  console.log(searchValue);
  console.log(understandingValue);
  console.log(additionValue);

  const toolbarStyle = `absolute bottom-1  left-96 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-150   !text-md`;

  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white p-20 rounded-t-lg">
        <CommentBoxHeader
          instruction="Select three concepts related to the topic and share web-based resources connected to each."
          setActiveCommentBox={setActiveCommentBox}
        />

        <div className="grid grid-cols-5 ">
          <button
            className={`${
              currentSection === "Search"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Search")}
          >
            Search
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
              currentSection === "Addition"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Addition")}
          >
            Addition
          </button>
        </div>
        {currentSection === "Search" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateSearch}
              onEditorStateChange={onEditorStateChangeSearch}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              mention={mention}
              toolbar={toolbar}
              placeholder="List three concepts related to the topic and include a link to at least one web-based resource related to each concept."
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
              placeholder="Explain how the resources you identified inform your understanding of the concepts related to the topic."
            />
          </div>
        )}
        {currentSection === "Addition" && (
          <div className="h-200 bg-white-white ">
            <Editor
              editorState={editorStateAddition}
              onEditorStateChange={onEditorStateChangeAddition}
              toolbarClassName={toolbarStyle}
              editorClassName={editorStyle}
              toolbar={toolbar}
              mention={mention}
              placeholder="Recommend three other concepts about which you would like others to investigate and share resources."
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="A search tree"
        togglePostInsp={togglePostInsp}
      />
    </div>
  );
};

export default SearchTreeComment;
