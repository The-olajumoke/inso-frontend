import axios from "axios";
import {
  UPDATE_USERPROFILE_LOADING,
  UPDATE_USERPROFILE_SUCCESS,
  UPDATE_USERPROFILE_ERROR,
} from "@/constants/actionTypes";

export const updateUserProfile =
  (API_URL, token, userId, body) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_USERPROFILE_LOADING,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.patch(
        `${API_URL}/user/${userId}`,
        body,
        config
      );
      console.log(response);
      dispatch({
        type: UPDATE_USERPROFILE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_USERPROFILE_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
