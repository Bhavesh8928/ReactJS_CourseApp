import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../APIs/base_url";
import { toast } from "react-toastify";

const AddCourse = () => {

    const [course, setCourse] = useState({})
    // Form handler function
    const formHandler = (e) => {
        console.log(course);
        postDataOnServer(course);
        e.preventDefault();
    }

    // Creating function to post data on server
    const postDataOnServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response.data);
                toast.success("Course added successfully", { position: "bottom-center" });
            },
            (error) => {
                console.log(error);
                toast.error("Failed to add data..", { position: "bottom-center" });
            })
    }

    const clearForm = () => {
        setCourse({ title: "", description: "" });
    }
    return (
        <div>
            <br/> 
            <Form onSubmit={formHandler} >
                <FormGroup>
                    <div style={{ textAlign: "left" }} >
                        <label for="courseid">Course Id : </label>
                    </div>
                    <Input
                        type="text"
                        name="courseid"
                        placeholder="Enter Course ID"
                        id="courseid"
                        value="Id is Auto generated"
                        disabled
                    />
                </FormGroup>
                <FormGroup>
                    <div style={{ textAlign: "left" }}>
                        <label for="title">Course Name : </label>
                    </div>
                    <Input
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        id="title"
                        value={course.title || ""}
                        onChange={(e) => setCourse({ ...course, title: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <div style={{ textAlign: "left" }} >
                        <label for="description">Description : </label>
                    </div>
                    <Input
                        type="text"
                        name="description"
                        placeholder="Enter Description"
                        id="description"
                        style={{ height: 150 }}
                        value={course.description || ""}
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                </FormGroup>

                <Container className="text-center my-3">
                    <Button type="submit" color="success" style={{ marginRight: "1rem" }}>Add Course</Button>
                    <Button type="reset" color="warning" onClick={clearForm}>Clear Form</Button>
                </Container>
            </Form>
        </div>
    )
}
export default AddCourse;

