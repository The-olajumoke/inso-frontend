import axios from "axios";
import {
  UPDATE_USERPASSWORD_LOADING,
  UPDATE_USERPASSWORD_SUCCESS,
  UPDATE_USERPASSWORD_ERROR,
} from "@/constants/actionTypes";

export const updateUserPassword =
  (API_URL, token, userId, body) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_USERPASSWORD_LOADING,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.patch(
        `${API_URL}/users/${userId}/reset-password`,
        body,
        config
      );
      console.log(response);
      dispatch({
        type: UPDATE_USERPASSWORD_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: UPDATE_USERPASSWORD_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
