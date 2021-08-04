import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

// TODO: Fix these tests doesn't seem to be waiting for animation correctly
test("renders heading text", async () => {
  render(<App />);
  const headingElement = await waitFor(() =>
    screen.findAllByRole("heading", { name: "Browse" })
  );
  // const headingElement = screen.getByRole("heading", { name: "Browse" });

  screen.debug(headingElement);

  expect(headingElement[0]).toBeInTheDocument();
});

// test("updates heading text when clicking on sidenav item", () => {
//   render(<App />);
//   const sideNavBtn = screen.getByRole("button", { name: "Recordings" });
//   userEvent.click(sideNavBtn);
//   const headingElement = screen.getByRole("heading", { name: "Recordings" });
//   screen.debug(headingElement);
//   expect(headingElement).toHaveStyle("opacity: 1");
// });
