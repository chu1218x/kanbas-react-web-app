import db from "../Database";
import "./index.css";
import Card from "./card";
function Dashboard() {
    const courses = db.courses;
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
                            return (<Card course={course} />);
                        })
                        
                    }
                </div>
            </div>
        </>
    );
}
export default Dashboard;