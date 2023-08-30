// import axios from "axios";
// import { Button, Container, Form, FormGroup, Input } from "reactstrap";
// import base_url from "../APIs/base_url";
// import { toast } from "react-toastify";

// const AddCourse = ({ onUpdate }) => {

//     const [course, setCourse] = useState({ title: "", description: "" });

//     const formHandler = (e) => {
//         e.preventDefault();
//         if (!course.title || !course.description) {
//             toast.error("Please fill in both Title and Description.", { position: "bottom-center" });
//             return;
//         }

//         if (course.id) {
//             updateCourseOnServer(course.id, course);
//         } else {
//             addCourseToServer(course);
//         }

//         clearForm();
//     }

//     const addCourseToServer = (data) => {
//         axios.post(`${base_url}/courses`, data).then(
//             (response) => {
//                 toast.success("Course added successfully", { position: "bottom-center" });
//             },
//             (error) => {
//                 toast.error("Failed to add data..", { position: "bottom-center" });
//             }
//         );
//     }

//     const updateCourseOnServer = (id, data) => {
//         axios.put(`${base_url}/courses/${id}`, data).then(
//             (response) => {
//                 toast.success("Course updated successfully", { position: "bottom-center" });
//                 onUpdate(); // Trigger parent component to fetch updated data
//             },
//             (error) => {
//                 toast.error("Failed to update data..", { position: "bottom-center" });
//             }
//         );
//     }

//     const clearForm = () => {
//         setCourse({ title: "", description: "" });
//     }

//     return (
//         <div>
//             <br/> 
//             <Form onSubmit={formHandler} >
//                 <FormGroup>
//                     <div style={{ textAlign: "left" }} >
//                         <label htmlFor="courseid">Course Id : </label>
//                     </div>
//                     <Input
//                         type="text"
//                         name="courseid"
//                         placeholder="Enter Course ID"
//                         id="courseid"
//                         value="Id is Auto generated"
//                         disabled
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <div style={{ textAlign: "left" }}>
//                         <label htmlFor="title">Course Name : </label>
//                     </div>
//                     <Input
//                         type="text"
//                         name="title"
//                         placeholder="Enter Title"
//                         id="title"
//                         value={course.title || ""}
//                         onChange={(e) => setCourse({ ...course, title: e.target.value })}
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <div style={{ textAlign: "left" }} >
//                         <label htmlFor="description">Description : </label>
//                     </div>
//                     <Input
//                         type="text"
//                         name="description"
//                         placeholder="Enter Description"
//                         id="description"
//                         style={{ height: 150 }}
//                         value={course.description || ""}
//                         onChange={(e) => setCourse({ ...course, description: e.target.value })}
//                     />
//                 </FormGroup>

//                 <Container className="text-center my-3">
//                     <Button type="submit" color="success" style={{ marginRight: "1rem" }}>
//                         {course.id ? "Update Course" : "Add Course"}
//                     </Button>
//                     <Button type="reset" color="warning" onClick={clearForm}>Clear Form</Button>
//                 </Container>
//             </Form>
//         </div>
//     )
// }

// export default AddCourse;
