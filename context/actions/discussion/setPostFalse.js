import axios from "axios";
import { POST_FALSE } from "@/constants/actionTypes";
export const setPostFalse = () => async (dispatch) => {
  dispatch({ type: POST_FALSE });
};
