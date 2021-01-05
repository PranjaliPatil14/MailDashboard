import React, { useContext, useEffect, useReducer } from "react";
import * as PropTypes from "prop-types";
import useLocalStorage, { MAIL } from "../utilities/useLocalStorage";
import { UserContext } from "./userContext";
import {
  mailReducer,
  SET_LOGGED_IN_USER_MAIL,
  SET_VALUES,
} from "./mailReducer";

const initialMailContextValue = {
  mails: [],
  refresh: true,
  loggedInUserMails: [],
  dispatch: () => {},
};

export const MailContext = React.createContext(initialMailContextValue);

const MailContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mailReducer, initialMailContextValue);
  const { value } = useLocalStorage(MAIL);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    if (state.refresh) {
      dispatch({ type: SET_VALUES, data: value });
    }
  }, [value, state.refresh]);

  useEffect(() => {
    dispatch({ type: SET_LOGGED_IN_USER_MAIL, data: loggedInUser.id });
  }, [loggedInUser, value, state.mails]);

  useEffect(() => {
    localStorage.setItem(MAIL, JSON.stringify(state.mails));
  }, [state.mails]);

  return (
    <MailContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MailContext.Provider>
  );
};

MailContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MailContextProvider;
