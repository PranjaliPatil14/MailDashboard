import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import "./mailInbox.css";
import Menu from "./menu/Menu";
import Inbox from "./mail/Inbox";
import { UserContext } from "../../context/userContext";
import ComposeEmail from "../ComposeEmail/ComposeEmail";

const MailInbox = () => {
  const { setLoggedInUser } = useContext(UserContext);
  const [showCompose, setShowCompose] = useState(false);

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
      {showCompose && <ComposeEmail setShowCompose={setShowCompose} />}
      <Header />
      <div className="page-content">
        <Menu setShowCompose={setShowCompose} />
        <Inbox />
      </div>
    </div>
  );
};

export default MailInbox;
