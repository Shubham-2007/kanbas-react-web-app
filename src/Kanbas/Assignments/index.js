import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import {
  FaPlus,
  FaEllipsisV,
  FaCheckCircle,
  FaGripVertical,
  FaEdit,
} from "react-icons/fa";
import "./index.css";

const AssignmentSearchBar = () => {
  return (
    <div className="pe-0 me-0 ps-0 ms-0">
      <div className="row pt-3 pb-1 ms-0 ps-0">
        <div className="col" style={{ marginLeft: "-23px" }}>
          <input
            type="text"
            placeholder="Search For Assignments"
            className="form-control w-25 ms-0"
          />
        </div>
        <div className="col">
          <a className="btn btn-secondary float-end ms-1">
            <FaEllipsisV className="ms-1" />
          </a>
          <button type="button" className="btn btn-danger float-end ms-1">
            <FaPlus />
            Assignment
          </button>
          <button type="button" className="float-end btn btn-secondary">
            <FaPlus style={{ color: "#ffffff" }} />
            Group
          </button>
        </div>
      </div>
    </div>
  );
};

const AssignmentList = ({ courseId, assignments, topicTitle, markPer }) => {
  return (
    <ul className="list-group">
      <div className="col-12">
        <li className="list-group-item list-group-item-secondary">
          <h4>
            <FaGripVertical />
            {topicTitle}
            <div className="float-end pt-2">
              <FaEllipsisV style={{ color: "#434447" }} />
            </div>
            <div className="float-end me-4 ms-2">
              <FaPlus style={{ color: "#878885" }} />
            </div>
            <label className="border border-dark rounded-pill float-end p-1">
              {markPer}% of Total
            </label>
          </h4>
        </li>
      </div>
      <div className="col-12 border-start border-3 border-success assignment-table mb-5">
        {assignments.map((assignment, index) => (
          <li key={index} className="list-group-item">
            <FaEllipsisV
              className="float-end fs-5"
              style={{ color: "#050505", marginTop: "2%" }}
            />
            <FaCheckCircle
              className="float-end me-3 fs-5 text-success"
              style={{ marginTop: "2%" }}
            />
            <FaGripVertical
              className="float-start me-3 fs-5"
              style={{ color: "black", marginTop: "2%" }}
            />
            <FaEdit
              className="float-start me-3 fs-5 text-success"
              style={{ color: "black", marginTop: "2%" }}
            />
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="fs-5"
            >
              {assignment.title}
            </Link>
            <br />
            <p>{assignment.details}</p>
          </li>
        ))}
      </div>
    </ul>
  );
};

function Assignments() {
  const topics = [
    { title: "ASSIGNMENT", markPer: "40" },
    { title: "QUIZZE", markPer: "15" },
    { title: "EXAM", markPer: "10" },
    { title: "PROJECT", markPer: "35" },
  ];

  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div style={{ marginRight: "100px" }}>
      <AssignmentSearchBar />
      <hr className="hr-grow" />
      <div className="row">
        {topics.map((topic, index) => (
          <AssignmentList
            key={index}
            courseId={courseId}
            assignments={courseAssignments}
            topicTitle={topic.title}
            markPer={topic.markPer}
          />
        ))}
      </div>
    </div>
  );
}
export default Assignments;
