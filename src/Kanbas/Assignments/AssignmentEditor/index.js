import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setAssignment, updateAssignment } from "../assignmentsReducer";

const AssignmentForm = ({ assignment, dispatch }) => {
  const [assignmentData, setAssignmentData] = useState({
    ...assignment,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignmentData({ ...assignmentData, [name]: value });
    console.log(e.target);
    console.log(assignmentData);
  };
  return (
    <form>
      <div className="row mt-5">
        <label className="ps-0" for="assignment_name">
          Assignment Name
        </label>
        <input
          type="text"
          id="name"
          name="title"
          className="form-control w-50"
          defaultValue={assignmentData.title}
          onChange={handleChange}
        />
      </div>
      <div className="row mt-5">
        <textarea
          id="description"
          cols="30"
          rows="10"
          className="form-control w-50"
          defaultValue={assignmentData.details}
          onChange={handleChange}
        ></textarea>
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
          <label className="form-label float-end" htmlFor="Assign">
            Assign
          </label>
        </div>
        <div className="col-10">
          <div className="row border border-1" style={{ width: "45%" }}>
            <div className="col-12 ">
              <label className="form-label fw-bold" for="Due">
                {" "}
                Due
              </label>
              <input
                className="form-control"
                id="Due"
                type="date"
                name="dueDate"
                // value={assignment.dueDate}
                onChange={handleChange}
              />
            </div>

            <div className="col-6 pe-0 mt-3">
              <label className="form-label fw-bold" for="available-from">
                Available from
              </label>
              <input
                className="form-control"
                id="available-from"
                type="date"
                // value={assignment.fromDate}
                onChange={handleChange}
              />
            </div>

            <div className="col-6 ps-1 mt-3">
              <label className="form-label fw-bold" for="until">
                Until
              </label>
              <input
                className="form-control"
                id="until"
                type="date"
                // value={assignment.UnitelDate}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mt-2">
        <div className="col-12">
          <Link
            onClick={() => dispatch(setAssignment({assignmentData}))}
            to={`/Kanbas/Courses/${assignment.course}/Assignments`}
            className="btn m-2 fs-5 btn-danger float-end"
          >
            Save
          </Link>
          <Link
            to={`/Kanbas/Courses/${assignment.course}/Assignments`}
            className="btn btn-secondary m-2 fs-5 bg-light text-dark float-end"
          >
            Cancel
          </Link>
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
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  console.log(assignment);
  const dispatch = useDispatch();
  return (
    <div style={{ marginLeft: "10%" }}>
      <CustomComponent />
      <hr />
      <AssignmentForm assignment={assignment} dispatch={dispatch} />
    </div>
  );
}
export default AssignmentEditor;
