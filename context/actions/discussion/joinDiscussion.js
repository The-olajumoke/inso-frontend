import axios from "axios";
import {
  JOIN_DISCUSSION_LOADING,
  JOIN_DISCUSSION_SUCCESS,
  JOIN_DISCUSSION_ERROR,
} from "@/constants/actionTypes";
export const joinDiscussion =
  (API_URL, token, userId, insoCode) => async (dispatch) => {
    dispatch({ type: JOIN_DISCUSSION_LOADING });

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.patch(
        `${API_URL}/users/${userId}/discussions/${insoCode}/join`,
        {},
        config
      );
      dispatch({
        type: JOIN_DISCUSSION_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: JOIN_DISCUSSION_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
