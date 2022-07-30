import {
  GET_USERPROFILE_LOADING,
  GET_USERPROFILE_SUCCESS,
  GET_USERPROFILE_ERROR,
  UPDATE_USERPROFILE_LOADING,
  UPDATE_USERPROFILE_SUCCESS,
  UPDATE_USERPROFILE_ERROR,
  UPDATE_USERPASSWORD_LOADING,
  UPDATE_USERPASSWORD_SUCCESS,
  UPDATE_USERPASSWORD_ERROR,
} from "@/constants/actionTypes";
const user = (state, { payload, type }) => {
  switch (type) {
    case GET_USERPROFILE_LOADING:
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
          error: null,
        },
      };
    case GET_USERPROFILE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          success: true,
          profileData: payload,
        },
      };
    case GET_USERPROFILE_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          error: payload,
        },
      };
    case UPDATE_USERPROFILE_LOADING:
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
          error: null,
        },
      };
    case UPDATE_USERPROFILE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          editProfileSuccess: true,
        },
      };
    case UPDATE_USERPROFILE_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          error: payload,
        },
      };
    case UPDATE_USERPASSWORD_LOADING:
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
          updatePasswordError: null,
        },
      };
    case UPDATE_USERPASSWORD_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          updatePasswordSuccess: true,
        },
      };
    case UPDATE_USERPASSWORD_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          updatePasswordError: payload,
        },
      };

    default:
      return state;
  }
};

export default user;
