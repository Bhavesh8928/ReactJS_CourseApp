// CODE = Menu.js

import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from "reactstrap";

const Menu = () => {
    return (
        <div>
            <ListGroup>
                {/* <ListGroupItem href="/" tag="a"> Home </ListGroupItem> */}
                {/* By using ListGroupItem page will be refresh so to avoid it we use Link tag */}
                <Link className='list-group-item' to="/" tag="a"> Home </Link>
                <Link className='list-group-item list-group-item-action' to="/addCourse" tag="a"> Add Course </Link>
                <Link className='list-group-item list-group-item-action' to="/viewCourse" tag="a"> View Course </Link>
                <Link className='list-group-item' to="/about" tag="a"> About </Link>
                <Link className='list-group-item' to="/contactUs" tag="a"> Contact Us </Link>
            </ListGroup>

            {/* <ListGroup>
                <ListGroupItem href="/" tag="a"> Home </ListGroupItem>
                <ListGroupItem href="/addCourse" tag="a"> Add Course </ListGroupItem>
                <ListGroupItem href="/viewCourse" tag="a"> View Course </ListGroupItem>
                <ListGroupItem href="/about" tag="a"> About </ListGroupItem>
                <ListGroupItem href="/contactUs" tag="a"> Contact Us </ListGroupItem>
            </ListGroup> */}

        </div>
    )
}
export default Menu;
