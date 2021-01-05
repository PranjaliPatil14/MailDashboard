import React, { useContext } from "react";
import MailInbox from "./Inbox/MailInbox";
import Navigation from "../layout/Navigation";
import { UserContext } from "../context/userContext";
import Login from "./Login/Login";

const Home = () => {
  const { loggedInUser } = useContext(UserContext);
  return Object.keys(loggedInUser).length ? (
    <Navigation>
      <MailInbox />
    </Navigation>
  ) : (
    <Login />
  );
};

export default Home;
