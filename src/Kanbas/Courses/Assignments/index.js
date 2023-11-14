import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import { FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import { createAssignment, findAssignmentsForCourse } from "./client";
import * as client from "./client.js";


function Assignments() {
  const { courseId } = useParams();

  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  const courseAssignments = assignments.filter(assignment => assignment.course === courseId);

  const handleAddAssignment = () => {
    createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  }

  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  useEffect(() => {
    findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
      );  
  }, [courseId]); 

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

      <div className="d-flex justify-content-between wd-header-buttons">
        <input
          type="text"
          className="form-control wd-input-field"
          placeholder="Search for Assignment"
          value={assignment.title}
          onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}
        />

        <div>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddAssignment}
          >
            Add Assignment
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUpdateAssignment}
          >
            Update
          </button>
        </div>
      </div>

      <h2 className="assignment-header">Assignments for course {courseId}</h2>

      <div className="assignment-list">
        {courseAssignments.map((assignmentItem) => (
          <Link key={assignmentItem._id} to={`/Kanbas/Courses/${courseId}/Assignments/${assignmentItem._id}`} className="assignment-item-link">
            <div className="assignment-item">
              <button
                type="button"
                className="btn btn-success float-end"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  dispatch(setAssignment(assignmentItem));
                }}
              >
                Edit
              </button>


              <button
                type="button"
                className="btn btn-danger float-end"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleDeleteAssignment(assignmentItem._id);
                }}
              >
                Delete
              </button>


              <div className="assignment-icon">
                📝
              </div>
              <div className="assignment-content">
                <h3>{assignmentItem.title}</h3>
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
