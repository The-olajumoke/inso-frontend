import axios from "axios";
// import {
//   UPDATE_STARTERPROMPT_LOADING,
//   UPDATE_STARTERPROMPT_SUCCESS,
//   UPDATE_STARTERPROMPT_ERROR,
// } from "@/constants/actionTypes";

export const addCalendarToDiscSettings =
  (API_URL, token, body, discId) => async (dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.patch(
        `${API_URL}/discussion/${discId}/settings`,
        body,
        config
      );
      console.log(response);
    } catch (error) {}
  };
