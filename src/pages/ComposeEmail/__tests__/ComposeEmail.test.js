import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ComposeEmail from "../ComposeEmail";
import { MailContext } from "../../../context/mailContext";
import { UserContext } from "../../../context/userContext";
import mockUsers from "../../../mockData/users.json";

describe("composeEmail", () => {
  const setShowCompose = jest.fn();
  const dispatch = jest.fn();
  const loggedInUser = mockUsers[0];
  const users = mockUsers;
  let component;
  beforeEach(() => {
    component = render(
      <UserContext.Provider value={{ loggedInUser, users }}>
        <MailContext.Provider value={{ dispatch }}>
          <ComposeEmail setShowCompose={setShowCompose} />
        </MailContext.Provider>
      </UserContext.Provider>
    );
  });
  test("should render compose email form", () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

  test("should call dispatch with send mail action", () => {
    jest.useFakeTimers();
    const mockDate = new Date(1466424490000);
    const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    global.Math.random = () => 0.5;

    fireEvent.change(component.getByTestId("to"), {
      target: { value: "pqr@gmail.com" },
    });
    fireEvent.change(component.getByTestId("cc"), {
      target: { value: "mat@gmail.com" },
    });
    fireEvent.change(component.getByTestId("body"), {
      target: { value: "hello" },
    });
    fireEvent.click(component.getByText("Send"));

    expect(dispatch).toHaveBeenCalledWith({
      data: {
        attachment: false,
        body: "hello",
        cc: [3],
        from: 1,
        id: "500-Mon Jun 20 2016 17:38:10 GMT+0530 (India Standard Time)",
        important: false,
        read: false,
        tag: "",
        time: "Mon Jun 20 2016 17:38:10 GMT+0530 (India Standard Time)",
        to: [2],
      },
      type: "SEND_MAIL",
    });

    jest.advanceTimersByTime(1001);
    expect(setShowCompose).toHaveBeenCalledWith(false);
    spy.mockRestore();

    jest.useRealTimers();
  });

  test("should call send mail with only to receipient", () => {
    jest.useFakeTimers();
    const mockDate = new Date(1466424490000);
    const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);
    global.Math.random = () => 0.5;

    fireEvent.change(component.getByTestId("to"), {
      target: { value: "pqr@gmail.com" },
    });

    fireEvent.change(component.getByTestId("body"), {
      target: { value: "hello" },
    });
    fireEvent.click(component.getByText("Send"));

    expect(dispatch).toHaveBeenCalledWith({
      data: {
        attachment: false,
        body: "hello",
        cc: [-1],
        from: 1,
        id: "500-Mon Jun 20 2016 17:38:10 GMT+0530 (India Standard Time)",
        important: false,
        read: false,
        tag: "",
        time: "Mon Jun 20 2016 17:38:10 GMT+0530 (India Standard Time)",
        to: [2],
      },
      type: "SEND_MAIL",
    });

    jest.advanceTimersByTime(1001);
    expect(setShowCompose).toHaveBeenCalledWith(false);
    spy.mockRestore();

    jest.useRealTimers();
  });
});
