import React from "react";
import { Nav } from "react-bootstrap";
import "./topNav.css";


class TopNav extends React.Component {

    render() {
        return (
            <div>
                <Nav className="justify-content-end" activeKey="/home" id="topNav">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default TopNav; 