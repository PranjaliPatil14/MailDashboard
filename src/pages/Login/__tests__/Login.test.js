import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "../Login";
import { UserContext } from "../../../context/userContext";

describe("login", () => {
  const setLoggedInUser = jest.fn();
  const users = [{ email: "abc@gmail.com", password: "abc" }];
  let component;
  beforeEach(() => {
    component = render(
      <UserContext.Provider value={{ setLoggedInUser, users }}>
        <Login />
      </UserContext.Provider>
    );
  });
  test("should call setLoggedInUser if password and username is correct", () => {
    expect(component.asFragment()).toMatchSnapshot();
    fireEvent.change(component.getByTestId("username"), {
      target: {
        value: "abc@gmail.com",
      },
    });
    fireEvent.change(component.getByTestId("password"), {
      target: {
        value: "abc",
      },
    });

    fireEvent.click(component.getByText("Login"));

    expect(setLoggedInUser).toHaveBeenCalled();
  });

  test("should not call setLoggedInUser if password and username is incorrect", () => {
    fireEvent.change(component.getByTestId("username"), {
      target: {
        value: "abc@gmail.com",
      },
    });
    fireEvent.change(component.getByTestId("password"), {
      target: {
        value: "wrong password",
      },
    });

    fireEvent.click(component.getByText("Login"));

    expect(setLoggedInUser).not.toHaveBeenCalled();
  });
});
