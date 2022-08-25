const uploadFile = () => {};
export const toolbarSettings = {
  options: ["inline", "image", "emoji"],
  emoji: {
    icon: "/static/new_icons/emoji.svg",
    // className: "bordered-option-classname",
  },
  inline: {
    options: ["bold", "italic", "underline"],
    bold: {
      icon: "/static/new_icons/bold.svg",
      // className: "bordered-option-classname",
    },
    italic: {
      icon: "/static/new_icons/italic.svg",
      // className: "bordered-option-classname",
    },
    underline: {
      icon: "/static/new_icons/underline.svg",
      // className: "bordered-option-classname",
    },
  },

  image: {
    icon: "/static/new_icons/photo.svg",
    uploadCallback: uploadFile,
    urlEnabled: true,
    alt: { present: true, mandatory: false },
    previewImage: true,
    inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
    className: "bordered-option-classname",
  },
};
