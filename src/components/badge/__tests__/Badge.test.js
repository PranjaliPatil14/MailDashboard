import React from "react";
import { render } from "@testing-library/react";
import Badge from "../Badge";

describe("Badge", () => {
  test("should render badge", () => {
    const { asFragment } = render(<Badge text={12} />);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <span
          class="badge"
        >
          12
        </span>
      </DocumentFragment>
    `);
  });
});
