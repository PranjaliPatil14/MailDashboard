import React from "react";
import { render } from "@testing-library/react";
import MailHeader from "../MailHeader";

describe("MailHeader", () => {
  test("should render MailHeader", () => {
    const { asFragment } = render(<MailHeader />);

    expect(asFragment()).toMatchSnapshot();
  });
});
