import React from "react";
import "./style.css";

function Game (props) {
return <div className="row"><div className="col">{props.children}</div></div>
};
export default Game;