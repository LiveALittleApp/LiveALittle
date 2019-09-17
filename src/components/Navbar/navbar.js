import React from "react";
import {Navbar, Nav, Form, Button, FormControl} from "react-bootstrap";
import "./navbar.css";


class Navigation extends React.Component{

    render()
    {
        return (
            <div>
            <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">LiveALittle</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Dashboard</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Log In</Button>
            </Form>
        </Navbar>
             </div>
        );
    }
}
        
export default Navigation; 