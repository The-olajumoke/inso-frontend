import React, { useEffect, useContext, useState } from "react";
import Image from "next/image";
import styles from "@/styles/viewDiscussion.module.css";
import { GlobalContext } from "@/context/Provider";

import ShowInspirations from "./ShowInspirations";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CloseToolbar from "../public/static/new_icons/cancel_blue.svg";
import { EditorState, convertToRaw } from "draft-js";
import { createPost } from "@/context/actions/discussion/post";
import { API_URL } from "@/utils/url";
import QuillEditor from "./QuillEditor";
import WhiteLoader from "./whiteLoader";

const CommentBox = ({
  setActiveCommentBox,
  togglePostInsp,
  discId,
  replyingId,
  postLoading,
  postSuccess,
  participants,
  setActivePostInspId,
}) => {
  const [token, setToken] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [mentionsArray, setMentionsArray] = useState([]);
  const [toolbarOpen, setToolbarOpen] = useState(false);

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

  // const mention = {
  //   seperator: "",
  //   trigger: "@",
  //   suggestions: mentionsArray,
  // };
  const {
    discussionDispatch,
    discussionState: {
      discussion: { loading, error, discussionData },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    setToken(accessToken);
  }, []);
  useEffect(() => {
    if (postSuccess == true) {
      setTextValue("<p></p>");
    }
  }, [postSuccess]);

  const handlePost = () => {
    if (replyingId.id !== "") {
      const body = {
        draft: false,
        comment_for: replyingId.id,
        post: {
          post: `${textValue}`,
        },
        // post_inspiration: "",
      };
      createPost(API_URL, token, discId, body)(discussionDispatch);
    } else {
      const body = {
        draft: false,
        post: {
          post: `${textValue}`,
        },
      };
      createPost(API_URL, token, discId, body)(discussionDispatch);
    }
  };
  const toggleToolBar = () => {
    setToolbarOpen(!toolbarOpen);
  };
  const toolbarStyle = `absolute bottom-1  left-40 !bg-transparent z-9999 border-4`;
  const editorStyle = `!w-full !h-full !text-md`;
  return (
    <div
      className={`h-130 ${
        btnIsActive ? "vp-600:h-120" : "vp-600:h-60"
      } relative`}
    >
      <div className="h-full border rounded-lg border-primary-darkGreen p-1 flex items-start   !relative ">
        <div
          className={`h-72%
           w-full`}
        >
          {/* <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            toolbarClassName={toolbarStyle}
            editorClassName={editorStyle}
            mention={mention}
            toolbar={toolbar}
            placeholder="Say something different"
          /> */}
          <QuillEditor
            value={textValue}
            setValue={setTextValue}
            toolbarOpen={toolbarOpen}
            toggleToolBar={toggleToolBar}
            onButtonClick={handlePost}
            postLoading={postLoading}
            postSuccess={postSuccess}
            setBtnIsActive={setBtnIsActive}
            btnIsActive={btnIsActive}
          />
        </div>
        {toolbarOpen && (
          <div className="absolute w-full   right-0 left-0 bottom-0 flex items-end justify-between mb-8 px-14 ">
            <button
              className="h-27 w-27 bg-other-yellow rounded-full"
              onClick={toggleToolBar}
            >
              <Image
                src={CloseToolbar}
                alt="toolbar"
                layout="fixed"
                width="12"
                height="12"
                className=" cursor-pointer"
              />
            </button>
            <button
              disabled={!btnIsActive}
              onClick={handlePost}
              className="w-93 h-34 text-sm  btn bg-primary-blue disabled:bg-gray-background disabled:cursor-not-allowed disabled:text-other-disabledText"
            >
              {postLoading ? <WhiteLoader /> : "Send"}
            </button>
          </div>
        )}
        {!toolbarOpen && (
          <div className={`${!btnIsActive ? "vp-600:hidden" : "flex"}`}>
            <ShowInspirations
              setActiveCommentBox={setActiveCommentBox}
              togglePostInsp={togglePostInsp}
              btnIsActive={btnIsActive}
              onButtonClick={handlePost}
              setActivePostInspId={setActivePostInspId}
              toggleToolBar={toggleToolBar}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
