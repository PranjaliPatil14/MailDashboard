import React from "react";
import { render } from "@testing-library/react";
import Inbox from "../Inbox";

describe("Inbox", () => {
  test("should render inbox", () => {
    const { asFragment } = render(<Inbox />);

    expect(asFragment()).toMatchSnapshot();
  });
});
