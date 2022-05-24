import React from "react";
import { IconContext } from "react-icons";
import "./MainGridTables.css";
import Card from "../Card/Card";

function MainGridTables() {
  const cards = [
    { status: "Limpando", quantity: "4 lugares" },
    { status: "Ocupado", quantity: "4 lugares" }
  ];

  return (
    <div className="MainGridTables">
      <div className="MainDisplay">
        <div className="MainDisplay-content">
          <div className="Capacity">
            <span className="Capacity_Percent">Mesas Ocupadas</span>
            {/* somar 1 para cada status igual a ocupado*/}
            <p>
              {
                cards.filter((card) => card.status === "Ocupado").length / cards.length * 100
              }
            %</p>
          </div>
          <div className="Queue">
            <span className="Queue_Quantity">Pessoas na fila</span>
            <p>20</p>
          </div>
        </div>
      </div>
      <div className="MainGridTables-content">
        {cards.map((arr, index) => (
          <Card
            number={index + 1}
            status={arr.status}
            quantity={arr.quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default MainGridTables;
