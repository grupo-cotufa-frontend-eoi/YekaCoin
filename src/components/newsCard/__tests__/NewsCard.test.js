import NewsCard from "../NewsCard.vue";
import { render, screen } from "@testing-library/vue";
import json from "../../../../public/news.json";
import "@testing-library/jest-dom";

describe("Should render Component", () => {
  const news = json.news[0];
  render(NewsCard, {
    propsData: {
      item: {
        title: news.title,
        text: news.text
      }
    }
  });

  it("should render Title", () => {
    const title = screen.getByText(news.title);
    expect(title).toBeInTheDocument();
  });
});
