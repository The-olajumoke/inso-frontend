import {
  CHANGE_LAYOUT_WIDTH_TO_SMALL,
  CHANGE_LAYOUT_WIDTH_TO_LARGE,
} from "@/constants/actionTypes";

const layout = (state, { payload, type }) => {
  switch (type) {
    case CHANGE_LAYOUT_WIDTH_TO_SMALL:
      return {
        ...state,
        layout: {
          ...state.layout,
          navSize: "small",
        },
      };
    case CHANGE_LAYOUT_WIDTH_TO_LARGE:
      return {
        ...state,
        layout: {
          ...state.layout,
          navSize: "large",
        },
      };

    default:
      return state;
  }
};

export default layout;
