const uploadFile = () => {};
export const toolbar = {
  options: [, "emoji", "inline", "image", "link"],

  emoji: {
    icon: "/static/icons/emoji_icon.svg",
  },
  inline: {
    options: ["bold", "italic", "underline"],
    bold: {
      icon: "/static/icons/font_icon.svg",
      className: "bordered-option-classname",
    },
    italic: { className: "bordered-option-classname" },
    underline: { className: "bordered-option-classname" },
  },
  link: {
    options: ["link"],
  },
  image: {
    icon: "/static/icons/image.svg",
    uploadCallback: uploadFile,
    urlEnabled: true,
    alt: { present: true, mandatory: false },
    previewImage: true,
    inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
  },
};
