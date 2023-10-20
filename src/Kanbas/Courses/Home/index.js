import ModuleList from "../Modules/ModuleList.js";
import React from "react";
import "./index.css"
import {FaEllipsisVertical} from "react-icons/fa6";


function Home() {
    return (
        <div className="row m-1 justify-content-between">
            <div className="col wd-main-content">
                <div class="d-flex justify-content-end gap-2">
                    <button class="btn btn-secondary btn-sm no-wrap" type="button">Collapse All</button>
                    <button class="btn btn-secondary btn-sm no-wrap" type="button">View Progress</button>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle Float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Publish All
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Publish All</a></li>
                            <li><a class="dropdown-item" href="#">Publish all items and modules</a></li>
                            <li><a class="dropdown-item" href="#">UnPublish</a></li>
                        </ul>
                    </div>
                    <button class="btn btn-danger btn-sm no-wrap" type="button">+ Module</button>
                    <button class="btn btn-secondary btn-sm no-wrap" type="button">
                        <FaEllipsisVertical/>
                    </button>
                </div>

                <hr />

                <div>
                    <h2>Home</h2>
                    <ModuleList />
                </div>
            </div>

            
            <div className="d-none d-lg-block Float-end course-status-column">
                <h5>Course Status</h5>
                <div className="d-flex gap-2">
                    <button className="btn btn-secondary btn-sm no-wrap" type="button">Unpublish</button>
                    <button className="btn btn-success btn-sm no-wrap" type="button">Published</button>
                </div>
                <br/>

                <div className="d-grid gap-1">
                    <button className="btn btn-secondary btn-sm no-wrap" type="button">Import Existing Content</button>
                    <button className="btn btn-secondary btn-sm no-wrap" type="button">Import From Commons</button>
                    <button className="btn btn-secondary btn-sm no-wrap" type="button">Choose Home Page</button>
                    <button className="btn btn-secondary btn-sm no-wrap" type="button">View Course Stream</button>
                    <button className="btn btn-secondary btn-sm no-wrap" type="button">New Announcement</button>
                    <button className="btn btn-secondary btn-sm no-wrap" type="button">New Analytics</button>
                    <button className="btn btn-secondary btn-sm no-wrap" type="button">View Course Notification</button>
                </div>

                <h5>To Do</h5>
                <hr />
                <p style={{ color: 'red' }}>CS5610 06 SP23 OH CS5610 11550 Web Development SEC 01 Fall 2023 [VTL-2-OL]</p>

                <div className="header">
                    <h5>Comming Up</h5>
                    <a href="#" className="wd-hyper-red">
                        <i className="fas fa-calendar-alt"></i>View Calendar</a>
                </div>
                <hr />

                <div className="header">
                    <div className="text-container">
                        <h5 className="wd-hyper-red">
                            <i className="fas fa-calendar-alt"></i>Lecture CS5610 11550 Web Development</h5>
                        <p>SEC 01 Fall 2023 [VTL-2-OL] Sep 5 at 7pm</p>
                    </div>
                </div>
                
                <div className="header">
                    <div className="text-container">
                        <h5 className="wd-hyper-red">
                            <i className="fas fa-calendar-alt"></i>Lecture CS5610 11550 Web Development</h5>
                        <p>SEC 01 Fall 2023 [VTL-2-OL] Sep 5 at 7pm</p>
                    </div>
                </div>

                <div className="header">
                    <div className="text-container">
                        <h5 className="wd-hyper-red">
                            <i className="fas fa-calendar-alt"></i>Lecture CS5610 11550 Web Development</h5>
                        <p>SEC 01 Fall 2023 [VTL-2-OL] Sep 5 at 7pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;