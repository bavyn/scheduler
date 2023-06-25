import React from "react";
import {render} from "@testing-library/react"

import Application from "components/Application";


describe("Rendering Application", () => {
  it("renders without crashing", () => {
    render(<Application />);
  });
});