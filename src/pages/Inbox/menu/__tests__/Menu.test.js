import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Menu from "../Menu";

describe("Menu", () => {
  test("should render inbox menu", () => {
    const setShowCompose = jest.fn();
    const { asFragment, getByText } = render(
      <Menu setShowCompose={setShowCompose} />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText("Compose Mail"));

    expect(setShowCompose).toHaveBeenCalledWith(true);
  });
});
