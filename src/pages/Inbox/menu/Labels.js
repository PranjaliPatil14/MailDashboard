import React from "react";
import { Tag } from "react-feather";
import "./labels.css";

const labels = [
  { title: "Family" },
  { title: "Work" },
  { title: "Home" },
  { title: "Children" },
  { title: "Holidays" },
  { title: "Music" },
  { title: "Photography" },
  { title: "Film" },
];

const Labels = () => {
  return (
    <div className="menu-labels">
      <p className="menu-labels-title">Labels</p>
      <ul className="labels">
        {labels.map(({ title, fill }) => (
          <li className="label-item" key={title}>
            <Tag className="label-item-icon" size={14} fill={fill} /> {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Labels;
