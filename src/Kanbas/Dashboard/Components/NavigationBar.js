import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function NavigationBar() {
  return (
    <div className="d-block d-md-none wd-course-navigation-sm-size">
      <div className="row">
        <div className="col-2">
          <Link to="/Kanbas/KanbasNavigationDashborad">
            <FaBars className="fs-2" />
          </Link>
        </div>
        <div className="col-8">CS5610 Web Development</div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
export default NavigationBar;
