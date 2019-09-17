import React from "react";
import { Card } from "react-bootstrap";
import "./loginCard.css";
import LoginForm from "../LoginForm/loginForm"


class CardBody extends React.Component {

    render() {

        return (
            <div>
                <Card style={{ width: '25rem' , height:'30rem' }}>
                    <Card.Body>
                        <Card.Title>Account Log In</Card.Title>
                        <Card.Text>
                            <LoginForm></LoginForm>
                        </Card.Text>
                        <Card.Link href="#">Create Account</Card.Link>
                        <Card.Link href="#">Forgot email and password</Card.Link>
                    </Card.Body>
                </Card>
            </div>

        );
    }


}

export default CardBody;