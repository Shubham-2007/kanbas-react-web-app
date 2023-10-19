import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import { FaEyeSlash } from "react-icons/fa";

function CourseNavigation() {
  const links = [
    { label: "Home" },
    { label: "Modules" },
    { label: "Piazza" },
    { label: "Zoom Meetings" },
    { label: "Assignments" },
    { label: "Quizzes" },
    { label: "Grades" },
    { label: "People" },
    { label: "Panopto Video" },
    { label: "Discussions", icon: true },
    { label: "Announcements", icon: true },
    { label: "Pages", icon: true },
    { label: "Files", icon: true },
    { label: "Rubrics", icon: true },
    { label: "Outcomes", icon: true },
    { label: "Collaborations", icon: true },
    { label: "Syllabus" },
    { label: "Settings" },
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <div
      className="col-2 d-none d-md-block text-wrap me-3 "
      style={{ paddingLeft: "20px" }}
    >
      <ul className="wd-course-navigation">
        {links.map((link, index) => (
          <li
            style={
              pathname.includes(link.label)
                ? { borderLeft: "2px solid black" }
                : {}
            }
          >
            <Link
              key={index}
              to={`/Kanbas/Courses/${courseId}/${link.label}`}
              className={`list-group-item ${
                pathname.includes(link.label) && "active"
              }`}
            >
              {link.label}
              {link.icon && (
                <div className="float-end">
                  <FaEyeSlash />
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseNavigation;
