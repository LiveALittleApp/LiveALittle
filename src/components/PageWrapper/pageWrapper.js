import React from "react";
import "./pageWrapper.css";

function PageWrapper(props){

    return <div className="wrapper">{props.children}</div>;
}

export default PageWrapper;