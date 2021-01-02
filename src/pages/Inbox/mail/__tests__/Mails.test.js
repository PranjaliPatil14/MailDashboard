import React from "react";
import { render } from "@testing-library/react";
import Mails from "../Mails";

describe("Mails", () => {
  test("should render Mails", () => {
    const { asFragment } = render(<Mails />);

    expect(asFragment()).toMatchSnapshot();
  });
});
