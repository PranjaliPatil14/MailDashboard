import React from "react";
import Navigation from "./layout/Navigation";
import "./App.css";
import Inbox from "./pages/Inbox/Inbox";

const App = () => {
  return (
    <div className="App">
      <Navigation>
        <Inbox />
      </Navigation>
    </div>
  );
};

export default App;
