import React from "react";
import Navigation from "./layout/Navigation";
import "./App.css";
import MailInbox from "./pages/Inbox/MailInbox";

const App = () => {
  return (
    <div className="App">
      <Navigation>
        <MailInbox />
      </Navigation>
    </div>
  );
};

export default App;
