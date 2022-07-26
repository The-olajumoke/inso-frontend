import React, { createContext, useReducer } from "react";
import authInitialStates from "./initialStates/authInitialStates";
import layoutInitialStates from "./initialStates/layoutInitialStates";
// import discussionInitialStates from "./initialStates/discussionInitialStates";
import  discussionInitialStates  from "./initialStates/discussionInitialStates";

import auth from "./reducers/auth";
import layout from "./reducers/layout";
import discussion from "./reducers/discussion";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialStates);
  const [layoutState, layoutDispatch] = useReducer(layout, layoutInitialStates);
  const [discussionState, discussionDispatch] = useReducer(
    discussion,
    discussionInitialStates
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
