import axios from "axios";
import {
  GET_POSTINSP_LOADING,
  GET_POSTINSP_SUCCESS,
  GET_POSTINSP_ERROR,
} from "@/constants/actionTypes";

export const getPostInspirations = (API_URL, token) => async (dispatch) => {
  try {
    dispatch({ type: GET_POSTINSP_LOADING });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_URL}/inspirations`, config);
    dispatch({
      type: GET_POSTINSP_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_POSTINSP_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
