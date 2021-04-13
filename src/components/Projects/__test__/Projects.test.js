import { render } from "@testing-library/react";
import Projects from "..";

describe("<Projects />", () => {
  test("should render without crashing", () => {
    const { container } = render(<Projects />);
    expect(container).toBeInTheDocument();
  });
});
