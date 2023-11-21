import { Navigate, Route, Routes, useParams, Link } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "./index.css";
import Breadcrumb from "./Components/Breadcrumb";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import Grades from "../Grades";
import { FaBars, FaChevronDown } from "react-icons/fa";
import AssignmentAdd from "../Assignments/AssignmentEditor/AssignmentAdd";
import { useState, useEffect } from "react";
import axios from "axios";
 
const CourseNavigationMin = ({ courseName }) => {
  return (
    <div className="d-block d-md-none wd-course-navigation-sm-size">
      <div className="row">
        <div className="col-2">
          <Link to="#">
            <FaBars size={32} />
          </Link>
        </div>
        <div className="col-8">{courseName}</div>
        <div className="col-2">
          <Link to="#">
            <FaChevronDown size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};



function Courses() {
  const { courseId } = useParams();
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  // const course = courses.find((course) => course._id === courseId);
  // console.log(course);
  return (
    <div className="row">
      <Breadcrumb courseName={course.name} />
      <CourseNavigationMin courseName={course.name} />
      <hr style={{ marginLeft: "15px", marginTop: "20px", width: "95%" }} />
      <CourseNavigation />
      <div className="col">
        <div
          // className="overflow-y-scroll position-fixed bottom-0 end-0"
          className="bottom-0 end-0"
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/AddAssignment"
              element={<AssignmentAdd />}
            />
            <Route
              path="Assignments/:assignmentId/*"
              element={<AssignmentEditor />}
            />

            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
