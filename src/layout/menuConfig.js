import {
  AlertTriangle,
  Award,
  BarChart2,
  CloudLightning,
  Copy,
  Edit,
  Globe,
  Grid,
  Mail,
  Monitor,
  PieChart,
  Tv,
} from "react-feather";

const menuConfig = [
  {
    Component: Grid,
    key: "Grid",
    subMenu: [{ title: "Global Dashboard" }],
    title: "Dashboards",
  },
  { Component: Award, key: "Award", subMenu: [], title: "Layouts" },
  { Component: BarChart2, key: "BarChart2", subMenu: [], title: "Graphs" },
  {
    Component: Mail,
    key: "Mail",
    subMenu: [
      { title: "Inbox" },
      { title: "Email view" },
      { title: "Compose email" },
      { title: "Email templates" },
    ],
    title: "Mailbox",
    active: true,
  },
  { Component: PieChart, key: "PieChart", subMenu: [], title: "Metrics" },
  {
    Component: CloudLightning,
    key: "CloudLightning",
    subMenu: [],
    title: "Widgets",
  },
  {
    Component: Edit,
    key: "Edit",
    subMenu: [{ title: "Sign-up Form" }],
    title: "Forms",
  },
  { Component: Monitor, key: "Monitor", subMenu: [], title: "App Views" },
  { Component: Copy, key: "Copy", subMenu: [], title: "Files" },
  { Component: Globe, key: "Globe", subMenu: [], title: "World" },
  {
    Component: AlertTriangle,
    key: "AlertTriangle",
    subMenu: [],
    title: "Alerts",
  },
  { Component: Tv, key: "Tv", subMenu: [], title: "Monitor" },
];

export default menuConfig;
