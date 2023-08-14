import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "./ContactForm";
import { BrowserRouter } from "react-router-dom";

describe("ContactForm tests", () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <ContactForm />
      </BrowserRouter>
    );
  });

  test("renders form elements", async () => {
    const formName = screen.getByTestId("form-name");
    const formEmail = screen.getByTestId("form-email");
    const formSubject = screen.getByTestId("form-subject");
    const formMessage = screen.getByTestId("form-message");

    expect(formName).toHaveTextContent("Name");
    expect(formName).toContainHTML('<input type="text" name="name" />');
    expect(formEmail).toHaveTextContent("Email");
    expect(formEmail).toContainHTML('<input type="email" name="email" />');
    expect(formSubject).toHaveTextContent("Subject");
    expect(formSubject).toContainHTML('<input type="text" name="subject" />');
    expect(formMessage).toHaveTextContent("Message");
    expect(formMessage).toContainHTML('<textarea name="message" />');
  });
});
