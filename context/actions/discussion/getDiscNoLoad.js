import axios from "axios";
import {
  GET_SINGLE_DISCUSSION_LOADING,
  GET_SINGLE_DISCUSSION_SUCCESS,
  GET_SINGLE_DISCUSSION_ERROR,
} from "@/constants/actionTypes";

export const getDiscNoLoad =
  (API_URL, token, discId) => async (dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${API_URL}/discussion/${discId}`,
        config
      );
      console.log(response);
      dispatch({
        type: GET_SINGLE_DISCUSSION_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_SINGLE_DISCUSSION_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
