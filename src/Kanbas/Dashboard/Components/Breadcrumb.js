import React from "react";
import "../index.css";

function Breadcrumb() {
  return (
    <div className="row fs-3 mt-2 ps-0 pb-0">
      <nav
        style={{ "--bs-breadcrumb-divider": ">", paddingLeft: "25px" }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">Dashboard</li>
        </ol>
      </nav>
      <hr className="w-100" />
    </div>
  );
}
export default Breadcrumb;
