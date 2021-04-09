import LogoLetters from "../LogoLetters.vue";
import { render, screen } from "@testing-library/vue";

describe("Should render Component", () => {
  test("debera tener titulo YekaCoins", () => {
    render(LogoLetters);

    const title1 = screen.getByText("Yeka");
    const title2 = screen.getByText("Coin");

    expect(title1).toBeDefined();
    expect(title2).toBeDefined();
  });
});
