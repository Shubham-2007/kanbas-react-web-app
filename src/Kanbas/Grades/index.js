import db from "../Database";
import { useParams } from "react-router-dom";
import { FaCog, FaFileExport, FaFileImport, FaFilter } from "react-icons/fa";

const Toolbar = () => {
  return (
    <div className="col-12 mb-5">
      <button className="btn btn-secondary float-end" type="button">
        <FaCog color="#000000" />
      </button>

      <span className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle float-end me-2"
          type="button"
          id="export"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaFileExport color="#0a0a0a" style={{ transform: "scaleX(-1)" }} />
          Export
        </button>
        <ul className="dropdown-menu" aria-labelledby="export">
          <li>
            <a className="dropdown-item" href="#">
              Export
            </a>
          </li>
        </ul>
      </span>

      <button className="btn btn-secondary float-end me-2" type="button">
        <FaFileImport color="#1b1c1d" />
        Import
      </button>

      <select
        className="form-select w-25 d-inline float-end me-2"
        aria-label="Gradebook"
      >
        <option value="Gradebook" selected>
          Gradebook
        </option>
      </select>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="col-12 mb-3">
      <div className="row">
        <div className="col-6">
          <h5>Student Names</h5>
        </div>
        <div className="col-6">
          <h5>Assignment Names</h5>
        </div>
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            name="StudentName"
            placeholder="Search Students"
            title="Search using name of the students"
          />
        </div>
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            name="AssignmentName"
            placeholder="Search Assignments"
            title="Search using name of the assignments"
          />
        </div>
      </div>
    </div>
  );
};

const FilterButton = () => {
  return (
    <div className="col-12 mb-3">
      <button className="btn btn-secondary" type="button">
        <FaFilter color="#000000" aria-hidden="true" />
        Apply Filters
      </button>
    </div>
  );
};


function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );

  return (
    <div className="row me-5">
      <Toolbar />
      <SearchBar />
      <FilterButton />
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle text-center fixed-width-table">
          <thead>
            <tr className="align-middle">
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
