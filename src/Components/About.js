// CODE = ABout.js

import React from "react";
import { Container, Card, CardBody } from "reactstrap";
import styled from "styled-components";

const AboutContainer = styled(Container)`
    margin-top: 10px;
`;
const StyledCard = styled(Card)`
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;
const About = () => {
    return (
        <AboutContainer>
            <StyledCard>
                <CardBody>
                    <h2 className="text-center">About Our IT Courses</h2>
                    <p>
                        Welcome to our IT courses application! We offer a variety of courses to help you enhance your skills in the field of Information Technology. Whether you're a beginner or an experienced professional, our courses are designed to provide you with the knowledge and practical experience you need to succeed.
                    </p>
                    <p>
                        Our team of experienced instructors are experts in their respective fields and are dedicated to helping you achieve your goals. We cover a wide range of topics including programming languages, web development, database management, and more.
                    </p>
                    <p>
                        With our user-friendly platform, you can easily enroll in courses, track your progress, and access course materials at your convenience. Join us on this learning journey and take your IT skills to the next level!
                    </p>
                </CardBody>
            </StyledCard>
        </AboutContainer>
    );
}

export default About;
