import React from "react";
import {render, fireEvent, waitForElement} from "@testing-library/react"

import Application from "components/Application";

describe("Rendering Application", () => {

  // it("defaults to Monday and changes the schedule when a new day is selected", () => {
  //   const { getByText } = render(<Application />);
  
  //   return waitForElement(() => getByText("Monday")).then(() => {
  //     fireEvent.click(getByText("Tuesday"));
  //     expect(getByText("Leopold Silvers")).toBeInTheDocument();
  //   });
  // });

  it("changes the schedule when a new day is selected", async () => {
    const { getByText } = render(<Application />);
  
    await waitForElement(() => getByText("Monday"));
  
    fireEvent.click(getByText("Tuesday"));
  
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });

});