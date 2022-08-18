import axios from "axios";
import {
  UPDATE_SCORES_LOADING,
  UPDATE_SCORES_SUCCESS,
  UPDATE_SCORES_ERROR,
} from "@/constants/actionTypes";

export const createScores =
  (API_URL, token, body, userId) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_SCORES_LOADING,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `${API_URL}/users/${userId}/score`,
        body,
        config
      );
      console.log(response);
      dispatch({
        type: UPDATE_SCORES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_SCORES_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
