import React from "react";
import {
  FaBars,
  FaGlasses,
  FaHome,
  FaPlug,
  FaPenToSquare,
  FaRocket,
  FaBook,
  FaPerson,
  FaComments,
  FaBullhorn,
  FaFileLines,
  FaFolder,
  FaClipboardList,
  FaBullseye,
  FaCircle,
  FaGear,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseNavigationMenu = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center text-white bg-dark pt-4 pb-4 fs-4 align-middle">
          <Link
            className="text-decoration-none text-danger"
            to="/Kanbas/Courses"
          >
            <button
              type="button"
              className="btn border border-1 text-white float-end fs-3"
              style={{ marginTop: "-10px" }}
              aria-label="Close"
            >
              x
            </button>
          </Link>
          <Link
            className="text-decoration-none text-danger"
            to="/Kanbas/KanbasNavigation/screen.html"
          >
            <FaBars className="float-start mt-1" style={{ color: "#ffffff" }} />
          </Link>
          <FaGlasses
            className="float-end mt-1 me-3"
            style={{ color: "#ffffff" }}
          />
          <div>
            <u>CS 5610.12631.202410 Modules</u>
          </div>
        </div>
        {/* ... repeat for each navigation item ... */}
        <div className="col-12 text-danger fs-4">
          <FaHome className="text-danger" />
          <Link
            className="text-decoration-none text-danger"
            to="/Kanbas/Courses"
          >
            Home
          </Link>
        </div>
        <div className="col-12 text-danger fs-4">
          <FaCircle className="text-danger" />
          <Link className="text-decoration-none text-danger" to="#">
            Module
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseNavigationMenu;
