import Toolbar from "../Modules/Components/Toolbar";
import ModuleList from "../Modules/ModuleList";
import CourseStatus from "./Status";


function Home() {
  return (
    <div className="d-flex">
      <div>
        <Toolbar />
        <ModuleList />
      </div>
      <CourseStatus />
    </div>
  );
}
export default Home;
