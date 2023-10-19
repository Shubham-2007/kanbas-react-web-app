import React from "react";
import "../index.css";
import {
  FaPlus,
  FaEllipsisV,
  FaRegCheckCircle,
} from "react-icons/fa";

function Toolbar() {
  return (
    <div className="row">
      <div
        className="col d-flex"
        style={{ justifyContent: "right", marginRight: "10px" }}
      >
        <button className="btn btn-light me-1" type="button">
          Collapse All
        </button>
        <button className="btn btn-light me-1" type="button">
          View Progress
        </button>
        <div className="dropdown me-1">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaRegCheckCircle className="text-success m-1" />
            Publish All
          </button>
          <ul className="dropdown-menu"></ul>
        </div>
        <button className="btn btn-danger me-1" type="button">
          <FaPlus className="m-1" />
          Module
        </button>
        <button className="btn btn-light" type="button">
          <FaEllipsisV style={{ color: "#050505" }} />
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
