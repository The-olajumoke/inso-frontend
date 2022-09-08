import axios from "axios";
import {
  UPDATE_STARTERPROMPT_LOADING,
  UPDATE_STARTERPROMPT_SUCCESS,
  UPDATE_STARTERPROMPT_ERROR,
} from "@/constants/actionTypes";

export const updateStarterPrompt =
  (API_URL, token, body, id) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_STARTERPROMPT_LOADING,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.patch(
        `${API_URL}/discussion/${id}/settings`,
        body,
        config
      );
      console.log(response);
      dispatch({
        type: UPDATE_STARTERPROMPT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_STARTERPROMPT_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
