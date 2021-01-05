import React, { useContext, useEffect, useReducer } from "react";
import * as PropTypes from "prop-types";
import useLocalStorage, { MAIL } from "../utilities/useLocalStorage";
import { UserContext } from "./userContext";

const initialMailContextValue = {
  mails: [],
  refresh: true,
  loggedInUserMails: [],
  totalCount: 0,
  readCount: 0,
  deleteCount: 0,
  dispatch: () => {},
};

export const MailContext = React.createContext(initialMailContextValue);

export const CHANGE_READ_STATUS = "CHANGE_READ_STATUS";
export const SEND_MAIL = "SEND_MAIL";
export const REFRESH_MAILS = "REFRESH_MAILS";
export const MARK_DELETED = "MARK_DELETED";
export const CHANGE_IMPORTANCE = "CHANGE_IMPORTANCE";
export const SET_VALUES = "SET_VALUES";
export const SET_LOGGED_IN_USER_MAIL = "SET_LOGGED_IN_USER_MAIL";

const changeReadStatus = (data, targetId) => {
  return data.map((mail) => {
    if (targetId.includes(mail.id)) {
      return {
        ...mail,
        read: !mail.read,
      };
    }
    return mail;
  });
};

const changeImportance = (data, targetId) => {
  return data.map((mail) => {
    if (targetId.includes(mail.id)) {
      return {
        ...mail,
        important: !mail.important,
      };
    }
    return mail;
  });
};

const deleteMail = (data, targetId) => {
  return data.filter((mail) => !targetId.includes(mail.id));
};

const mailReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_READ_STATUS:
      return {
        ...state,
        mails: changeReadStatus(state.mails, action.data),
      };
    case MARK_DELETED:
      return {
        ...state,
        mails: deleteMail(state.mails, action.data),
      };
    case CHANGE_IMPORTANCE:
      return {
        ...state,
        mails: changeImportance(state.mails, action.data),
      };
    case SET_LOGGED_IN_USER_MAIL:
      return {
        ...state,
        loggedInUserMails: state.mails.filter(
          ({ to, cc }) => to.includes(action.data) || cc.includes(action.data)
        ),
      };
    case SET_VALUES:
      return {
        ...state,
        mails: action.data,
        refresh: false,
      };
    case REFRESH_MAILS:
      return {
        ...state,
        refresh: true,
      };
    case SEND_MAIL:
      return {
        ...state,
        mails: [...state.mails, action.data],
      };
    default:
      return state;
  }
};

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
