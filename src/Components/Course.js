// CODE = Course.js

import axios from 'axios';
import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";
import base_url from '../APIs/base_url';
import { toast } from 'react-toastify';

const Course = ({ course, update }) => {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then((response) => {            
            toast.success("Successfully deleted the course.");
            update(id);
        }, (error) => {
           
            toast.error("Unable to delete the course.");
        })
    }

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle style={{ fontWeight: 'bold' }}>{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container>
                    <Button color="danger" style={{ marginRight: '2px' }} onClick={() => deleteCourse(course.id)}>Delete</Button>
                    <Button color="warning" style={{ marginLeft: '2px' }}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;
