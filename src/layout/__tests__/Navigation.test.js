import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navigation from "../Navigation";
import { UserContext } from "../../context/userContext";

describe("Navigation", () => {
  let component;
  const loggedInUser = {
    name: "test",
    role: "test role",
  };
  beforeEach(() => {
    component = render(
      <UserContext.Provider value={{ loggedInUser }}>
        <Navigation>
          <span>Dummy component</span>
        </Navigation>
      </UserContext.Provider>
    );
  });
  test("should render sidebar", () => {
    const { asFragment } = component;
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render expanded sidebar", () => {
    const { asFragment, getByRole } = component;

    fireEvent.click(getByRole("button"));

    expect(asFragment()).toMatchSnapshot();
  });
});
