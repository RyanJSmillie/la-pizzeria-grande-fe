import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InstaGrid from "./InstaGrid";
import { BrowserRouter } from "react-router-dom";

describe("InstaGrid tests", () => {
  test("renders three images", async () => {
    const items = [
      {
        permalink: "https://www.instagram.com/p/CvzIpqfoQ31/",
        mediaUrl:
          "https://scontent-muc2-1.cdninstagram.com/v/t51.293…mGEaRRLq9N5vqfOLQyEMQp7WA4OaLL6Xc-HBA&oe=64DF4F0F",
      },

      {
        permalink: "https://www.instagram.com/p/CvzIndvogpT/",
        mediaUrl:
          "https://scontent-muc2-1.cdninstagram.com/v/t51.293…-GMO8ja6Sk64YMhBiU1zdvPQr5ob6-p1tsraQ&oe=64DF35C3",
      },

      {
        permalink: "https://www.instagram.com/p/CvzIlBdIvvF/",
        mediaUrl:
          "https://scontent-muc2-1.cdninstagram.com/v/t51.293…ZdGl5f3cDR4el9viwSwJ1ILoRKQ5htFcaku-w&oe=64DE94AE",
      },
    ];

    render(
      <BrowserRouter>
        <InstaGrid items={items} />
      </BrowserRouter>
    );

    const images = screen.getByTestId("instaContainer");
    expect(images.children).toHaveLength(3);
  });

  test("renders three placeholder images", async () => {
    const items = [];

    render(
      <BrowserRouter>
        <InstaGrid items={items} />
      </BrowserRouter>
    );

    const images = screen.getByTestId("instaContainer");
    expect(images.children).toHaveLength(3);
  });
});
