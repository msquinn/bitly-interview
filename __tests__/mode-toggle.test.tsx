import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

describe("ModeToggle", () => {
  it("should render the component", () => {
    render(<ModeToggle />);
    expect(screen.getByText("Toggle theme")).toBeInTheDocument();
  });

  it("should display the theme menu when clicked", async () => {
    const user = userEvent.setup();
    render(<ModeToggle />);
    await user.click(screen.getByRole("button"));
    expect(screen.getByText("Light")).toBeInTheDocument();
    expect(screen.getByText("Dark")).toBeInTheDocument();
    expect(screen.getByText("System")).toBeInTheDocument();
  });

  it("should close the menu when a theme is selected", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ModeToggle />
      </ThemeProvider>
    );
    await user.click(screen.getByRole("button"));
    await user.click(screen.getByText("Dark"));
    expect(screen.getByText("Toggle theme")).toBeInTheDocument();
  });
});
