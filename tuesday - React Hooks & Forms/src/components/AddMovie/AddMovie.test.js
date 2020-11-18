import React from "react";
import { render } from "@testing-library/react";
import AddMovie from "./AddMovie";

describe("AddMovie tests", () => {
  it("should render", () => {
    expect(render(<AddMovie />)).toBeTruthy();
  });
});
