import React, { useEffect, useState } from "react";
import * as PropTypes from "prop-types";
import useLocalStorage, { USER } from "../utilities/useLocalStorage";

const initialUserContextValue = {
  users: [],
  loggedInUser: {
    id: 0,
    name: "",
    role: "",
    profileImage: "",
  },
  setLoggedInUser: () => {},
  setUsers: () => {},
};

export const UserContext = React.createContext(initialUserContextValue);

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  const { value } = useLocalStorage(USER);

  useEffect(() => {
    if (!users.length) {
      setUsers(value);
    }
  }, [users.length, value]);

  return (
    <UserContext.Provider
      value={{ users, setUsers, loggedInUser, setLoggedInUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
