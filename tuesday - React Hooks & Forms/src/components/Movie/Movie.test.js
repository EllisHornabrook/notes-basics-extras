import React from "react";
import { render } from "@testing-library/react";
import Movie from "./Movie";

describe("Movie tests", () => {
  it("should render", () => {
    expect(render(<Movie />)).toBeTruthy();
  });
});
