import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

describe("Footer tests", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  test("renders nav links", async () => {
    const homeLink = screen.getByText(/Home/i);
    const menuLink = screen.getByText(/Menu/i);
    const contactLink = screen.getByText(/Contact/i);
    const instagramLink = screen.getByText(/Follow us on Instagram/i);

    expect(homeLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
  });

  test("renders address", async () => {
    const address = screen.getByText("Where to find us.");
    expect(address).toBeInTheDocument();
  });
});
