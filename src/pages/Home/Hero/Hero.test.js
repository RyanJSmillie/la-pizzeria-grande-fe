import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "./Hero";
import { BrowserRouter } from "react-router-dom";

describe("Hero tests", () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
  });

  test("renders hero title", async () => {
    const title = screen.getByTestId("hero-heading");
    expect(title).toBeInTheDocument();
  });

  test("renders phone number", async () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    const phoneNumber = screen.getByText("+49 152 58780807");
    expect(phoneNumber).toBeInTheDocument();
  });
});
