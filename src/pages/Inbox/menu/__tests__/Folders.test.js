import React from "react";
import { render } from "@testing-library/react";
import Folders from "../Folders";

describe("Folders", () => {
  test("should render Folders", () => {
    const { asFragment } = render(<Folders />);

    expect(asFragment()).toMatchSnapshot();
  });
});
