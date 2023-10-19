import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const AssignmentForm = ({ title, handleSave, courseId }) => {
  return (
    <form action="#">
      <div className="row mt-5">
        <label className="ps-0" for="assignment_name">
          Assignment Name
        </label>
        <input
          type="text"
          name="assignment_name"
          id="assignment_name"
          className="form-control w-50"
          value={title}
        />
      </div>
      <div className="row mt-5">
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          className="form-control w-50"
        >
          Assignment Description
        </textarea>
      </div>
      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="points">
            Points
          </label>
        </div>
        <div className="col-4">
          <input
            type="number"
            id="points"
            min="0"
            max="100"
            value="100"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="assignment-group">
            Assignment Group
          </label>
        </div>
        <div className="col-4">
          <select
            id="assignment-group"
            className="form-select"
            aria-label="Default select example"
          >
            <option value="ASSIGNMENTS" selected />
            ASSIGNMENTS
          </select>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="grade-display">
            Display Grade as
          </label>
        </div>
        <div className="col-4">
          <select
            id="grade-display"
            className="form-select"
            aria-label="Default select example"
          >
            <option value="Percentage" selected />
            Percentage
          </select>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="submission-type">
            Submission Type
          </label>
        </div>
        <div className="col-4">
          <select
            id="submission-type"
            className="form-select"
            aria-label="Default select example"
          >
            <option value="submission-type" selected /> Online
          </select>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="submission-type">
            Submission Type
          </label>
        </div>
        <div className="col-4 border border-secondary">
          <select
            id="submission-type"
            className="form-select mt-3 w-75"
            aria-label="Default select example"
          >
            <option value="submission-type" selected /> Online
          </select>
          <br />
          <h5>Online Entry options</h5>
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" /> Text Entry
          </label>
          <br />
          <label className="mt-3 form-check-label">
            <input className="form-check-input" type="checkbox" /> Website URL
          </label>
          <br />
          <label className="mt-3 form-check-label">
            <input className="form-check-input" type="checkbox" /> Media
            Recordings
          </label>
          <br />
          <label className="mt-3 form-check-label">
            <input className="form-check-input" type="checkbox" /> Student
            Annotation
          </label>
          <br />
          <label className="mt-3 mb-3 form-check-label">
            <input className="form-check-input" type="checkbox" /> File Uploads
          </label>
          <br />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="submission-attempts">
            Submission Attempts
          </label>
        </div>
        <div className="col-4">
          <select
            id="submission-attempts"
            className="form-select"
            aria-label="Default select example"
          >
            <option value="Submission Attempts" selected />
            Unlimited
          </select>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="plagiarism-review">
            Plagiarism Review
          </label>
        </div>
        <div className="col-4">
          <select
            id="plagiarism-review"
            className="form-select"
            aria-label="Default select example"
          >
            <option value="plagiarism-review" selected />
            None
          </select>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="Group Assignment">
            Group Assignment
          </label>
        </div>
        <div className="col-4">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" /> This is a
            group assignment
          </label>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="Peer Reviews">
            Peer Reviews
          </label>
        </div>
        <div className="col-4">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" /> Require Peer
            Reviews
          </label>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" htmlFor="Assign">
            Assign
          </label>
        </div>
        <div className="col-10">
          <div className="row border border-1" style={{ width: "45%" }}>
            <div className="col-12">
              <label className="form-label mt-3">
                <h4>Assign to</h4>
                <input
                  className="form-control"
                  id="Assign"
                  type="text"
                  value="Everyone"
                />
              </label>
            </div>

            <div className="col-12">
              <label className="form-label" for="Due">
                {" "}
                Due
              </label>
              <input
                className="form-control"
                id="Due"
                type="date"
                value="2021-01-01"
              />
            </div>

            <div className="col-6 pe-0 mt-3">
              <label className="form-label" for="available-from">
                Available from
              </label>
              <input
                className="form-control"
                id="available-from"
                type="date"
                value="2021-01-01"
              />
            </div>

            <div className="col-6 ps-1 mt-3">
              <label className="form-label" for="until">
                {" "}
                Until
              </label>
              <input
                className="form-control"
                id="until"
                type="date"
                value="2021-01-01"
              />
            </div>

            <div className="col-12 pe-0 ps-0 mt-4">
              <button className="btn btn-secondary w-100">
                <FaPlus />
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mt-2">
        <div className="col-12">
          <label>
            <input type="checkbox" name="notify" className="form-check-input" />
            Notify users that this content has changed
          </label>
          <button
            onClick={handleSave}
            className="btn btn-danger float-end"
            type="submit"
          >
            Save
          </button>
          <button className="btn btn-light float-end me-2" type="submit">
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger"
            >
              Cancel
            </Link>
          </button>
        </div>
      </div>

      <hr />
    </form>
    
  );
};

const CustomComponent = () => {
  return (
    <div className="row">
      <div className="col">
        <button className="btn btn-light me-3 float-end">
          <FaEllipsisV style={{ color: "#050505" }} />
        </button>
        <label className="text-success me-3 pt-1 fs-5 float-end">
          Published
        </label>
        <FaCheckCircle className="float-end me-3 fs-5 text-success mt-2" />
      </div>
    </div>
  );
};

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div style={{ marginLeft: "10%" }}>
      <CustomComponent />
      <hr />
      <AssignmentForm
        title={assignment.title}
        handleSave={handleSave}
        courseId={courseId}
      />
    </div>
  );
}
export default AssignmentEditor;
