
import SideMenuButton from "../SideMenuButton.vue";
import { render, screen } from "@testing-library/vue";

describe("SideMenuButton", () => {
  it("An instance of SideMenuButton on Home view should be defined", () => {
    render(SideMenuButton);

    const button = screen.getByRole("button");
    expect(button).toBeDefined();
  });
});
