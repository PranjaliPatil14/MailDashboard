import React from "react";
import { render } from "@testing-library/react";
import Labels from "../Labels";

describe("Labels", () => {
  test("should render Labels", () => {
    const { asFragment } = render(<Labels />);

    expect(asFragment()).toMatchSnapshot();
  });
});
