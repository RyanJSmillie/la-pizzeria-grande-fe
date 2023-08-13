import React, { useEffect, useState } from "react";

import "./Menu.css";

import ListItem from "../../components/ListItem/ListItem";
import { MenuData } from "../../interfaces/Menu";

const databaseUrl = "http://localhost:3001/menu";

const Menu = () => {
  const [menuData, setMenuData] = useState({
    pizza: [],
    drinks: [],
  });

  useEffect(() => {
    const doFetch = async () => {
      const res: Response = await fetch(databaseUrl);
      const json: MenuData = await res.json();
      setMenuData(json);
    };

    doFetch();
  }, []);

  return (
    <div className="section menu-img">
      <h1 className="heading-primary heading-menu">Menu</h1>
      <div className="container menu">
      <h1 className="menu-lead title">Pizza</h1>
        {menuData.pizza.map((data, i, menuData) => {
          return (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.img}
              key={i}
              last={i + 1 === menuData.length ? true : false}
            />
          );
        })}
      </div>
      <div className="container menu">
      <h1 className="menu-lead title">Drinks</h1>
        {menuData.drinks.map((data, i, menuData) => {
          return (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.img}
              key={i}
              last={i + 1 === menuData.length ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
