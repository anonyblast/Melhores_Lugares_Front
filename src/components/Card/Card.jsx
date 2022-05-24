import React from "react";
import { SiAirtable } from "react-icons/si";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <div className={'Card-number ' + props.status}>
        {props.number}
      </div>
      <div className="Card-icon">
        <SiAirtable /> <span>{props.status}</span>
      </div>
      <div className="Card-quantity">
        {props.quantity}
      </div>
    </div>
  );
}

export default Card;
