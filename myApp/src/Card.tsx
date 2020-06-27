import React from 'react';
import logo from "./bookmarkl.png";

function Card() {
  return (
    <div className="d-flex">
        <div className="border border-dark " style={{height: "300px", width: "300px"}}>
            <img src={logo} width="50" height="50"/>
            {}
        </div>
    </div>
  );
}

export default Card;
