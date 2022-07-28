import {
  GET_USERPROFILE_LOADING,
  GET_USERPROFILE_SUCCESS,
  GET_USERPROFILE_ERROR,
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

    default:
      return state;
  }
};

export default user;
