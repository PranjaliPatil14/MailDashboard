import React from "react";
import { render } from "@testing-library/react";
import MailInbox from "../MailInbox";

describe("MailInbox", () => {
  test("should render inbox", () => {
    const { asFragment } = render(<MailInbox />);

    expect(asFragment()).toMatchSnapshot();
  });
});
