import axios from "axios";

import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "@/constants/actionTypes";


export const register = (API_URL, user) => async (dispatch) => {
  dispatch({
    type: REGISTER_LOADING,
  });

  try {
    const response = await axios.post(`${API_URL}/user`, user);
    console.log(response);
    if (response.data.status) {
      dispatch({
        type: REGISTER_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: REGISTER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
