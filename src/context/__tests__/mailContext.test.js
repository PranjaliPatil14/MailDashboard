import React, { useContext } from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../../components/button/Button";
import mails from "../../mockData/mails.json";
import users from "../../mockData/users.json";
import MailContextProvider, { MailContext } from "../mailContext";
import { UserContext } from "../userContext";
import { MARK_DELETED } from "../mailReducer";

const MockComponent = () => {
  const { mails: value, loggedInUserMails, dispatch } = useContext(MailContext);
  return (
    <>
      <span>{value[1]?.body}</span>
      <span>{loggedInUserMails[0]?.body}</span>
      <Button onClick={() => dispatch({ type: MARK_DELETED, data: [1] })}>
        delete
      </Button>
    </>
  );
};

describe("userContext", () => {
  test("should pass mails, loggedInUserMails, dispatch props to child component wrapped in mail Context provider", () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mails));
    Storage.prototype.setItem = jest.fn();

    const loggedInUser = users[1];
    const { asFragment, getByText, queryByText } = render(
      <UserContext.Provider value={{ loggedInUser }}>
        <MailContextProvider>
          <MockComponent />
        </MailContextProvider>
      </UserContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(Storage.prototype.setItem).toHaveBeenCalled();

    fireEvent.click(getByText("delete"));

    expect(
      queryByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget rhoncus metus."
      )
    ).not.toBeInTheDocument();
  });
});
