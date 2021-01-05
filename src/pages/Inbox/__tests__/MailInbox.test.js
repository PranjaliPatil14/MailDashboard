import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MailInbox from "../MailInbox";

describe("MailInbox", () => {
  test("should render mail inbox", () => {
    const { asFragment, queryByText } = render(<MailInbox />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText("Send")).not.toBeInTheDocument();
  });

  test("should render compose email popup onclick of compose email button", () => {
    const { getByText } = render(<MailInbox />);

    fireEvent.click(getByText("Compose Mail"));
    expect(getByText("Send")).toBeInTheDocument();
  });
});
