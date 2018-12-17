import React from "react";
import "./style.css";

function Title(props) {
  return <div className="jumbotron"><h1>{props.children}</h1><div classname="row"></div></div>;
}

export default Title;