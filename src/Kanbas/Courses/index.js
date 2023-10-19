import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "./index.css";
import Breadcrumb from "./Components/Breadcrumb";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import Grades from "../Grades";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className="row">
      <Breadcrumb courseName={course.name} />
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
