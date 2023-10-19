import React from "react";
import {
  FaGripVertical,
  FaEllipsisV,
  FaPlus,
  FaCheckCircle,
  FaLink,
} from "react-icons/fa";

import { useParams } from "react-router-dom";
import db from "../Database";
import "./index.css";

function ListTitle({ title }) {
  return (
    <ul className="list-group">
      <li className="list-group-item list-group-item-secondary">
        <div className="flex-row">
          <FaGripVertical />
          {title}
          <FaEllipsisV
            className="float-end pt-1"
            style={{ color: "#050505" }}
          />
          <FaPlus
            className="float-end me-3 pt-1"
            style={{ color: "#85897e" }}
          />
          <span className="dropdown">
            <button
              className="btn btn-muted dropdown-toggle float-end pt-0"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaCheckCircle className="text-success" />
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            ></ul>
          </span>
        </div>
      </li>
    </ul>
  );
}

function ListItem({ title, children }) {
  return (
    <li
      className="list-group-item"
      style={{ paddingLeft: "0px", paddingRight: "0px" }}
    >
      <FaGripVertical />
      {title}
      <FaEllipsisV className="float-end" style={{ color: "#050505" }} />
      <FaCheckCircle className="float-end me-3 text-success" />
      {children}
    </li>
  );
}

function SubListItem({ content, isLink = false }) {
  return (
    <li
      className="list-group-item list-group-item-action"
      style={{ paddingLeft: "0px", paddingRight: "0px" }}
    >
      <FaGripVertical />
      <span className="ps-5">
        {isLink ? (
          <a href="#">
            <FaLink />
            {content}
          </a>
        ) : (
          content
        )}
      </span>
      <FaEllipsisV className="float-end" style={{ color: "#050505" }} />
      <FaCheckCircle className="float-end me-3 text-success" />
    </li>
  );
}

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div className="row mt-5">
      <ListTitle title={"Week 0 - Intro"} />
      <ul
        className="list-group border-start border-3 border-success"
        style={{ marginBottom: "20px" }}
      >
        {modules
          .filter((module) => module.course === courseId)
          .map((module) => (
            <ListItem key={module._id} title={module.name}>
              <ul className="list-group">
                {Object.keys(module)
                  .filter((key) => key.startsWith("description"))
                  .map((descKey, index) => (
                    <SubListItem
                      key={index}
                      content={module[descKey]}
                      isLink={module.name === "Slides"}
                    />
                  ))}
              </ul>
            </ListItem>
          ))}
      </ul>
      <br />
      <ListTitle title={"Week 1 - HTML"} />
      <ul
        className="list-group border-start border-3 border-success  "
        style={{ marginBottom: "20px" }}
      >
        {modules
          .filter((module) => module.course === courseId)
          .map((module) => (
            <ListItem key={module._id} title={module.name}>
              <ul className="list-group">
                {Object.keys(module)
                  .filter((key) => key.startsWith("description"))
                  .map((descKey, index) => (
                    <SubListItem
                      key={index}
                      content={module[descKey]}
                      isLink={module.name === "Slides"}
                    />
                  ))}
              </ul>
            </ListItem>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
