const uploadFile = () => {};
export const toolbarSettings = {
  options: [, "emoji", "inline", "image"],
  emoji: {
    icon: "https://res.cloudinary.com/insomaryland/image/upload/v1655332613/emoji_icon_xamatp.svg",
  },
  inline: {
    options: ["bold", "italic", "underline"],
    bold: {
      className: "bordered-option-classname",
      icon: "https://res.cloudinary.com/insomaryland/image/upload/v1655332608/font_icon_xubtsf.svg",
      className: "bordered-option-classname",
    },
    italic: { className: "bordered-option-classname" },
    underline: { className: "bordered-option-classname" },
  },

  image: {
    uploadCallback: uploadFile,
    icon: "https://res.cloudinary.com/insomaryland/image/upload/v1655332639/image_icon_e9zrlz.svg",
    urlEnabled: true,
    alt: { present: true, mandatory: false },
    previewImage: true,
    inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
  },
};
