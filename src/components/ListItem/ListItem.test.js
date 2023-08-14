import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListItem from "./ListItem";
import { BrowserRouter } from "react-router-dom";

const data = {
  pizza: [
    {
      id: 12,
      title: "OG Cheese (V)",
      description:
        "The New York classic. Simply: house tomato sauce, mozzarella blend, finished with evoo and parm.",
      price: "10.5",
      img: "https://www.nellspizza.co.uk/wp-content/uploads/2023/02/ogcheese14february.png",
    },
    {
      id: 13,
      title: "Marinara Plus (VE)",
      description:
        "Marinara base, chopped black olive, breadcrumbs, basil oil, and fresh basil. No cheese.",
      price: "9",
      img: "https://www.nellspizza.co.uk/wp-content/uploads/2023/02/marinaraplus14february.png",
    },
    {
      id: 14,
      title: "Do You 'Roni Honey",
      description:
        "N’duja, pepperoni, and chilli honey, with tomato s…rella blend, finished with chilli honey and parm.",
      price: "15",
      img: "https://www.nellspizza.co.uk/wp-content/uploads/2023/02/doyouronihoney14february.png",
    },
    {
      id: 15,
      title: "Funghi Jambon *NEW*",
      description:
        "Roast ham and mushrooms run the show, backed with …m, mozzarella, oregano, black pepper, and chives.",
      price: "14.5",
      img: "https://www.nellspizza.co.uk/wp-content/uploads/2023/02/funghijambonnew.png",
    },
    {
      id: 1,
      title: "Original Sausage Material",
      description:
        "House sausage and pepperoni, marinara sauce, mozza…apeño, finished with house chilli sauce and parm.",
      price: "16",
      img: "https://www.nellspizza.co.uk/wp-content/uploads/2023/02/originalsausagematerial14february.png",
    },
  ],
};

describe("ListItem pizza tests", () => {
  beforeEach(() => {
    for (let i = 0; i < data.pizza.length; i++) {
      render(
        <BrowserRouter>
          <ListItem
            title={data.pizza[i].title}
            description={data.pizza[i].description}
            price={data.pizza[i].price}
            itemImage={data.pizza[i].img}
            key={i}
            last={i + 1 === data.pizza.length ? true : false}
          />
        </BrowserRouter>
      );
    }
  });

  test("renders menu images", async () => {
    const images = screen.getAllByAltText("menuItem");
    images.map((image, i) => {
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", `${data.pizza[i].img}`);
    });
  });

  test("renders menu descriptions", async () => {
    const descriptions = screen.getAllByTestId("menu-description");

    descriptions.map((description, i) => {
      expect(description).toBeInTheDocument();
      expect(description).toHaveTextContent(`${data.pizza[i].description}`);
    });
  });

  test("renders menu prices", async () => {
    const prices = screen.getAllByTestId("menu-price");

    prices.map((price, i) => {
      expect(price).toBeInTheDocument();
      expect(price).toHaveTextContent(`${data.pizza[i].price}`);
    });
  });
});
