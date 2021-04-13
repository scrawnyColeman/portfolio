import { render } from "@testing-library/react";
import App from "..";

describe("<App />", () => {
  test("should render without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
