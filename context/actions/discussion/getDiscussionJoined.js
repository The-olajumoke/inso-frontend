import axios from "axios";
import {
  GET_DISCUSSIONS_LOADING,
  GET_DISCUSSIONS_SUCCESS,
  GET_DISCUSSIONS_ERROR,
} from "@/constants/actionTypes";

export const getDiscJoined = (API_URL, token, userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_DISCUSSIONS_LOADING });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `${API_URL}/users/${userId}/discussions?participant=true`,
      config
    );
    console.log(response);
    dispatch({
      type: GET_DISCUSSIONS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_DISCUSSIONS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
