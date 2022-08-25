import React, { useEffect, useContext, useState } from "react";
import Image from "next/image";
import styles from "@/styles/viewDiscussion.module.css";
import { GlobalContext } from "@/context/Provider";

import ShowInspirations from "./ShowInspirations";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
// import { mention } from "@/utils/mentions";
import { toolbar } from "@/utils/toolbar";
import { createPost } from "@/context/actions/discussion/post";
import { API_URL } from "@/utils/url";

const Editor = dynamic(
  import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

const CommentBox = ({
  setActiveCommentBox,
  togglePostInsp,
  discId,
  replyingId,
  postSuccess,
  participants,
}) => {
  const [token, setToken] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [mentionsArray, setMentionsArray] = useState([]);
  // console.log(convertToRaw(editorState.getCurrentContent()));

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setTextValue(text);
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

  const mention = {
    seperator: "",
    trigger: "@",
    suggestions: mentionsArray,
  };
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
      setEditorState(EditorState.createEmpty());
    }
  }, [postSuccess]);
  useEffect(() => {
    const textLength = convertToRaw(editorState.getCurrentContent());
    console.log(textLength?.blocks[0]);
    if (textLength?.blocks[0].text === "") {
      setBtnIsActive(false);
    } else {
      setBtnIsActive(true);
    }
  }, [editorState]);

  //   {
  //   "draft": true,
  //   "comment_for": "507f1f77bcf86cd799439011",
  //   "post": {
  //     "post": "I like cream cheese on my bagel",
  //     "outline": {
  //       "inspirationOutline1": "Do you like bagels?",
  //       "inspirationOutline2": " I want to find out who likes cream cheese on their bagel",
  //       "inspirationOutline3": "I suspect people like regular cream cheese rather than strawberry"
  //     }
  //   },
  //   "post_inspiration": "507f1f77bcf86cd799439011"
  // }
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
        // comment_for: `${discId}`,
        post: {
          post: `${textValue}`,
        },
        // post_inspiration: "",
      };
      createPost(API_URL, token, discId, body)(discussionDispatch);
    }
  };

  const toolbarStyle = ` absolute bottom-1  left-40 !bg-transparent z-9999`;
  const editorStyle = `!w-full !h-full !text-md`;
  return (
    <div className="h-130 relative">
      <div className="h-full border rounded-lg border-primary-darkGreen py-12 px-20 flex  items-end">
        <div className="h-100  w-full bg-white-white">
          <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            toolbarClassName={toolbarStyle}
            editorClassName={editorStyle}
            mention={mention}
            toolbar={toolbar}
            placeholder="Say something different"
          />
        </div>
        <ShowInspirations
          setActiveCommentBox={setActiveCommentBox}
          togglePostInsp={togglePostInsp}
          btnIsActive={btnIsActive}
          onButtonClick={handlePost}
        />
      </div>
    </div>
  );
};

export default CommentBox;
