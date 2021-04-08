
import SideMenuButton from "../SideMenuButton.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";

describe("SideMenuButton", () => {
  it("An instance of SideMenuButton should be rendered on the document", () => {
    render(SideMenuButton);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
