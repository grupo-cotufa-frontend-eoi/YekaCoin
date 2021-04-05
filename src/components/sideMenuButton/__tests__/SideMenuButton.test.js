
import SideMenuButton from "../SideMenuButton.vue";
import { render, screen } from "@testing-library/vue";

describe("SideMenuButton", () => {
  it("An instance of SideMenuButton on Home view should be defined", () => {
    render(SideMenuButton, {
      props: {
        label: {
          view: "Home",
        },
      },
    });

    const button = screen.getByLabelText("Home");
    expect(button).toBeDefined();
  });

  it("An instance of SideMenuButton on CoinChart view should be defined", () => {
    render(SideMenuButton, {
      props: {
        label: {
          view: "CoinChart",
        },
      },
    });

    const button = screen.getByLabelText("CoinChart");
    expect(button).toBeDefined();
  });

  it("An instance of SideMenuButton on Coins view should be defined", () => {
    render(SideMenuButton, {
      props: {
        label: {
          view: "Coins",
        },
      },
    });

    const button = screen.getByLabelText("Coins");
    expect(button).toBeDefined();
  });

  it("An instance of SideMenuButton on ComparisonChart view should be defined", () => {
    render(SideMenuButton, {
      props: {
        label: {
          view: "ComparisonChart",
        },
      },
    });

    const button = screen.getByLabelText("ComparisonChart");
    expect(button).toBeDefined();
  });

  it("An instance of SideMenuButton on Favorite view should be defined", () => {
    render(SideMenuButton, {
      props: {
        label: {
          view: "Favorite",
        },
      },
    });

    const button = screen.getByLabelText("Favorite");
    expect(button).toBeDefined();
  });

  it("An instance of SideMenuButton on News view should be defined", () => {
    render(SideMenuButton, {
      props: {
        label: {
          view: "News",
        },
      },
    });

    const button = screen.getByLabelText("News");
    expect(button).toBeDefined();
  });
});
