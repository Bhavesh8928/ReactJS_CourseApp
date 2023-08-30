// CODE = Header.js

import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const Header = () => {
    return (
        <Row className="justify-content-center">
            <Col md={10}>
                <Card className="my-2 bg-warning">
                    <CardBody>
                        <h1 className='text-center my-3' >Welcome to courses application</h1>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Header;