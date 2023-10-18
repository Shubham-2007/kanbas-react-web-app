import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import {
  FaInbox,
  FaMicrophone,
  FaCaretRight,
  FaInfoCircle,
  FaUndo,
} from "react-icons/fa";
import logo from "../../Images/NeuLogo.png";
import "./index.css";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon red-icon" />,
    Courses: <FaBook className="wd-icon red-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon red-icon" />,
    Inbox: <FaInbox className="wd-icon red-icon" />,
    History: <FaUndo className="wd-icon red-icon" />,
    Studio: <FaMicrophone className="wd-icon red-icon" />,
    Commons: <FaCaretRight className="wd-icon red-icon" />,
    Help: <FaInfoCircle className="wd-icon red-icon" />,
  };
  const { pathname } = useLocation();

  const getIsActiveClass = (link) => (pathname.includes(link) ? "active" : "");

  return (
    <div className="list-group wd-kanbas-navigation d-none d-md-block">
      <Link
        to="/Kanbas/Dashboard"
        className={`list-group-item ${getIsActiveClass("/Kanbas")}`}
      >
        <img
          src={logo}
          alt="Neu Logo"
          className="img-thumbnail ps-0 pe-0 neu-logo"
        />
      </Link>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${getIsActiveClass(link)}`}
        >
          {linkToIconMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
