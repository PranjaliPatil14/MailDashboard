import React from "react";
import { Book, Circle, Inbox, Mail, Trash2 } from "react-feather";
import "./folder.css";

const folders = [
  {
    Icon: Inbox,
    title: "Inbox",
  },
  {
    Icon: Mail,
    title: "Sent Mails",
  },
  {
    Icon: Circle,
    title: "Important",
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

const Folders = () => {
  return (
    <div className="menu-folders">
      <p className="menu-folders-title">Folders</p>
      <ul className="folders">
        {folders.map(({ Icon, title }) => (
          <li className="folder-item" key={title}>
            <Icon className="folder-item-icon" /> {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Folders;
