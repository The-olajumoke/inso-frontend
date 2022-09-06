export const imageProcessor = (
  evt,
  setError,
  setImageFile,
  setAgent64,
  setImage
) => {
  setError(false);
  const file = evt.target.files[0];
  setImageFile(file);
  const reader = new FileReader();
  reader.onloadend = () => {
    if (reader.readyState === 2) {
      const b64 = reader.result.replace(/^data:image.+;base64,/, "");
      setImage(reader.result);
      setAgent64(b64);
    }
  };
  if (file && file.type.match("image.*")) {
    reader.readAsDataURL(file);
  } else {
    return;
  }
};
