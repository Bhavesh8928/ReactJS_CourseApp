import React, { useState } from "react";
import { Container, Card, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap";
import styled from "styled-components";

const ContactContainer = styled(Container)`
    margin-top: 5px;
`;

const StyledCard = styled(Card)`
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form data submitted:", formData);
    };

    return (
        <ContactContainer>
            <StyledCard>
                <CardBody>
                    <h2 className="text-center">Contact Us</h2>
                    <p>
                        Have questions or feedback? We're here to help! Reach out to us with any inquiries or suggestions you may have. Our dedicated support team is ready to assist you on your learning journey.
                    </p>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">Message</Label>
                            <Input
                                type="textarea"
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <Button color="primary">Submit</Button>
                    </Form>
                </CardBody>
            </StyledCard>
        </ContactContainer>
    );
}

export default ContactUs;
