import React from "react";
import { render } from "@testing-library/react";
import MovieList from "./MovieList";

describe("MovieList tests", () => {
  it("should render", () => {
    expect(render(<MovieList />)).toBeTruthy();
  });
});
