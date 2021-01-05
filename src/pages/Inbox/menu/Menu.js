import React from "react";
import * as PropTypes from "prop-types";
import Button from "../../../components/button/Button";
import Folders from "./Folders";
import Categories from "./Categories";
import Labels from "./Labels";
import "./menu.css";

const Menu = ({ setShowCompose }) => {
  return (
    <div className="inbox-menu">
      <Button
        type="submit"
        onClick={() => setShowCompose(true)}
        className="compose-mail"
      >
        Compose Mail
      </Button>
      <Folders />
      <Categories />
      <Labels />
    </div>
  );
};

Menu.propTypes = {
  setShowCompose: PropTypes.func.isRequired,
};

export default Menu;
