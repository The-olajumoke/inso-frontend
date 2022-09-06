const uploadFile = () => {};
export const toolbar = {
  options: [, "emoji", "inline", "image", "link"],

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
  link: {
    options: ["link"],
    link: {
      icon: "/static/new_icons/link.svg",
    },
  },
  image: {
    icon: "/static/new_icons/photo.svg",
    // uploadCallback: uploadFile,
    // urlEnabled: true,
    // alt: { present: true, mandatory: false },
    previewImage: true,
    inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
  },
};





// toolbar={{
            //   inline: { inDropdown: true },
            //   list: { inDropdown: true },
            //   textAlign: { inDropdown: true },
            //   link: { inDropdown: true },
            //   history: { inDropdown: true },
            //   image: {
            //     // uploadCallback: uploadImageCallBack,
            //     alt: { present: true, mandatory: true },
            //   },
            // }}