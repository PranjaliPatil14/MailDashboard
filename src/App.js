import React from "react";
import Navigation from "./layout/Navigation";
import "./App.css";
import MailInbox from "./pages/Inbox/MailInbox";
import MailContextProvider from "./context/mailContext";
import UserContextProvider from "./context/userContext";

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <MailContextProvider>
          <Navigation>
            <MailInbox />
          </Navigation>
        </MailContextProvider>
      </UserContextProvider>
    </div>
  );
};

export default App;
