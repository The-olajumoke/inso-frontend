import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  SIGN_IN_LOADING,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
} from "@/constants/actionTypes";
const auth = (state, { payload, type }) => {
  switch (type) {
    case REGISTER_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: true,
          registerError: null,
        },
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          success: true,
        },
      };
    case REGISTER_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          registerError: payload,
        },
      };

    case SIGN_IN_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: true,
          signInError: null,
        },
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          success: true,
          data: payload,
        },
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          signInError: payload,
        },
      };

    default:
      return state;
  }
};

export default auth;
