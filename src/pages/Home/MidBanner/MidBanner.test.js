import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MidBanner from "./MidBanner";
import { BrowserRouter } from "react-router-dom";

describe("MidBanner tests", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <MidBanner />
      </BrowserRouter>
    );
  });

  test("renders instagram link", async () => {
    const link = screen.getByText("Follow us on Instagram");
    expect(link).toHaveAttribute(
      "href",
      "https://www.instagram.com/ryanjsmillie/"
    );
  });
});
