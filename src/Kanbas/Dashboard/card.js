import { Link } from "react-router-dom";
import React from "react";

function Card({ course, onDelete, onEdit }) {
    return (
        <div className="wd-course-card">
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Home`}>
                <div className="card">
                    <div className="wd-color-image"></div>
                    <div className="card-body">
                        <h5 className="wd-card-title">{course.name}</h5>
                        <p className="wd-card-text">
                            number: {course.number}
                            <br />
                            start date: {course.startDate}
                            <br />
                            end date: {course.endDate}</p>
                            <button type="button" class="btn btn-secondary float-end"
                onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    onDelete();
                }}>Delete</button>

            <button type="button" class="btn btn-info float-end"
                onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    onEdit(course);
                }}>Edit</button>
                        <br />
                    </div>
                </div>
            </Link>
            
        </div>
    );
}

export default Card;
