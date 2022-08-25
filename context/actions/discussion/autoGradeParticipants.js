import axios from "axios";
import {
  GRADE_PARTICIPANTS_LOADING,
  GRADE_PARTICIPANTS_SUCCESS,
  GRADE_PARTICIPANTS_ERROR,
} from "@/constants/actionTypes";
export const gradeParticipants =
  (API_URL, token, discId) => async (dispatch) => {
    dispatch({ type: GRADE_PARTICIPANTS_LOADING });

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.patch(
        `${API_URL}/discussion/${discId}/participants/autograde`,
        {},
        config
      );
      console.log(response);
      dispatch({
        type: GRADE_PARTICIPANTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GRADE_PARTICIPANTS_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
