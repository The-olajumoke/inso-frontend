import axios from "axios";

import {
  LOG_IN_ERROR,
  LOG_IN_LOADING,
  LOG_IN_SUCCESS,
} from "@/constants/actionTypes";

export const loginWithCode = (API_URL, user, insoCode) => async (dispatch) => {
  dispatch({
    type: LOG_IN_LOADING,
  });

  try {
    const response = await axios.post(`${API_URL}/auth/login`, user);

    const token = response.data.access_token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const userProfile = await axios.get(`${API_URL}/profile`, config);
    const userId = userProfile.data._id;

    const joinDisc = await axios.patch(
      `${API_URL}/users/${userId}/discussions/${insoCode}/join`,
      {},
      config
    );
    if (joinDisc.data) {
      location.replace(`/discussions/view-discussion/${joinDisc.data}`);
    }

    console.log(userProfile);

    dispatch({
      type: LOG_IN_SUCCESS,
      payload: token,
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
