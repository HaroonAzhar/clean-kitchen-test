/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen } from "@testing-library/react";
import DatePicker from "../../index";

// test("renders a date picker", () => {
//   render(<DatePicker onDateChange={(date)=>console.log(date)} />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
//   test("renders a label", () => {

//     const label = screen.getByText('Enter delivery date:');
//     expect(label).toBeInTheDocument();
//   });
//   test("renders a day input field", () => {
//     // render(<DatePicker />);
//     const dayInput = screen.getByTestId('ds-day-input')
//     expect(dayInput).toBeTruthy()
//   });
//   // test("renders learn react link", () => {
//   //   render(<DatePicker />);
//   //   const linkElement = screen.getByText(/learn react/i);
//   //   expect(linkElement).toBeInTheDocument();
//   // });
//   // test("renders learn react link", () => {
//   //   render(<DatePicker />);
//   //   const linkElement = screen.getByText(/learn react/i);
//   //   expect(linkElement).toBeInTheDocument();
//   // });
// });

describe("renders a date picker", () => {
  // beforeAll(() => {

  // });
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

  //  describe("Call function with no parameters", () => {
  //   const value = this.inst.run();

  //   test("Should be defined", () => {
  //     //--> at least one test inside describe
  //     expect(value).toBeTruthy();
  //   });

  //   for (/*...each value */) {
  //     test(`Checking ${value.name}`, () => {
  //       expect(value).toBe(correct);
  //     });
  //   }
  //  });
});
