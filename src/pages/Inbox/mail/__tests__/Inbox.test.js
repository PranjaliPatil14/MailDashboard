import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Inbox from "../Inbox";
import { MailContext } from "../../../../context/mailContext";
import mails from "../../../../mockData/mails.json";
import mockUsers from "../../../../mockData/users.json";
import { UserContext } from "../../../../context/userContext";
import { CHANGE_IMPORTANCE } from "../../../../context/mailReducer";

describe("Inbox", () => {
  const loggedInUserMails = mails.splice(0, 2);
  const users = mockUsers;
  const dispatch = jest.fn();
  test("should render sorted Mails", () => {
    const { asFragment, container } = render(
      <UserContext.Provider value={{ users }}>
        <MailContext.Provider value={{ loggedInUserMails }}>
          <Inbox />
        </MailContext.Provider>
      </UserContext.Provider>
    );

    expect(
      asFragment(container.querySelector(".mails-content"))
    ).toMatchSnapshot();
  });

  test("should mark mail as important", () => {
    const { getAllByRole, getByTestId } = render(
      <UserContext.Provider value={{ users }}>
        <MailContext.Provider value={{ loggedInUserMails, dispatch }}>
          <Inbox />
        </MailContext.Provider>
      </UserContext.Provider>
    );

    fireEvent.click(getAllByRole("checkbox")[0]);

    fireEvent.click(getByTestId(CHANGE_IMPORTANCE));

    expect(dispatch).toHaveBeenCalledWith({
      data: [2],
      type: "CHANGE_IMPORTANCE",
    });
  });
});
