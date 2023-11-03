import db from "../Database";
import "./index.css";
import Card from "./card";
import { React, useState } from "react";

function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }
) {

    // const [courses, setCourses] = useState(db.courses);
    // const [course, setCourse] = useState({
    //     name: "New Course", number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15",
    // });

    // const addNewCourse = () => {
    //     const id = new Date().getTime().toString();
    //     setCourses([...courses,
    //     {
    //         ...course,
    //         _id: id,
    //     }]);

    // };

    // const deleteCourse = (courseId) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };

    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };


    return (
        <>
            <h1>Dashboard</h1>
            <hr />
            <div className="container-fluid">
                <h4>Published Courses({courses.length})</h4>
                <hr />

                <div
                    className="d-flex flex-wrap justify-content-start "
                    id="cards-container">
                    {
                        courses.map(course => {
                            return (<Card
                                course={course}
                                onDelete={() => deleteCourse(course._id)}
                                onEdit={(selectedCourse) => {
                                    setCourse(selectedCourse);
                                }}
                            />);
                        })

                    }
                </div>
                <br />

                <h5>Update Course</h5>
                <input value={course.name} className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

                <button type="button" class="btn btn-danger float-end"
                    onClick={addNewCourse} >
                    Add
                </button>
                <button type="button" class="btn btn-success float-end"
                    onClick={updateCourse} >
                    Update
                </button>

            </div>
        </>
    );
}
export default Dashboard;