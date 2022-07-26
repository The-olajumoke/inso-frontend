import axios from "axios";
import {
  CREATE_DISCUSSION_LOADING,
  CREATE_DISCUSSION_SUCCESS,
  CREATE_DISCUSSION_ERROR,
} from "@/constants/actionTypes";
export const createDiscussion = (API_URL, body, token) => async (dispatch) => {
  dispatch({ type: CREATE_DISCUSSION_LOADING });

  //   try {
  //     // const config = {
  //     //   headers: {
  //     //     Authorization: `Bearer ${token}`,
  //     //   },
  //     // };
  //     const response = await axios.post(
  //       `${API_URL}/api/invservice/category/create`,
  //       body
  //       //   config
  //     );
  //     if (response.data.status === true) {
  //       dispatch({
  //         type: CREATE_DISCUSSION_SUCCESS,
  //         payload: response.data.data,
  //       });
  //     }
  //   } catch (error) {
  //     dispatch({
  //       type: CREATE_DISCUSSION_ERROR,
  //       payload:
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message,
  //     });
  //   }
};
