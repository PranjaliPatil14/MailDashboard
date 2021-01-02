import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Eye,
  RefreshCw,
  Trash2,
} from "react-feather";
import React from "react";
import Button from "../../../components/button/Button";
import "./mailHeader.css";

const MailHeader = () => {
  return (
    <div className="mails-header">
      <div className="mails-header-title">
        <h2>Inbox</h2>
        <div className="mail-search">
          <input type="search" placeholder="Search email" />
          <Button onClick={() => {}}>Search</Button>
        </div>
      </div>
      <div className="mail-operations">
        <div className="mail-actions">
          <Button onClick={() => {}} className="mail-action">
            <RefreshCw /> Refresh
          </Button>
          <Button onClick={() => {}} className="mail-action">
            <Eye />
          </Button>
          <Button onClick={() => {}} className="mail-action">
            <AlertCircle />
          </Button>
          <Button onClick={() => {}} className="mail-action">
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

export default MailHeader;