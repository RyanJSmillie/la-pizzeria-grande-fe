import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

describe("NavBar tests", () => {
  beforeEach(() => {
    return render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });

  test("renders logo", async () => {
    const logo = screen.getAllByAltText("logo");
    const logoText = screen.getByText("La Pizzeria Grande");

    expect(logo[0]).toBeInTheDocument();
    expect(logoText).toBeInTheDocument();
  });

  test("renders nav links", async () => {
    const homeLink = screen.getByText(/Home/i);
    const menuLink = screen.getByText(/Menu/i);
    const contactLink = screen.getByText(/Contact/i);

    expect(homeLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test("renders button", async () => {
    const button = screen.getByText("Book a Table");
    expect(button).toBeInTheDocument();
  });

  test("renders dark mode", async () => {
    const darkMode = screen.getByTestId("dark-mode");
    expect(darkMode).toBeInTheDocument();
  });
});
