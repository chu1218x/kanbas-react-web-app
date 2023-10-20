import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiUserCircle,BiHistory,BiHelpCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook, FaLaptopCode, FaCreativeCommonsNd} from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import {SlEnvolope} from "react-icons/sl";
import "./index.css";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox", 
    "History", "Studio", "Commons", "Help"];

    const linkToIconMap = {
        Account: <BiUserCircle className="wd-icon" />,
        Dashboard: <RiDashboard3Fill className="wd-icon" />,
        Courses: <FaBook className="wd-icon" />,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
        Inbox: <SlEnvolope className="wd-icon" />,
        History: <BiHistory className="wd-icon" />,
        Studio: <FaLaptopCode className="wd-icon" />,
        Commons: <FaCreativeCommonsNd className="wd-icon" />,
        Help:<BiHelpCircle className="wd-icon" />
    };

    const { pathname } = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation" style={{ width: 80 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>

                    {linkToIconMap[link]}
                    <br />

                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;