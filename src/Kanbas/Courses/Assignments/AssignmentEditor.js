import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector } from 'react-redux';  

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);

  const assignment = assignments.find(assignment => assignment._id === assignmentId);
  
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div>
      <h2>Assignment Name</h2>
      <input value={assignment.title} className="form-control mb-2" />
      <hr />
  
      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger me-2">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
