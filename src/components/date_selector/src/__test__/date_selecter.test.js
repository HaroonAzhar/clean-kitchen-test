/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen } from "@testing-library/react";
import DatePicker from "../../index";

describe("renders a date picker", () => {
  test("renders a label", () => {
    render(<DatePicker onDateChange={(date) => console.log(date)} />);
    const label = screen.getByText("Enter delivery date:");
    expect(label).toBeInTheDocument();
  });
  test("renders a day input field", () => {
    render(<DatePicker onDateChange={(date) => console.log(date)} />);
    const dayInput = screen.getByTestId("ds-day-input");
    expect(dayInput).toBeTruthy();
  });
  test("renders a day month field", () => {
    render(<DatePicker onDateChange={(date) => console.log(date)} />);
    const dayInput = screen.getByTestId("ds-month-input");
    expect(dayInput).toBeTruthy();
  });
  test("renders a day year field", () => {
    render(<DatePicker onDateChange={(date) => console.log(date)} />);
    const dayInput = screen.getByTestId("ds-year-input");
    expect(dayInput).toBeTruthy();
  });
});

describe("User can enter value", () => {
  test("Value of day can be set", () => {
    const TEST_VALUE = "2";
    render(<DatePicker onDateChange={(date) => console.log(date)} />);
    const dayInput = screen.getByTestId("ds-day-input");
    dayInput.textContent = "2";
    expect(dayInput.textContent).toEqual(TEST_VALUE);
  });
  test("Value of monh can be set", () => {
    const TEST_VALUE = "10";
    render(<DatePicker onDateChange={(date) => console.log(date)} />);
    const monthInput = screen.getByTestId("ds-month-input");
    monthInput.textContent = "10";
    expect(monthInput.textContent).toEqual(TEST_VALUE);
  });
  test("Value of year can be set", () => {
    const TEST_VALUE = "2012";
    render(<DatePicker onDateChange={(date) => console.log(date)} />);
    const yearInput = screen.getByTestId("ds-year-input");
    yearInput.textContent = "2012";
    expect(yearInput.textContent).toEqual(TEST_VALUE);
  });
});
