import axios from "axios";
import {
  GET_NOTIFICATION_LOADING,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_ERROR,
} from "@/constants/actionTypes";

export const getNotifications =
  (API_URL, token, userId) => async (dispatch) => {
    try {
      dispatch({ type: GET_NOTIFICATION_LOADING });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${API_URL}/users/${userId}/notifications`,
        config
      );
      console.log(response);
      dispatch({
        type: GET_NOTIFICATION_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_NOTIFICATION_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
