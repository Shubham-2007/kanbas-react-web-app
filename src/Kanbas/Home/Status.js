import React from "react";
import {
  FaBan,
  FaCheckCircle,
  FaFileImport,
  FaBullseye,
  FaChartBar,
  FaBullhorn,
  FaBell,
  FaCalendar,
} from "react-icons/fa";

function CourseStatus() {
  const buttonsData = [
    {
      icon: FaFileImport,
      text: "Import Existing Content",
      marginLeft: "-23px",
    },
    { icon: FaFileImport, text: "Import From Commons", marginLeft: "-23px" },
    { icon: FaBullseye, text: "Choose Home Page", marginLeft: "-39px" },
    { icon: FaChartBar, text: "View Course Stream", marginLeft: "-36px" },
    { icon: FaBullhorn, text: "New Announcement", marginLeft: "-39px" },
    { icon: FaChartBar, text: "New Analytics", marginLeft: "-82px" },
    { icon: FaBell, text: "View Course Notifications", marginLeft: "0px" },
  ];

  const lecturesData = [
    { title: "Lecture CS4550.12631.202410 Sep 7 at 11:45am", href: "#" },
    { title: "Lecture CS4550.12631.202410 Sep 11 at 11:45am", href: "#" },
    { title: "CS5610 06 SP23 Lecture Sep 11 at 6pm", href: "#" },
    { title: "12 more in the next week...", href: "#" },
  ];

  return (
    <div className="col-3 d-none d-xl-block ms-1">
      <h5>Course Status</h5>
      <button className="btn btn-light text-dark" type="button">
        <FaBan style={{ marginRight: "10px" }} />
        Unpublish
      </button>
      <button className="btn btn-success" type="button">
        <FaCheckCircle style={{ marginRight: "10px" }} />
        Published
      </button>
      <ul className="list-group status_buttons">
        {buttonsData.map((button, index) => (
          <li
            key={index}
            className="list-group-item list-group-item-action ps-0"
          >
            <button
              className={`btn btn-light ps-0 ${
                button.text === "Import From Commons" ? "w-100" : ""
              }`}
            >
              <a
                href="#"
                className="text-dark"
                style={{ marginLeft: button.marginLeft }}
              >
                <button.icon style={{ marginRight: "10px" }} />
                {button.text}
              </a>
            </button>
          </li>
        ))}
      </ul>
      <div className="view_calender mt-3">
        <h6>
          Comming Up
          <a href="#" className="float-end">
            <FaCalendar />
            View Calender
          </a>
        </h6>
      </div>
      <hr />
      <ul className="list-group comming_up">
        {lecturesData.map((lecture, index) => (
          <li key={index} className="list-group-item list-group-item-action">
            <a href={lecture.href}>{lecture.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseStatus;
