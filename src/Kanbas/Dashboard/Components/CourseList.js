import React, { useState } from "react";
import CourseCard from "./CourseCard";
import "../index.css";
import CourseForm from "./CourseForm";

function CourseList({
  course,
  courses,
  setCourse,
  addNewCourse,
  updateCourse,
  deleteCourse,
}) {
  return (
    <div className="d-flex flex-row flex-wrap ms-4">
      <div className="col-12 fs-4">
        <span>Published Courses ({courses.length})</span>
      </div>
      <hr className="w-100" />
      <CourseForm
        course={course}
        setCourse={setCourse}
        addNewCourse={addNewCourse}
        updateCourse={updateCourse}
      />
      <hr className="w-100" />
      {courses.map((course) => (
        <CourseCard
          key={course._id}
          course={course}
          deleteCourse={deleteCourse}
          setCourse={setCourse}
        />
      ))}
    </div>
  );
}

export default CourseList;
