import React from "react";
import LoginForm from "../components/LoginForm/loginForm";
import PageWrapper from "../components/PageWrapper/pageWrapper";


function Login(){

    return (

        <div>
            <h1>This is the login page</h1>
            <PageWrapper>
            <LoginForm />  
            </PageWrapper>     
        </div>

    );
}

export default Login;