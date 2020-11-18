import React from "react";
import { render } from "@testing-library/react";
import MyNumber from "./MyNumber";

describe("MyNumber tests", () => {
  it("should render", () => {
    expect(render(<MyNumber />)).toBeTruthy();
  });
});
