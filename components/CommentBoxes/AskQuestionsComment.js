import React, { useState } from "react";
import Image from "next/image";
import ShowInspirations from "../ShowInspirations";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

const Editor = dynamic(
  import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

const AskQuestionsComment = ({ setActiveCommentBox }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorStateUnder, setEditorStateUnder] = useState(
    EditorState.createEmpty()
  );
  const [editorStateOutcome, setEditorStateOutcome] = useState(
    EditorState.createEmpty()
  );
  const [currentSection, setCurrentSection] = useState("Questions");
  const [questionsValue, setQuestionsValue] = useState("");
  const [understandingValue, setUnderstandingValue] = useState("");
  const [outcomeValue, setOutcomeValue] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const question = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setQuestionsValue(question);
  };
  const onEditorStateChangeUnderstanding = (editorStateUnder) => {
    setEditorStateUnder(editorStateUnder);
    const understanding = draftToHtml(
      convertToRaw(editorStateUnder.getCurrentContent())
    );
    setUnderstandingValue(understanding);
  };
  const onEditorStateChangeOutcome = (editorStateOutcome) => {
    setEditorStateOutcome(editorStateOutcome);
    const outcome = draftToHtml(
      convertToRaw(editorStateOutcome.getCurrentContent())
    );
    setOutcomeValue(outcome);
  };

  const uploadFile = () => {};
  return (
    <div className="border border-primary-darkGreen rounded-lg  relative  overflow-hidden">
      <div className=" bg-white-white py-20 px-29 rounded-t-lg">
        <div className=" flex items-center justify-between pb-15 border-b-2 border-blue-inputBlue mb-28">
          <div className=" flex items-center">
            <div className="flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1655333490/info_outline_exdgeh.svg"
                alt="back"
                layout="fixed"
                width="20   "
                height="20  "
                className=" cursor-pointer"
              />
            </div>
            <p className=" text-primary-darkGreen ml-14">
              Pose questions to encourage discussion about the topic.
            </p>
          </div>
          <div className="flex items-center">
            <button className=" text-sm text-primary-blue">
              Save to drafts
            </button>
            <button
              className="ml-47 flex justify-center items-center"
              onClick={() => setActiveCommentBox("noInspiration")}
            >
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1655455953/InsoImages/cancel_zcyobf.svg"
                alt="cancel"
                layout="fixed"
                width="16"
                height="16"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 ">
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
          <button
            className={`${
              currentSection === "Outcomes"
                ? "btn-currentSection"
                : "btn-notCurrentSection"
            }`}
            onClick={() => setCurrentSection("Outcomes")}
          >
            Outcomes
          </button>
        </div>
        {currentSection === "Questions" && (
          <div className="h-200 bg-white-white ">
            <Editor
              mention={{
                separator: " ",
                trigger: "@",
                suggestions: [
                  { text: "APPLE", value: "apple", url: "apple" },
                  { text: "BANANA", value: "banana", url: "banana" },
                  { text: "CHERRY", value: "cherry", url: "cherry" },
                  { text: "DURIAN", value: "durian", url: "durian" },
                  { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
                  { text: "FIG", value: "fig", url: "fig" },
                  {
                    text: "GRAPEFRUIT",
                    value: "grapefruit",
                    url: "grapefruit",
                  },
                  { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
                ],
              }}
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
              toolbarClassName=" absolute -bottom-1 left-80 !bg-white-white z-9999"
              placeholder="Pose three questions about the topic that would encourage further discussion."
              editorClassName=" !w-full !text-md"
              toolbar={{
                options: [, "emoji", "inline", "image", "link"],

                emoji: {
                  icon: "https://res.cloudinary.com/insomaryland/image/upload/v1655332613/emoji_icon_xamatp.svg",
                },
                inline: {
                  options: ["bold", "italic", "underline"],
                  bold: {
                    icon: "https://res.cloudinary.com/insomaryland/image/upload/v1655332608/font_icon_xubtsf.svg",
                    className: "bordered-option-classname",
                  },
                  italic: { className: "bordered-option-classname" },
                  underline: { className: "bordered-option-classname" },
                },
                link: {
                  options: ["link"],
                },
                image: {
                  icon: "https://res.cloudinary.com/insomaryland/image/upload/v1655332639/image_icon_e9zrlz.svg",
                  uploadCallback: uploadFile,
                  urlEnabled: true,
                  alt: { present: true, mandatory: false },
                  previewImage: true,
                  inputAccept:
                    "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                },
              }}
            />
          </div>
        )}
        {currentSection === "Understanding" && (
          <div className="h-200 bg-white-white ">
            <Editor
              mention={{
                separator: " ",
                trigger: "@",
                suggestions: [
                  { text: "APPLE", value: "apple", url: "apple" },
                  { text: "BANANA", value: "banana", url: "banana" },
                  { text: "CHERRY", value: "cherry", url: "cherry" },
                  { text: "DURIAN", value: "durian", url: "durian" },
                  { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
                  { text: "FIG", value: "fig", url: "fig" },
                  {
                    text: "GRAPEFRUIT",
                    value: "grapefruit",
                    url: "grapefruit",
                  },
                  { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
                ],
              }}
              editorState={editorStateUnder}
              onEditorStateChange={onEditorStateChangeUnderstanding}
              toolbarClassName=" absolute -bottom-1 left-80 !bg-white-white z-9999"
              placeholder="Explain your current understanding of the topic."
              editorClassName=" !w-full !text-md"
              toolbar={{
                options: [, "emoji", "inline", "image", "link"],

                emoji: {
                  icon: "https://res.cloudinary.com/insomaryland/image/upload/v1655332613/emoji_icon_xamatp.svg",
                },
                inline: {
                  options: ["bold", "italic", "underline"],
                  bold: {
                    icon: "https://res.cloudinary.com/insomaryland/image/upload/v1655332608/font_icon_xubtsf.svg",
                    className: "bordered-option-classname",
                  },
                  italic: { className: "bordered-option-classname" },
                  underline: { className: "bordered-option-classname" },
                },
                link: {
                  options: ["link"],
                },
                image: {
                  icon: "https://res.cloudinary.com/insomaryland/image/upload/v1655332639/image_icon_e9zrlz.svg",
                  uploadCallback: uploadFile,
                  urlEnabled: true,
                  alt: { present: true, mandatory: false },
                  previewImage: true,
                  inputAccept:
                    "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                },
              }}
            />
          </div>
        )}
        {currentSection === "Outcomes" && (
          <div className="h-200 bg-white-white ">
            <Editor
              mention={{
                separator: " ",
                trigger: "@",
                suggestions: [
                  { text: "APPLE", value: "apple", url: "apple" },
                  { text: "BANANA", value: "banana", url: "banana" },
                  { text: "CHERRY", value: "cherry", url: "cherry" },
                  { text: "DURIAN", value: "durian", url: "durian" },
                  { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
                  { text: "FIG", value: "fig", url: "fig" },
                  {
                    text: "GRAPEFRUIT",
                    value: "grapefruit",
                    url: "grapefruit",
                  },
                  { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
                ],
              }}
              editorState={editorStateOutcome}
              onEditorStateChange={onEditorStateChangeOutcome}
              toolbarClassName=" absolute -bottom-1 left-80 !bg-white-white z-9999"
              placeholder="Recommend three outcomes you would hope to see from discussion about your questions."
              editorClassName=" !w-full !text-md"
              toolbar={{
                options: [, "emoji", "inline", "image", "link"],

                emoji: {
                  icon: "https://res.cloudinary.com/insomaryland/image/upload/v1655332613/emoji_icon_xamatp.svg",
                },
                inline: {
                  options: ["bold", "italic", "underline"],
                  bold: {
                    icon: "https://res.cloudinary.com/insomaryland/image/upload/v1655332608/font_icon_xubtsf.svg",
                    className: "bordered-option-classname",
                  },
                  italic: { className: "bordered-option-classname" },
                  underline: { className: "bordered-option-classname" },
                },
                link: {
                  options: ["link"],
                },
                image: {
                  icon: "https://res.cloudinary.com/insomaryland/image/upload/v1655332639/image_icon_e9zrlz.svg",
                  uploadCallback: uploadFile,
                  urlEnabled: true,
                  alt: { present: true, mandatory: false },
                  previewImage: true,
                  inputAccept:
                    "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                },
              }}
            />
          </div>
        )}
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Ask questions"
      />
    </div>
  );
};

export default AskQuestionsComment;
