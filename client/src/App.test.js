import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

describe('the app component',()=>{
  it('should render', () =>{
    render(<App/>)
  })
  it('should display data', ()=>{
    const {getByText} = render(<App/>);
    getByText(/at bat/i);
  })
it('should display strike button', ()=>{
    const {getByText} = render(<App/>)
    const strikeButton = getByText(/strikes button/i);
    fireEvent.click(strikeButton);
    getByText(/strikes: 1/i);
    cleanup();
})
it('should display ball button', ()=>{
    const {getByText} = render(<App/>)
    const button = getByText(/ball button/i);
    fireEvent.click(button);
    getByText(/balls: 1/i)
    cleanup();
})
it('should display foul button', ()=>{
    const {getByText} = render(<App/>)
    const button = getByText(/foul/i);
    fireEvent.click(button);
    getByText(/strikes: 1/i);
    cleanup();
})
it('should display hit button', ()=>{
    const {getByText} = render(<App/>)
    getByText(/hit/i);
})
})

