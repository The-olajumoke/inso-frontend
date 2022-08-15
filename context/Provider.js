import React, { createContext, useReducer } from "react";
import authInitialStates from "./initialStates/authInitialStates";
import layoutInitialStates from "./initialStates/layoutInitialStates";
import userInitialStates from "./initialStates/userInitialStates";
import discussionInitialStates from "./initialStates/discussionInitialStates";
import notificationInitialStates from "./initialStates/notificationInitialStates";
import auth from "./reducers/auth";
import layout from "./reducers/layout";
import discussion from "./reducers/discussion";
import user from "./reducers/user";
import notification from "./reducers/notification";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialStates);
  const [layoutState, layoutDispatch] = useReducer(layout, layoutInitialStates);
  const [discussionState, discussionDispatch] = useReducer(
    discussion,
    discussionInitialStates
  );
  const [userState, userDispatch] = useReducer(user, userInitialStates);
  const [notificationState, notificationDispatch] = useReducer(
    notification,
    notificationInitialStates
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        layoutState,
        layoutDispatch,
        discussionState,
        discussionDispatch,
        userState,
        userDispatch,
        notificationState,
        notificationDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
