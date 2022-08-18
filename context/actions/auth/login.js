import axios from "axios";

import {
  LOG_IN_ERROR,
  LOG_IN_LOADING,
  LOG_IN_SUCCESS,
} from "@/constants/actionTypes";

export const login = (API_URL, user) => async (dispatch) => {
  dispatch({
    type: LOG_IN_LOADING,
  });

  try {
    const response = await axios.post(`${API_URL}/auth/login`, user);

    dispatch({
      type: LOG_IN_SUCCESS,
      payload: response.data.access_token,
    });
  } catch (error) {
    dispatch({
      type: LOG_IN_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
