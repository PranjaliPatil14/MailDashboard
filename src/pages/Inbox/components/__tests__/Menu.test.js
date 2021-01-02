import React from "react";
import { render } from "@testing-library/react";
import Menu from "../Menu";

describe("Menu", () => {
  test("should render inbox menu", () => {
    const { asFragment } = render(<Menu />);

    expect(asFragment()).toMatchSnapshot();
  });
});
