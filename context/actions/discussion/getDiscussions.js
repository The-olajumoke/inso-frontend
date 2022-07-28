import axios from "axios";
import {
  GET_DISCUSSIONS_LOADING,
  GET_DISCUSSIONS_SUCCESS,
  GET_DISCUSSIONS_ERROR,
} from "@/constants/actionTypes";

export const getDiscussions = (INV_API_URL, token) => async (dispatch) => {
  try {
    dispatch({ type: GET_DISCUSSIONS_LOADING });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `${INV_API_URL}/api/invservice/category/get`,
      config
    );
    dispatch({
      type: GET_DISCUSSIONS_SUCCESS,
      payload: response.data.data,
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
