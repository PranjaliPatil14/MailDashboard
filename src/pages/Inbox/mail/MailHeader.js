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
import { MailContext } from "../../../context/mailContext";
import {
  CHANGE_IMPORTANCE,
  CHANGE_READ_STATUS,
  MARK_DELETED,
  REFRESH_MAILS,
} from "../../../context/mailReducer";

const MailHeader = ({ selectedMails }) => {
  const { dispatch } = useContext(MailContext);
  const { loggedInUserMails } = useContext(MailContext);
  return (
    <div className="mails-header">
      <div className="mails-header-title">
        <h2>Inbox ({loggedInUserMails.filter(({ read }) => !read).length})</h2>
        <div className="mail-search">
          <input type="search" placeholder="Search email" />
          <Button>Search</Button>
        </div>
      </div>
      <div className="mail-operations">
        <div className="mail-actions">
          <Button
            onClick={() => {
              dispatch({ type: REFRESH_MAILS, data: selectedMails });
            }}
            className="mail-action"
            testId={REFRESH_MAILS}
          >
            <RefreshCw /> Refresh
          </Button>
          <Button
            onClick={() => {
              dispatch({ type: CHANGE_READ_STATUS, data: selectedMails });
            }}
            className="mail-action"
            testId={CHANGE_READ_STATUS}
          >
            <Eye />
          </Button>
          <Button
            onClick={() => {
              dispatch({ type: CHANGE_IMPORTANCE, data: selectedMails });
            }}
            className="mail-action"
            testId={CHANGE_IMPORTANCE}
          >
            <AlertCircle />
          </Button>
          <Button
            onClick={() => {
              dispatch({ type: MARK_DELETED, data: selectedMails });
            }}
            className="mail-action"
            testId={MARK_DELETED}
          >
            <Trash2 />
          </Button>
        </div>
        <div className="mail-navigation">
          <Button className="mail-action">
            <ArrowLeft />
          </Button>
          <Button className="mail-action">
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
