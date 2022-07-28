import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOG_IN_LOADING,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
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
          registerSuccess: true,
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

    case LOG_IN_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          loginLoading: true,
          loginError: null,
        },
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          loginLoading: false,
          loginSuccess: true,
          loginData: payload,
        },
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          loginLoading: false,
          loginError: payload,
        },
      };

    default:
      return state;
  }
};

export default auth;
