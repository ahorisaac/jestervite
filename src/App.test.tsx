import { render, screen } from "@testing-library/react";
import App from "./App";

it("should contain text: hello world", () => {
  render(<App />);

  const message = screen.queryByText("/Hello World/");
  expect(message).toBeDefined();
});
