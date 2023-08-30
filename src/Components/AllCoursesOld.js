// CODE = AllCourses.js

import { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios";
import base_url from "../APIs/base_url";
import { toast } from "react-toastify";

const AllCourses = () => {

    useEffect(() => {
        document.title = "All Course || Bhavesh Learning";
    }, [])

    const [courses, setCourses] = useState([
        { title: "Java Course", description: "This is Java Course from bhavesh learning" },
        { title: "Python Course", description: "This is Python Course from bhavesh learning" },
        { title: "Machine Learning Course", description: "This is Machine Learning Course from bhavesh learning" },
        { title: "Artificail Intelligence Course", description: "This is Artificail Intelligence  Course from bhavesh learning" }
    ])
    return (
        <div>
            <h3>All Courses</h3>
            <p>This is list of courses</p>
            {/* Here we have used the ternary operator */}
            {courses.length > 0 ? courses.map((item) => {
                return (<Course key={item.id} course={item} />)
                // course is take as parameter in "Course.js" file where this item object will be passed 
            }) : "Not Found any course"}

        </div>
    )
}

export default AllCourses;


