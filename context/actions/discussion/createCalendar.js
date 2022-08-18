import axios from "axios";
import {
  UPDATE_CALENDAR_LOADING,
  UPDATE_CALENDAR_SUCCESS,
  UPDATE_CALENDAR_ERROR,
} from "@/constants/actionTypes";

export const createCalendar =
  (API_URL, token, body, userId) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_CALENDAR_LOADING,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `${API_URL}/users/${userId}/calendar`,
        body,
        config
      );
      console.log(response);
      dispatch({
        type: UPDATE_CALENDAR_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_CALENDAR_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
