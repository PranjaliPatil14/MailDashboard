import React from "react";
import Button from "../../../components/button/Button";
import "./menu.css";
import Folders from "./Folders";
import Categories from "./Categories";
import Labels from "./Labels";

const Menu = () => {
  return (
    <div className="inbox-menu">
      <Button type="submit" onClick={() => {}} className="compose-mail">
        Compose Mail
      </Button>
      <Folders />
      <Categories />
      <Labels />
    </div>
  );
};

export default Menu;
