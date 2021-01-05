import React, { useContext, useEffect } from "react";
import Header from "../../components/header/Header";
import "./mailInbox.css";
import Menu from "./menu/Menu";
import Inbox from "./mail/Inbox";
import { UserContext } from "../../context/userContext";

const MailInbox = () => {
  const { setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    setLoggedInUser({
      id: 2,
      name: "abc",
      role: "Art Director",
      profileImage: "profile-image.png",
    });
  }, [setLoggedInUser]);
  return (
    <div className="page">
      <Header />
      <div className="page-content">
        <Menu />
        <Inbox />
      </div>
    </div>
  );
};

export default MailInbox;
