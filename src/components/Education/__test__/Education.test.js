import { render } from "@testing-library/react";
import Education from "..";

describe("<Education />", () => {
  test("should render without crashing", () => {
    const { container } = render(<Education />);
    expect(container).toBeTruthy();
  });
});
