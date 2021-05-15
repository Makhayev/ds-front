import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/nav.css'

export default function Navik() {
    return (
        <Navbar bg="dark" variant = "dark" expand="lg">
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/" className = 'ms-2 me-2'>Home</Nav.Link>
                <Nav.Link href="/" className = 'ms-2 me-2'>Upcoming Events</Nav.Link>
                <Nav.Link href="#link" className = 'ms-2 me-2'>Past Events</Nav.Link>
                <Nav.Link href="#link" className = 'ms-2 me-2'>About us </Nav.Link>
                <Nav.Link href="#link" className = 'ms-2 me-2'>Contacts</Nav.Link>
                <Nav.Link href="/login" className = 'ms-2 me-2'>Log in</Nav.Link>
                <NavDropdown title="ENG" id="navbarScrollingDropdown" className = 'ms-2 me-2'>
                    <NavDropdown.Item href="#action3">RUS</NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">ENG</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
    )
}
