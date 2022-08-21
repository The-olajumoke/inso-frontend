const uploadFile = () => {};
export const toolbarSettings = {
  options: ["inline", "image", "emoji"],
  emoji: {
    icon: "/static/icons/emoji_icon.svg",
    className: "bordered-option-classname",
  },
  inline: {
    options: ["bold", "italic", "underline"],
    bold: {
      className: "bordered-option-classname",
      icon: "/static/icons/font_icon.svg",
      className: "bordered-option-classname ",
    },
    italic: { className: "bordered-option-classname" },
    underline: { className: "bordered-option-classname" },
  },

  image: {
    uploadCallback: uploadFile,
    icon: "/static/icons/image_icon.svg",
    urlEnabled: true,
    alt: { present: true, mandatory: false },
    previewImage: true,
    inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
    className: "bordered-option-classname",
  },
};
