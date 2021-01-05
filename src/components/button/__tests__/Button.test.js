import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  const onClick = jest.fn();
  test("should render button", () => {
    const { asFragment, getByRole } = render(
      <Button onClick={onClick}>Text</Button>
    );

    expect(asFragment()).toMatchSnapshot();
    fireEvent.click(getByRole("button"));

    expect(onClick).toHaveBeenCalled();
  });

  test("should render button when classname is passed", () => {
    const { asFragment } = render(
      <Button className="test-class">
        <span>span</span>
      </Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
