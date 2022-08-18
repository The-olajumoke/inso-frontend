import axios from "axios";
import {
  POST_LOADING,
  POST_SUCCESS,
  POST_ERROR,
} from "@/constants/actionTypes";
export const createPost =
  (API_URL, token, discId, body) => async (dispatch) => {
    dispatch({ type: POST_LOADING });

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `${API_URL}/discussion/${discId}/post`,
        body,
        config
      );
      dispatch({
        type: POST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: POST_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
