import React from "react";
import { render } from "@testing-library/react";
import Home from "../Home";
import { UserContext } from "../../context/userContext";

describe("Home", () => {
  test("should render mail dashboard if some user has logged in", () => {
    const { queryByText } = render(
      <UserContext.Provider value={{ loggedInUser: { name: "test user" } }}>
        <Home />
      </UserContext.Provider>
    );

    expect(queryByText("IN+")).toBeInTheDocument();
    expect(queryByText("Welcome")).not.toBeInTheDocument();
  });

  test("should render Login screen if there is no logged in user", () => {
    const { queryByText } = render(
      <UserContext.Provider value={{ loggedInUser: {} }}>
        <Home />
      </UserContext.Provider>
    );

    expect(queryByText("Welcome")).toBeInTheDocument();
    expect(queryByText("IN+")).not.toBeInTheDocument();
  });
});
