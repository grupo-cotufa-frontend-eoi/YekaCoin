
import SideMenuButton from "../SideMenuButton.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";

describe("SideMenuButton", () => {
  it("An instance of SideMenuButton on Home view should be defined", () => {
    render(SideMenuButton, {
      props: {
        ariaLabel: "Home",
      },
    });

    const button = screen.getByLabelText("Home");
    expect(button).toBeInTheDocument();
  });

  it("An instance of SideMenuButton on CoinChart view should be defined", () => {
    render(SideMenuButton, {
      props: {
        ariaLabel: "CoinChart",
      },
    });

    const button = screen.getByLabelText("CoinChart");
    expect(button).toBeInTheDocument();
  });

  it("An instance of SideMenuButton on Coins view should be defined", () => {
    render(SideMenuButton, {
      props: {
        ariaLabel: "Coins",
      },
    });

    const button = screen.getByLabelText("Coins");
    expect(button).toBeInTheDocument();
  });

  it("An instance of SideMenuButton on ComparisonChart view should be defined", () => {
    render(SideMenuButton, {
      props: {
        ariaLabel: "ComparisonChart",
      },
    });

    const button = screen.getByLabelText("ComparisonChart");
    expect(button).toBeInTheDocument();
  });

  it("An instance of SideMenuButton on Favorite view should be defined", () => {
    render(SideMenuButton, {
      props: {
        ariaLabel: "Favorite",
      },
    });

    const button = screen.getByLabelText("Favorite");
    expect(button).toBeInTheDocument();
  });

  it("An instance of SideMenuButton on News view should be defined", () => {
    render(SideMenuButton, {
      props: {
        ariaLabel: "News",
      },
    });

    const button = screen.getByLabelText("News");
    expect(button).toBeInTheDocument();
  });
});
