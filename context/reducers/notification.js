import {
  GET_NOTIFICATION_LOADING,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_ERROR,
} from "@/constants/actionTypes";

const notification = (state, { type, payload }) => {
  switch (type) {
    case GET_NOTIFICATION_LOADING:
      return {
        ...state,
        notification: {
          ...state.notification,
          loading: true,
          error: null,
        },
      };
    case GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notification: {
          ...state.notification,
          loading: false,
          data: payload,
        },
      };
    case GET_NOTIFICATION_ERROR:
      return {
        ...state,
        notification: {
          ...state.notification,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default notification;
