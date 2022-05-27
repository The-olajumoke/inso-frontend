import React, { createContext, useReducer } from "react";
import authInitialStates from "./initialStates/authInitialStates";
import layoutInitialStates from "./initialStates/layoutInitialStates";
import auth from "./reducers/auth";
import layout from "./reducers/layout";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialStates);
  const [layoutState, layoutDispatch] = useReducer(layout, layoutInitialStates);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        layoutState,
        layoutDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};