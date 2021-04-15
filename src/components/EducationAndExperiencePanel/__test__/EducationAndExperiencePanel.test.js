import { render, screen } from "@testing-library/react";
import EducationAndExperiencePanel from "..";

const title = "Test Title";
const location = "Test Location";
const description = "Test Description";
const sharedProps = {
  title,
  location,
  description
};
const iconsEmpty = [];
const iconsPopulated = [<img src="." alt="Test Img" />];

describe("<EducationAndExperiencePanel />", () => {
  test("should render without crashing", () => {
    const { container } = render(
      <EducationAndExperiencePanel {...sharedProps} icons={iconsEmpty} />
    );
    expect(container).toBeTruthy();
  });
  test("should render correct elements with no icons", () => {
    render(<EducationAndExperiencePanel {...sharedProps} icons={iconsEmpty} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Location")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.queryByRole("img")).toBeNull();
  });
  test("should render correct elements with icons", () => {
    render(
      <EducationAndExperiencePanel {...sharedProps} icons={iconsPopulated} />
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Location")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        alt: "Test Img"
      })
    ).toBeInTheDocument();
  });
});
