// CODE = App.js

import React from "react";
import Header from './Components/Header';
import Home from './Components/Home';
import Menu from "./Components/Menu";
import AddCourses from './Components/AddCourses';
import AllCourses from './Components/AllCourses';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Col, Container, Row } from "reactstrap";

const App = () => {
    const notify = () => {
        toast.success("done", { position: "top-center" })
    };
    return (
        <div>
            <Router>
                <ToastContainer />
                <Header />
                <Container className='text-center'>

                    <Row className='justify-content-center'>
                        <Col md={4}> <Menu /></Col>
                        <Col md={8}>
                            <Routes>
                            <Route path="/" Component={Home} exact />
                            {/* OR */}
                            {/* <Route path="/"> <Home /> </Route> */}
                            <Route path="/addCourse" Component={AddCourses} exact />
                            <Route path="/viewCourse" Component={AllCourses} exact />
                            <Route path="/about" Component={About} exact />
                            <Route path="/contactUs" Component={ContactUs} exact />
                            </Routes>
                        </Col>
                    </Row>
                </Container>

            </Router>
        </div>
    )
}

export default App;