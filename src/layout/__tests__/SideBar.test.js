import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SideBar from "../SideBar";

describe("SideBar", () => {
  test("should render sidebar", () => {
    const { asFragment } = render(<SideBar />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("should render expanded sidebar", () => {
    const { asFragment, getByRole } = render(<SideBar />);

    fireEvent.click(getByRole("button"));

    expect(asFragment()).toMatchSnapshot();
  });
});
