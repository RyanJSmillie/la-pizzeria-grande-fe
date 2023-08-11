import React from "react";

import { InstaGridProps } from "../../../interfaces/InstaFeed";

import "./InstaGrid.css";

import pizza from "../../../assets/pizza.png"

const InstaGrid = ({ items }: InstaGridProps) => {
  if (items.length === 0) {
    return <div className="grid-style">{new Array(3).fill(<img className="item-style" src={pizza} alt="placeholder" />)}</div>;
  }

  return (
    <div className="grid-style">
      {items.map((item) => {
        return (
          <img className="item-style" src={item.mediaUrl} alt="instagram" />
        );
      })}
    </div>
  );
};

export default InstaGrid;
