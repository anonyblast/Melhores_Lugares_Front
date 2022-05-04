import React from "react";
import { IconContext } from "react-icons";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import "./MainGridTables.css";

function MainGridTables() {

  const arrOfTables = [
    {
      className: "table-1",
      tableNumber: "1",
      tableStatus: "Ocupado",
      tableSeats: "4",
      bgColor: "red",
    },
    {
      className: "table-2",
      tableNumber: "2",
      tableStatus: "Ocupado",
      tableSeats: "2",
      bgColor: "red",
    },
    {
      className: "table-3",
      tableNumber: "3",
      tableStatus: "Ocupado",
      tableSeats: "4",
      bgColor: "red",
    },
    {
      className: "table-4",
      tableNumber: "4",
      tableStatus: "Ocupado",
      tableSeats: "4",
      bgColor: "green",
    },
    {
      className: "table-5",
      tableNumber: "5",
      tableStatus: "Ocupado",
      tableSeats: "2",
      bgColor: "red",
    },
    {
      className: "table-6",
      tableNumber: "6",
      tableStatus: "Ocupado",
      tableSeats: "4",
      bgColor: "red",
    },
    {
      className: "table-7",
      tableNumber: "7",
      tableStatus: "Ocupado",
      tableSeats: "4",
      bgColor: "red",
    },
    {
      className: "table-8",
      tableNumber: "8",
      tableStatus: "Ocupado",
      tableSeats: "4",
      bgColor: "red",
    },
  ];

  return (
    <div className="MainGridTables">
      <div className="MainDisplay">
        <div className="MainDisplay-content">
          <div className="Capacity">
            <span className="Capacity_Percent">Mesas Ocupadas</span>
            <p>100%</p>
          </div>
          <div className="Queue">
            <span className="Queue_Quantity">Pessoas na fila</span>
            <p>20</p>
          </div>
        </div>
      </div>
      <div className="MainGridTables-content">
        {arrOfTables.map((arr) => (
          <div className="MainGridTables-content-table">
            <div className="{arr.className} MainGridTables-content-table-number">
              <p>{arr.tableNumber}</p>
            </div>
            <div className="MainGridTables-content-table-icon">
              <TableRestaurantIcon /> <p>{arr.tableStatus}</p>
            </div>
            <div className="MainGridTables-content-table-quantity">
              <p>{arr.tableSeats} lugares</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainGridTables;
