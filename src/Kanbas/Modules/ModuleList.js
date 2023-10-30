import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./moduleReducer";
import React, { useState } from "react";
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

function ListItem({
  title,
  children,
  module,
  dispatch,
}) {
  return (
    <li className="list-group-item">
      <FaGripVertical />
      <span className="ps-2 fw-semibold fs-5">{title}</span>
      <button
        onClick={() => dispatch(setModule(module))}
        className="btn btn-success mt-4 float-end"
        style={{ fontSize: "12px" }}
      >
        Edit
      </button>
      <button
        onClick={() => dispatch(deleteModule(module._id))}
        className="btn btn-danger m-4 float-end"
        style={{ fontSize: "12px" }}
      >
        Delete
      </button>

      {children}
    </li>
  );
}

function SubListItem({ content, isLink = false }) {
  return (
    <li
      className="list-group-item list-group-item-action"
      style={{ paddingLeft: "0px", paddingRight: "0px", marginTop: "10px" }}
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
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div className="row mt-5">
      <div
        className="d-flex justify-content-between"
        style={{ marginRight: "10px" }}
      >
        <form className="w-100">
          <div className="row">
            <div className="mb-1 col-md-6">
              <label className="form-label">Module Name</label>
              <input
                className="form-control"
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
              />
            </div>
            <div className="mb-1 col-md-6">
              <label className="form-label">Module Discription</label>
              <textarea
                className="form-control"
                value={module.description}
                onChange={(e) =>
                  dispatch(
                    setModule({ ...module, description: e.target.value })
                  )
                }
              />
            </div>
          </div>
        </form>

        <button
          onClick={() => dispatch(updateModule(module))}
          className="btn btn-primary m-3"
          type="button"
          style={{ fontSize: "12px" }}
        >
          Update
        </button>
        <button
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          className="btn btn-success m-3"
          type="button"
          style={{ fontSize: "12px" }}
        >
          <FaPlus className="m-1" />
          Module
        </button>
      </div>

      <ul
        className="list-group border-start border-3 border-success mt-3"
        style={{ marginBottom: "20px" }}
      >
        {modules
          .filter((module) => module.course === courseId)
          .map((module) => (
            <ListItem
              key={module._id}
              title={module.name}
              
              module={module}
            
              dispatch={dispatch}
            >
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
    </div>
  );
}
export default ModuleList;
