import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';

import './Display.js';
import Display from './Display.js';

describe('display component', ()=>{
    it('should render', ()=>{
        render(<Display/>)
    })
    it('it should display heading', ()=>{
        const {getByText} = render(<Display/>)
        getByText(/at bat/i)
    })
    it('it should display balls heading', ()=>{
        const {getByText} = render(<Display/>)
        getByText(/balls/i)
    })
    it('it should display strikes heading', ()=>{
        const {getByText} = render(<Display/>)
        getByText(/strikes/i)
    })
})