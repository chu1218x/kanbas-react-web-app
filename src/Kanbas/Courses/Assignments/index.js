import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { FaEllipsisV } from "react-icons/fa";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);
  return (
    <div>
      <div className="d-flex justify-content-between wd-header-buttons">
        <input type="text" className="form-control wd-input-field" placeholder="Search for Assignment" />
        <div>
          <button type="button" className="btn btn-secondary no-wrap">
            + Group
          </button>
          <button type="button" className="btn btn-danger no-wrap">
            + Assignment
          </button>
          <button type="button" className="btn btn-secondary no-wrap">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />
      <h2 className="assignment-header">Assignments for course {courseId}</h2>
      <div className="assignment-list">
        {courseAssignments.map((assignment) => (
          <Link key={assignment._id} to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="assignment-item-link">
            <div className="assignment-item">
              <div className="assignment-icon">
                📝
              </div>
              <div className="assignment-content">
                <h3>{assignment.title}</h3>
                <div className="assignment-details">
                  <span className="red-text">Multiple Modules</span>
                  | Due Oct 2 at 11:59 pm | 100 pts
                </div>
              </div>
              <div className="assignment-status">
                ✔️
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
