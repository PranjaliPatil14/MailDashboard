import React, { useContext } from "react";
import * as PropTypes from "prop-types";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Eye,
  RefreshCw,
  Trash2,
} from "react-feather";
import Button from "../../../components/button/Button";
import "./mailHeader.css";
import {
  CHANGE_IMPORTANCE,
  CHANGE_READ_STATUS,
  MailContext,
  MARK_DELETED,
  REFRESH_MAILS,
} from "../../../context/mailContext";

const MailHeader = ({ selectedMails }) => {
  const { dispatch } = useContext(MailContext);
  const { loggedInUserMails } = useContext(MailContext);
  return (
    <div className="mails-header">
      <div className="mails-header-title">
        <h2>Inbox ({loggedInUserMails.filter(({ read }) => !read).length})</h2>
        <div className="mail-search">
          <input type="search" placeholder="Search email" />
          <Button onClick={() => {}}>Search</Button>
        </div>
      </div>
      <div className="mail-operations">
        <div className="mail-actions">
          <Button
            onClick={() => {
              dispatch({ type: REFRESH_MAILS, data: selectedMails });
            }}
            className="mail-action"
          >
            <RefreshCw /> Refresh
          </Button>
          <Button
            onClick={() => {
              dispatch({ type: CHANGE_READ_STATUS, data: selectedMails });
            }}
            className="mail-action"
          >
            <Eye />
          </Button>
          <Button
            onClick={() => {
              dispatch({ type: CHANGE_IMPORTANCE, data: selectedMails });
            }}
            className="mail-action"
          >
            <AlertCircle />
          </Button>
          <Button
            onClick={() => {
              dispatch({ type: MARK_DELETED, data: selectedMails });
            }}
            className="mail-action"
          >
            <Trash2 />
          </Button>
        </div>
        <div className="mail-navigation">
          <Button onClick={() => {}} className="mail-action">
            <ArrowLeft />
          </Button>
          <Button onClick={() => {}} className="mail-action">
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

MailHeader.propTypes = {
  selectedMails: PropTypes.instanceOf(Array).isRequired,
};

export default MailHeader;
