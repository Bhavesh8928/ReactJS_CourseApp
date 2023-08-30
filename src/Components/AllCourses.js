// CODE = AllCourses.js

import { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios";
import base_url from "../APIs/base_url";
import { toast } from "react-toastify";

const AllCourses = () => {
    //calling loading course function
    useEffect(() => {
        // to change the page name
        document.title = "All Course || Bhavesh Learning";
        // calling 
        getAllCoursesFromServer();
    }, [])

    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response.data);
                // toast.success("All courses loaded successfully.", { position: "bottom-center" });
                setCourses(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Failed to load, Server is not started..!!", { position: "bottom-center" })
            }
        );
    }

    const [courses, setCourses] = useState([])

    // used for delete API
    const updateListOnDelete = (id) => {
        setCourses(courses.filter((c) => c.id != id));
    }

    return (
        <div>
            <h3>This is the list of all courses</h3>
            <br />
            {/* Here we have used the ternary operator */}
            {courses.length > 0 ? courses.map((item) => {
                return (<Course course={item} update={updateListOnDelete}/>) // this update attribute sent on Course.js
                // return (<Course key={item.id} course={item} />)
            }) : "Not Found any course"}
        </div>
    )
}

export default AllCourses;
