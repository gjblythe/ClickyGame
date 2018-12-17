import React from  "react";
import "./style.css";

function Wrapper(props) {
    return <div className="wrapper"><div className="container">{props.children}</div></div>
}

export default Wrapper;