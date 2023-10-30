import NavigationBar from "./Components/NavigationBar";
import Breadcrumb from "./Components/Breadcrumb";
import CourseList from "./Components/CourseList";
import React, { useState } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="col container ps-0">
      <NavigationBar />
      <Breadcrumb />
      <CourseList
        course={course}
        courses={courses}
        setCourse={setCourse}
        addNewCourse={addNewCourse}
        updateCourse={updateCourse}
        deleteCourse={deleteCourse}
      />
    </div>
  );
}
export default Dashboard;
