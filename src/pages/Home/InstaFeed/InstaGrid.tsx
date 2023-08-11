import React from "react";

import { InstaGridProps } from "../../../interfaces/InstaFeed";

import "./InstaGrid.css";

const InstaGrid = ({ items }: InstaGridProps) => {
  if (items.length === 0) {
    return <div>{new Array(3).fill(<h1>Placeholder</h1>)}</div>;
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
