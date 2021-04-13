import { render } from "@testing-library/react";
import User from "..";

describe("<User />", () => {
  test("should render without crashing", () => {
    const { container } = render(<User />);
    expect(container).toBeTruthy();
  });
});
