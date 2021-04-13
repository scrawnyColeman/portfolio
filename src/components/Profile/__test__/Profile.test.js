import { render } from "@testing-library/react";
import Profile from "..";

describe("<Profile />", () => {
  test("should render without crashing", () => {
    const { container } = render(<Profile />);
    expect(container).toBeInTheDocument();
  });
});
