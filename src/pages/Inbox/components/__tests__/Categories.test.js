import React from "react";
import { render } from "@testing-library/react";
import Categories from "../Categories";

describe("Categories", () => {
  test("should render Categories", () => {
    const { asFragment } = render(<Categories />);

    expect(asFragment()).toMatchSnapshot();
  });
});
