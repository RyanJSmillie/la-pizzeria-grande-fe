import React, { useEffect, useState } from "react";

import "./Menu.css";

import ListItem from "../../components/ListItem/ListItem";
import { MenuItem } from "../../interfaces/Menu";

const databaseUrl =
  "https://la-pizzeria-grande-8def1-default-rtdb.europe-west1.firebasedatabase.app/Menu.json";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {

    const doFetch = async () => {
      const res: Response = await fetch(databaseUrl);
      const json: MenuItem[] = await res.json();
      setMenuData(json);
    };

    doFetch();
  }, []);

  return (
    <div className="section">
      <h1 className="heading-menu">Menu</h1>
      <div className="container menu">
        {menuData.map((data, i, menuData) => {
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
