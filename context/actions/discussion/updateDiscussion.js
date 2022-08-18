import axios from "axios";
import {
  CREATE_DISCUSSION_LOADING,
  CREATE_DISCUSSION_SUCCESS,
  CREATE_DISCUSSION_ERROR,
} from "@/constants/actionTypes";
export const updateDiscussion =
  (API_URL, token, body, discId) => async (dispatch) => {
    dispatch({ type: CREATE_DISCUSSION_LOADING });

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.patch(
        `${API_URL}/discussion/${discId}/metadata`,
        body,
        config
      );
      dispatch({
        type: CREATE_DISCUSSION_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_DISCUSSION_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
