import React from "react";
import { render } from "@testing-library/react";
import Folders from "../Folders";
import { MailContext } from "../../../../context/mailContext";
import mails from "../../../../mockData/mails.json";

describe("Folders", () => {
  const loggedInUserMails = mails;
  test("should render Folders", () => {
    const { asFragment } = render(
      <MailContext.Provider value={{ loggedInUserMails }}>
        <Folders />
      </MailContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
