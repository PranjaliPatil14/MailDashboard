import React, { useContext } from "react";
import { Book, Circle, Inbox, Mail, Trash2 } from "react-feather";
import "./folder.css";
import { MailContext } from "../../../context/mailContext";
import Badge from "../../../components/badge/Badge";

const Folders = () => {
  const { loggedInUserMails } = useContext(MailContext);
  const folders = [
    {
      Icon: Inbox,
      title: "Inbox",
      badge: loggedInUserMails.filter(({ read }) => !read).length,
    },
    {
      Icon: Mail,
      title: "Sent Mails",
    },
    {
      Icon: Circle,
      title: "Important",
      badge: loggedInUserMails.filter(({ important }) => important).length,
    },
    {
      Icon: Book,
      title: "Drafts",
    },
    {
      Icon: Trash2,
      title: "Trash",
    },
  ];
  return (
    <div className="menu-folders">
      <p className="menu-folders-title">Folders</p>
      <ul className="folders">
        {folders.map(({ Icon, title, badge }) => (
          <li className="folder-item" key={title}>
            <Icon className="folder-item-icon" /> {title}
            {badge ? <Badge text={badge} /> : <></>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Folders;
