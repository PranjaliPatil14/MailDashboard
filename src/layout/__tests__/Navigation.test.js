import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navigation from "../Navigation";

describe("Navigation", () => {
  let component;
  beforeEach(() => {
    component = render(
      <Navigation>
        <span>Dummy component</span>
      </Navigation>
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
