import React from "react";
import "./style.css";

function Images (props) {
return <div className="col"><div className="card">
        <img className="card-img-top" src={props.src} alt={props.name}></img>
    </div></div>

}

export default Images