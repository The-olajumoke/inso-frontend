import axios from "axios";
import {
  UPDATE_POSTINSP_LOADING,
  UPDATE_POSTINSP_SUCCESS,
  UPDATE_POSTINSP_ERROR,
} from "@/constants/actionTypes";

export const updatePostInsp =
  (INV_API_URL, body, token, id) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_POSTINSP_LOADING,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        `${INV_API_URL}/api/invservice/category/put/${id}`,
        body,
        config
      );
      if (response.data.status === true) {
        dispatch({
          type: UPDATE_POSTINSP_SUCCESS,
          payload: response.data.data,
        });
      }
    } catch (error) {
      dispatch({
        type: UPDATE_POSTINSP_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
