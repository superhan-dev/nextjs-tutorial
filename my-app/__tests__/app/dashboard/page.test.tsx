import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../../../src/app/dashboard/page";

describe("Dashboard Page", () => {
  it("renders the dashboard page", () => {
    render(<Page />);
    const heading = screen.getByRole("heading", { name: /dashboard/i });
    const paragraph = screen.getByText(/welcome to the dashboard!/i);
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});
