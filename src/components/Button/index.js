import React from "react";
import "./style.css"

function Button  (props) {
    return <button onClick={props.clickedFunction}type="button" className="btn btn-light">{props.children}</button>
}

export default Button