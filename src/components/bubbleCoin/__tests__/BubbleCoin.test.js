
import BubbleCoin from "../BubbleCoin.vue";
import { render, screen } from "@testing-library/vue";

describe("SideMenuButton", () => {
  it("should render component", () => {
    render(BubbleCoin, {
      props: {
        coin: {
          iconUrl: "../../../assets/logo.png",
        },
      },
    });

    const bubble = screen.getByAltText("Bubble image");
    expect(bubble).toBeDefined();
  });
});
