import React from "react";

import "./Menu.css";

import ListItem from "../../components/ListItem/ListItem";

import image1 from "../../assets/pizza-1.jpeg";
import image2 from "../../assets/pizza-4.jpeg";

const menuData = [
  {
    title: "OG Cheese (V)",
    description:
      "The New York classic. Simply: house tomato sauce, mozzarella blend, finished with evoo and parm",
    price: 10.5,
    img: image1,
  },
  {
    title: "Funghi Jambon *NEW*",
    description:
      "Roast ham and mushrooms run the show, backed with marinara sauce, garlic cream, mozzarella, oregano, black pepper, and chives.",
    price: 14.5,
    img: image2,
  },
];

const Menu = () => {
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
