import React from "react";
import { render } from "@testing-library/react";
import AppForms from "./AppForms";

describe("AppForms tests", () => {
  it("should render", () => {
    expect(render(<AppForms />)).toBeTruthy();
  });
});
