import React from "react";
import "./style.css";

function Images (props) {
return <span id={props.id} ><img id="pixel" src={props.src} alt={props.name}></img></span>
    
}

export default Images