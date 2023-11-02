import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, setAssignment } from "../assignmentsReducer";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const AssignmentAdd = () => {
  const { courseId } = useParams();
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h2>Add New Assignment</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={assignment.title}
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, title: e.target.value }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            className="form-control"
            id="description"
           
            rows="3"
            value={assignment.details}
            onChange={(e) =>
              dispatch(
                setAssignment({ ...assignment, details: e.target.value })
              )
            }
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            name="dueDate"
            value={assignment.dueDate}
            onChange={(e) =>
              dispatch(
                setAssignment({ ...assignment, dueDate: e.target.value })
              )
            }
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="availableFromDate" className="form-label">
              Available From Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="availableFromDate"
              name="availableFromDate"
              value={assignment.availableFromDate}
              onChange={(e) =>
                dispatch(
                  setAssignment({
                    ...assignment,
                    availableFromDate: e.target.value,
                  })
                )
              }
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="availableUntilDate" className="form-label">
              Available Until Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="availableUntilDate"
              name="availableUntilDate"
              value={assignment.availableUntilDate}
              onChange={(e) =>
                dispatch(
                  setAssignment({
                    ...assignment,
                    availableUntilDate: e.target.value,
                  })
                )
              }
            />
          </div>
        </div>
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger m-3 fs-5"
          onClick={() =>
            dispatch(addAssignment({ ...assignment, course: courseId }))
          }
        >
          Save
        </Link>
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-secondary ml-2 fs-5 bg-light text-dark"
        >
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default AssignmentAdd;
