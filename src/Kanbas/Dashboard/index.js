import { Link } from "react-router-dom";
//import axios from "axios";
import { useEffect, useState } from "react";
import * as client from "../Courses/client";

function Dashboard() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({});
    const fetchCourses = async () => {
        //const response = await axios.get("http://localhost:4000/api/courses");
        const courses = await client.fetchCourses();
        setCourses(courses);
    };

    const deleteCourse = async (id) => {
        try {
            await client.deleteCourse(id);
            setCourses(courses.filter((c) => c._id !== id));
        }
        catch (error) {
            console.log(error);
        }
    };

    const addCourse = async () => {
        //const response = await axios.post("http://localhost:4000/api/courses", course);
        const newCourse = await client.addCourse(course);
        setCourses([newCourse, ...courses]);
    }

    const updateCourse = async () => {
        try {
            await client.updateCourse(course);
            setCourses(courses.map((c) => (
                c._id === course._id ? course : c)));
        } catch (error) {
            console.log(error);
        }
    }

        useEffect(() => {
            fetchCourses();
        }, []);

        return (
            <div>
                <h1>Dashboard</h1>
                <hr />
                <h2>Published Courses ({courses.length})</h2>
                <input
                    type="text"
                    placeholder="Course Name"
                    value={course.name}
                    onChange={(e) => setCourse({ ...course, name: e.target.value })}
                />
                <button onClick={updateCourse}
                    className="btn btn-warning">Update</button>
                <button onClick={addCourse}
                    className="btn btn-success">Add</button>
                <div className="row">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {courses.map((course) => (
                            <div key={course._id} className="col" style={{ width: 300 }}>
                                <div className="card">
                                    <img src="/images/neu.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <button onClick={() => deleteCourse(course._id)}
                                            className="btn btn-danger float-end">
                                                Delete</button>
                                        <button
                                            onClick={() => setCourse(course)}
                                            className="btn btn-warning float-end">
                                            Edit
                                        </button>
                                        <h5 className="card-title">{course.name}</h5>
                                        <Link
                                            to={`/Kanbas/Courses/${course._id}`}
                                            className="btn btn-primary"
                                        >
                                            {course.name}
                                        </Link>
                                        <p className="card-text">
                                            This is a longer card with supporting text below as a
                                            natural lead-in to additional content. This content is a
                                            little bit longer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    export default Dashboard;
