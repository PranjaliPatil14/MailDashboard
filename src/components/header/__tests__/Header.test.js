import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { UserContext } from "../../../context/userContext";
import { MailContext } from "../../../context/mailContext";

describe("header", () => {
  let component;
  const loggedInUserMails = [
    { id: 1, read: false },
    { id: 1, read: true },
  ];
  const setLoggedInUser = jest.fn();
  beforeEach(() => {
    component = render(
      <UserContext.Provider value={{ setLoggedInUser }}>
        <MailContext.Provider value={{ loggedInUserMails }}>
          <Header />
        </MailContext.Provider>
      </UserContext.Provider>
    );
  });
  test("should render header", () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

  test("should call logout on click of logout button", () => {
    fireEvent.click(component.getByRole("button"));
    expect(setLoggedInUser).toHaveBeenCalledWith({});
  });
});
