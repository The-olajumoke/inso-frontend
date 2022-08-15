import axios from "axios";
import jwt from "jsonwebtoken";

import {
  GOOGLE_ERROR,
  GOOGLE_LOADING,
  GOOGLE_SUCCESS,
} from "@/constants/actionTypes";

export const signInWithGoogle = (API_URL) => async (dispatch) => {
  dispatch({
    type: GOOGLE_LOADING,
  });

  try {
    const response = await axios.get(`${API_URL}/google`);
    console.log(response);
    dispatch({
      type: GOOGLE_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GOOGLE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
