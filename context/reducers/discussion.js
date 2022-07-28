import {
  CREATE_DISCUSSION_LOADING,
  CREATE_DISCUSSION_SUCCESS,
  CREATE_DISCUSSION_ERROR,
  GET_DISCUSSIONS_LOADING,
  GET_DISCUSSIONS_SUCCESS,
  GET_DISCUSSIONS_ERROR,
  GET_POSTINSP_LOADING,
  GET_POSTINSP_SUCCESS,
  GET_POSTINSP_ERROR,
  UPDATE_STARTERPROMPT_LOADING,
  UPDATE_STARTERPROMPT_SUCCESS,
  UPDATE_STARTERPROMPT_ERROR,
  UPDATE_POSTINSP_LOADING,
  UPDATE_POSTINSP_SUCCESS,
  UPDATE_POSTINSP_ERROR,
  UPDATE_SCORES_LOADING,
  UPDATE_SCORES_SUCCESS,
  UPDATE_SCORES_ERROR,
  UPDATE_CALENDAR_LOADING,
  UPDATE_CALENDAR_SUCCESS,
  UPDATE_CALENDAR_ERROR,
} from "@/constants/actionTypes";

const discussion = (state, { type, payload }) => {
  switch (type) {
    case CREATE_DISCUSSION_LOADING:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          createLoading: true,
          createError: null,
        },
      };
    case CREATE_DISCUSSION_SUCCESS:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          createLoading: false,
          createData: payload,
        },
      };
    case CREATE_DISCUSSION_ERROR:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          createLoading: false,
          createError: payload,
        },
      };
    case GET_DISCUSSIONS_LOADING:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          discussionLoading: true,
          error: null,
        },
      };
    case GET_DISCUSSIONS_SUCCESS:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          discussionLoading: false,
          discussionData: payload,
        },
      };
    case GET_DISCUSSIONS_ERROR:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          discussionLoading: false,
          error: payload,
        },
      };
    case GET_POSTINSP_LOADING:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          postInspLoading: true,
          error: null,
        },
      };
    case GET_POSTINSP_SUCCESS:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          postInspLoading: false,
          postInspData: payload,
        },
      };
    case GET_POSTINSP_ERROR:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          postInspLoading: false,
          error: payload,
        },
      };
    case UPDATE_STARTERPROMPT_LOADING:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          starterPromptLoading: true,
          error: null,
        },
      };
    case UPDATE_STARTERPROMPT_SUCCESS:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          starterPromptLoading: false,
          starterPromptData: payload,
        },
      };
    case UPDATE_STARTERPROMPT_ERROR:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          starterPromptLoading: false,
          error: payload,
        },
      };
    case UPDATE_POSTINSP_LOADING:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          postInspLoading: true,
          error: null,
        },
      };
    case UPDATE_POSTINSP_SUCCESS:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          postInspLoading: false,
          postInspData: payload,
        },
      };
    case UPDATE_POSTINSP_ERROR:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          postInspLoading: false,
          error: payload,
        },
      };
    case UPDATE_SCORES_LOADING:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          scoreLoading: true,
          error: null,
        },
      };
    case UPDATE_SCORES_SUCCESS:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          scoreLoading: false,
          scoreData: payload,
        },
      };
    case UPDATE_SCORES_ERROR:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          scoreLoading: false,
          error: payload,
        },
      };
    case UPDATE_CALENDAR_LOADING:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          calendarLoading: true,
          error: null,
        },
      };
    case UPDATE_CALENDAR_SUCCESS:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          calendarLoading: false,
          calendarData: payload,
        },
      };
    case UPDATE_CALENDAR_ERROR:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          calendarLoading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default discussion;
