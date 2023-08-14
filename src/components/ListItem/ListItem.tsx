import React from "react";
import "./ListItem.scss";

const ListItem = ({ title, description, price, itemImage, last }) => {
  return (
    <div className={last ? "list-items-no-border" : "list-items"}>
      <ul className="list-items-ul">
        <li>
          {itemImage && (
            <img src={itemImage} alt="menuItem" className="menu-image" />
          )}

          <div className="description-container">
            <h3 className="title-menu">{title}</h3>
            {description && <p className="sub-title-menu">{description}</p>}
          </div>
          <div className="price-container">
            <h3 className="price-menu">€{price}</h3>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ListItem;
