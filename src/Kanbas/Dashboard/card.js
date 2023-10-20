import { Link } from "react-router-dom";
import React from "react";

function Card({course}) {
    return (
        <div className="wd-course-card">
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Home`}>
                <div className="card">
                    <div className="wd-color-image"></div>
                    <div className="card-body">
                        <h5 className="wd-card-title">{course.name}</h5>
                        <p className="wd-card-text">start date: {course.startDate}
                            <br/> 
                            end date: {course.endDate}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;
