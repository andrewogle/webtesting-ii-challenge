import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import "./Display.js";
import Display from "./Display.js";

describe("display component", () => {
  it("should render", () => {
    render(<Display />);
  });
  it("it should display heading", () => {
    const { getByText } = render(<Display />);
    getByText(/at bat/i);
  });
 
  
  it("it should display defualt data", () => {
      const player = {
          balls:2,
          strikes: 1
      }
      const {getByText} = render(<Display balls = {player.balls}/>);
      getByText('Balls: 2')
  });
  it("it should display defualt data", () => {
    const player = {
        balls:2,
        strikes: 3
    }
      const {getByText} = render(<Display strikes = {player.strikes}/>);
      getByText('Strikes: 3');

      
  });
});
