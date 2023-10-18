import db from "../Database";
import NavigationBar from "./Components/NavigationBar";
import Breadcrumb from "./Components/Breadcrumb";
import CourseList from "./Components/CourseList";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="col container ps-0">
      <NavigationBar />
      <Breadcrumb />
      <CourseList courses={courses} />
    </div>
  );
}
export default Dashboard;
