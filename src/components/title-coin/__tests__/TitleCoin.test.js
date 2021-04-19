import Title from "../TitleCoin.vue";
import { render, screen } from "@testing-library/vue";

describe("Should render Component", () => {
  test("should render titles", () => {
    render(Title);

    const cripto = screen.getByText("Currency");
    const value = screen.getByText("Value");
    const change = screen.getByText("Change");
    const favorite = screen.getByText("Favorite");

    expect(cripto).toBeDefined();
    expect(value).toBeDefined();
    expect(change).toBeDefined();
    expect(favorite).toBeDefined();
  });
});
