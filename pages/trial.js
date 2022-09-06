import React from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
const Quill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const quillEmoji = dynamic(import("quill-emoji"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const Trial = () => {
  const [value, setValue] = useState("");
  const [editorHtml, setEditorHtml] = useState("");
  console.log(value);

  //   const [content, setContent] = useState({
  //     editorHtml: __ISMSIE__ ? "<p>&nbsp;</p>" : "",
  //     files: [],
  //   });

  const reactQuillRef = null;

  const inputOpenImageRef = React.createRef();
  const inputOpenVideoRef = React.createRef();
  const inputOpenFileRef = React.createRef();

  //   const handleChange = (html) => {
  //     console.log("html", html);
  //     // https://youtu.be/BbR-QCoKngE
  //     // https://www.youtube.com/embed/ZwKhufmMxko
  //     // https://tv.naver.com/v/9176888
  //     // renderToStaticMarkup(ReactHtmlParser(html, options));

  //     setEditorHtml(html);
  //   };

  const imageHandler = () => {
    inputOpenImageRef.current.click();
  };

  const videoHandler = () => {
    inputOpenVideoRef.current.click();
  };

  const fileHandler = () => {
    inputOpenFileRef.current.click();
  };

  const insertImage = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (
      e.currentTarget &&
      e.currentTarget.files &&
      e.currentTarget.files.length > 0
    ) {
      const file = e.currentTarget.files[0];

      let formData = new FormData();
      const config = {
        header: { "content-type": "multipart/form-data" },
      };
      formData.append("file", file);
      console.log(file);
      //   axios.post("/api/blog/uploadfiles", formData, config).then((response) => {
      //     if (response.data.success) {
      //       const quill = this.reactQuillRef.getEditor();
      //       quill.focus();

      //       let range = quill.getSelection();
      //       let position = range ? range.index : 0;

      //       //먼저 노드 서버에다가 이미지를 넣은 다음에   여기 아래에 src에다가 그걸 넣으면 그게
      //       //이미지 블롯으로 가서  크리에이트가 이미지를 형성 하며 그걸 발류에서     src 랑 alt 를 가져간후에  editorHTML에 다가 넣는다.
      //       quill.insertEmbed(position, "image", {
      //         src: "http://localhost:5000/" + response.data.url,
      //         alt: response.data.fileName,
      //       });
      //       quill.setSelection(position + 1);

      //       if (this._isMounted) {
      //         this.setState(
      //           {
      //             files: [...this.state.files, file],
      //           },
      //           () => {
      //             this.props.onFilesChange(this.state.files);
      //           }
      //         );
      //       }
      //     } else {
      //       return alert("failed to upload file");
      //     }
      //   });
    }
  };

  const insertVideo = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (
      e.currentTarget &&
      e.currentTarget.files &&
      e.currentTarget.files.length > 0
    ) {
      const file = e.currentTarget.files[0];

      let formData = new FormData();
      const config = {
        header: { "content-type": "multipart/form-data" },
      };
      formData.append("file", file);

      //   axios.post("/api/blog/uploadfiles", formData, config).then((response) => {
      //     if (response.data.success) {
      //       const quill = this.reactQuillRef.getEditor();
      //       quill.focus();

      //       let range = quill.getSelection();
      //       let position = range ? range.index : 0;
      //       quill.insertEmbed(position, "video", {
      //         src: "http://localhost:5000/" + response.data.url,
      //         title: response.data.fileName,
      //       });
      //       quill.setSelection(position + 1);

      //       if (this._isMounted) {
      //         this.setState(
      //           {
      //             files: [...this.state.files, file],
      //           },
      //           () => {
      //             this.props.onFilesChange(this.state.files);
      //           }
      //         );
      //       }
      //     } else {
      //       return alert("failed to upload file");
      //     }
      //   });
    }
  };

  const insertFile = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (
      e.currentTarget &&
      e.currentTarget.files &&
      e.currentTarget.files.length > 0
    ) {
      const file = e.currentTarget.files[0];
      console.log(file);

      let formData = new FormData();
      const config = {
        header: { "content-type": "multipart/form-data" },
      };
      formData.append("file", file);

      //   axios.post("/api/blog/uploadfiles", formData, config).then((response) => {
      //     if (response.data.success) {
      //       const quill = this.reactQuillRef.getEditor();
      //       quill.focus();

      //       let range = quill.getSelection();
      //       let position = range ? range.index : 0;
      //       quill.insertEmbed(position, "file", response.data.fileName);
      //       quill.setSelection(position + 1);

      //       if (this._isMounted) {
      //         this.setState(
      //           {
      //             files: [...this.state.files, file],
      //           },
      //           () => {
      //             this.props.onFilesChange(this.state.files);
      //           }
      //         );
      //       }
      //     }
      //   });
    }
  };

  const onSubmit = () => {};

  const modules = {
    // syntax: true,
    toolbar: {
      container: "#toolbar",
      handlers: {
        insertImage: imageHandler,
        insertVideo: videoHandler,
        insertFile: fileHandler,
        // insertPoll: pollHandler,
      },
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "image",
    "video",
    "file",
    "link",
    "code-block",
    "video",
    "blockquote",
    "clean",
  ];
  return (
    <div className=" flex border">
      <div className="  border">
        {/* <Quill
          //   style={{ marginTop: "4px" }}
          value={value}
          onChange={setValue}
          placeholder={"Say something different"}
        //   formats={formats}
        //   modules={modules}
          theme="snow"
          //   className="w-full border"
        /> */}
        <div className="mt-40">
          <div id="toolbar">
            <select
              className="ql-header"
              defaultValue={""}
              onChange={(e) => e.persist()}
            >
              <option value="1" />
              <option value="2" />
              <option value="" />
            </select>
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-strike" />
            <button className="ql-insertImage mx-5">I</button>
            <button className="ql-insertVideo">V</button>
            <button className="ql-insertFile">F</button>
            <button className="ql-link" />
            <button className="ql-code-block" />
            <button className="ql-video" />
            <button className="ql-blockquote" />
            <button className="ql-clean" />
          </div>
          <Quill
            ref={(el) => {
              reactQuillRef = el;
            }}
            value={editorHtml}
            theme={"snow"}
            onChange={setEditorHtml}
            modules={modules}
            formats={formats}
            placeholder={"Say something different"}
          />
          <input
            type="file"
            accept="image/*"
            ref={inputOpenImageRef}
            style={{ display: "none" }}
            onChange={insertImage}
          />
          <input
            type="file"
            accept="video/*"
            ref={inputOpenVideoRef}
            style={{ display: "none" }}
            onChange={insertVideo}
          />
          <input
            type="file"
            accept="*"
            ref={inputOpenFileRef}
            style={{ display: "none" }}
            onChange={insertFile}
          />
        </div>
        <form onSubmit={onSubmit}>
          <div style={{ textAlign: "center", margin: "2rem" }}>
            <button
              size="large"
              htmlType="submit"
              className=""
              onSubmit={onSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Trial;
