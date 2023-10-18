import React from "react";
import CourseCard from "./CourseCard";
import "../index.css";

function CourseList({ courses }) {
  return (
    <div className="d-flex flex-row flex-wrap ms-4">
      <div className="col-12 fs-4">
        <span>Published Courses (24)</span>
      </div>
      <hr className="w-100" />
      {courses.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
}
export default CourseList;
