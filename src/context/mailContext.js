import React, { useContext, useEffect, useReducer } from "react";
import * as PropTypes from "prop-types";
import useLocalStorage, { MAIL } from "../utilities/useLocalStorage";
import { UserContext } from "./userContext";

const initialMailContextValue = {
  mails: [],
  loggedInUserMails: [],
  totalCount: 0,
  readCount: 0,
  deleteCount: 0,
  dispatch: () => {},
};

export const MailContext = React.createContext(initialMailContextValue);

const MARK_AS_READ = "MARK_AS_READ";
const MARK_DELETED = "MARK_DELETED";
const MARK_IMPORTANT = "MARK_IMPORTANT";
const SET_VALUES = "SET_VALUES";
const SET_LOGGED_IN_USER_MAIL = "SET_LOGGED_IN_USER_MAIL";

const mailReducer = (state, action) => {
  switch (action.type) {
    case MARK_AS_READ:
      return state;
    case MARK_DELETED:
      return state;
    case MARK_IMPORTANT:
      return state;
    default:
      return state;
    case SET_LOGGED_IN_USER_MAIL:
      return {
        ...state,
        loggedInUserMails: state.mails.filter(({ to }) =>
          to.includes(action.data)
        ),
      };
    case SET_VALUES:
      return {
        ...state,
        mails: action.data,
      };
  }
};

const MailContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mailReducer, initialMailContextValue);
  const { value } = useLocalStorage(MAIL);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    dispatch({ type: SET_VALUES, data: value });
  }, [value]);

  useEffect(() => {
    dispatch({ type: SET_LOGGED_IN_USER_MAIL, data: loggedInUser.id });
  }, [loggedInUser, value]);

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
