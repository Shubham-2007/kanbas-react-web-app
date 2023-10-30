import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function CourseCard({ course, deleteCourse, setCourse }) {
  return (
    <div className="card text-dark">
      <div className="card-header bg-primary" style={{ height: "100px" }}></div>
      <div className="card-body">
        <Link
          to={`/Kanbas/Courses/${course._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <h5 className="card-title bg-white">
            {course.number} {course.name}
          </h5>
          <p className="card-text">
            Start Date: {course.startDate} | End Date: {course.endDate}
          </p>
          <i className="fa-solid fa-file-pen" style={{ fontSize: "20px" }}></i>
          <button
            onClick={(event) => {
              event.preventDefault();
              setCourse(course);
            }}
            className="btn btn-warning m-2"
          >
            Edit
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              deleteCourse(course._id);
            }}
            className="btn btn-danger m-1"
          >
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
