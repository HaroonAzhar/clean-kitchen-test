/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen } from "@testing-library/react";
import TimeSelector from "../../index";

describe("renders a time picker", () => {
  test("renders a dropdown select element", () => {
    render(<TimeSelector availableTimeSlots={["test"]} />);
    const timeSlotsDropDown = screen.getByTestId("ts-select");
    expect(timeSlotsDropDown).toBeTruthy();
  });
  test("renders a select option", () => {
    render(<TimeSelector availableTimeSlots={["test"]} />);
    const timeSlotsDropDown = screen.getByTestId("ts-option");
    expect(timeSlotsDropDown).toBeTruthy();
  });
});

describe("options are selectable", () => {
  test("renders a select option", () => {
    render(<TimeSelector availableTimeSlots={["test", "test2"]} />);
    const timeSlotsDropDown = screen.getByTestId("ts-select");
    timeSlotsDropDown.value = screen.getAllByTestId("ts-option")[1].textContent;
    expect(timeSlotsDropDown.value).toEqual("test2");
  });
});
