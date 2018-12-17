import React from "react";
import "./style.css";

function Field (props) {
    return <div className="row"><div className="col-lg">{props.children}</div></div>
}
export default Field;