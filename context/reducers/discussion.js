import {
  CREATE_DISCUSSION_LOADING,
  CREATE_DISCUSSION_SUCCESS,
  CREATE_DISCUSSION_ERROR,
} from "@/constants/actionTypes";

const discussion = (state, { type, payload }) => {
  switch (type) {
    case CREATE_DISCUSSION_LOADING:
      return {
        ...state,
        discussionInitialStates: {
          ...state.discussionInitialStates,
          createLoading: true,
          createError: null,
        },
      };
    case CREATE_DISCUSSION_SUCCESS:
      return {
        ...state,
        discussionInitialStates: {
          ...state.discussionInitialStates,
          createLoading: false,
          createData: payload,
        },
      };
    case CREATE_DISCUSSION_ERROR:
      return {
        ...state,
        discussionInitialStates: {
          ...state.discussionInitialStates,
          createLoading: false,
          createError: payload,
        },
      };
    default:
      return state;
  }
};

export default discussion;
