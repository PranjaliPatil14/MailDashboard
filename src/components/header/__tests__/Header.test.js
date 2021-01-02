import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";

describe("header", () => {
  test("should render header", () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});
