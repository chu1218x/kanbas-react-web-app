import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css"

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="gradebook-container">
      <div className="gradebook-header">
        <h5 className="gradebook-title">Gradebook</h5>
        <div className="gradebook-actions">
          <button className="gradebook-btn">Import</button>
          <button className="gradebook-btn">Export</button>
          <button className="gradebook-btn">⚙️</button>
        </div>
      </div>

      <div className="filters-section">
        <div className="filter-row">
          <label>Student Names</label>
          <input type="text" placeholder="Search Students" className="gradebook-input" />
          <button className="apply-filters-btn">Apply Filters</button>
        </div>
        <div className="filter-row">
          <label>Assignment Names</label>
          <input type="text" placeholder="Search Assignments" className="gradebook-input" />
        </div>
      </div>


      <div className="table-responsive">
        <table className="wd-grade-table">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th>{assignment.title} <br /> Out of 100</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td className="student-name">{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}%</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;