import React from "react";
import "./style.css"

function Button  (props) {
    return <button onClick={()=> props.testClick(props.id)}type="button" className="btn btn-light">{props.children}</button>
}

export default Button