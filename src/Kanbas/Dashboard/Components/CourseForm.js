import React from 'react';

function CourseForm({ course, setCourse, addNewCourse, updateCourse }) {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCourse((prevCourse) => ({ ...prevCourse, [id]: value }));
  };

  return (
    <div className="full-screen-div container">
      <form className="row g-3">
        <div className="row">
          {["name", "number", "startDate", "endDate"].map((field) => (
            <div key={field} className="mb-1 col-md-6">
              <label htmlFor={field} className="form-label">
                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type={field.includes("Date") ? "date" : "text"}
                id={field}
                value={course[field]}
                className="form-control"
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>
      </form>
      <div className="d-flex justify-content-end">
        <button type="button" onClick={addNewCourse} className="btn btn-success m-2">
          Add
        </button>
        <button type="button" onClick={updateCourse} className="btn btn-primary m-2">
          Update
        </button>
      </div>
    </div>
  );
}

export default CourseForm;
