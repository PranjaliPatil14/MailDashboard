import React from "react";
import SideBar from "./layout/SideBar";
import "./App.css";
import Inbox from "./pages/Inbox";

const App = () => {
  return (
    <div className="App">
      <SideBar>
        <Inbox />
      </SideBar>
    </div>
  );
};

export default App;
