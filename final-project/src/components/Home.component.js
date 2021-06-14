import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink activeClassName="active" className="nav-link" exact to="/form">Form</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/message">Message</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/user-list">ListUser</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}