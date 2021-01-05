import React from "react";
import "./App.css";
import MailContextProvider from "./context/mailContext";
import UserContextProvider from "./context/userContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <MailContextProvider>
          <Home />
        </MailContextProvider>
      </UserContextProvider>
    </div>
  );
};

export default App;
