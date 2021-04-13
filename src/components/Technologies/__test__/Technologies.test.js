import { render } from "@testing-library/react";
import Technologies from "..";

describe("<Technologies />", () => {
  test("should render without crashing", () => {
    const { container } = render(<Technologies />);
    expect(container).toBeInTheDocument();
  });
});
