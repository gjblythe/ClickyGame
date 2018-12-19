import React from "react";
import "./style.css";

function Title(props) {
  return <div className="jumbotron"><h1>{props.title}</h1><span id="score">Current Score: {props.score}</span><span id="record">High Score: {props.record}</span></div>
}

export default Title;