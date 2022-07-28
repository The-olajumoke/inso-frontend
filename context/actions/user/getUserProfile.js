import axios from "axios";

import {
  GET_USERPROFILE_LOADING,
  GET_USERPROFILE_SUCCESS,
  GET_USERPROFILE_ERROR,
} from "@/constants/actionTypes";

export const getUserProfile = (API_URL, token) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USERPROFILE_LOADING,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `${API_URL}/api/orgservice/user/me`,
      config
    );

    dispatch({
      type: GET_USERPROFILE_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USERPROFILE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
