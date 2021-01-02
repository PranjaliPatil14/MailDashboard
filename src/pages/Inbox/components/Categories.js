import React from "react";
import { Circle } from "react-feather";
import "./categories.css";

const categories = [
  { title: "Work", fill: "green" },
  { title: "Document", fill: "red" },
  { title: "Social", fill: "yellow" },
  { title: "Advertising", fill: "orange" },
  { title: "Clients", fill: "blue" },
];

const Categories = () => {
  return (
    <div className="menu-categories">
      <p className="menu-categories-title">Categories</p>
      <ul className="categories">
        {categories.map(({ title, fill }) => (
          <li className="category-item" key={title}>
            <Circle className="category-item-icon" size={16} fill={fill} />{" "}
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
