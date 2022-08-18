import axios from "axios";

export const addAvailScoresToSettings =
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
