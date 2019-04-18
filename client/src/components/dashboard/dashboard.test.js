import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard.js';


describe('The Dashboard component',()=>{
    it('renders',()=>{
        render(<Dashboard/>)
    })
    it('should display strike button', ()=>{
        const {getByText} = render(<Dashboard/>)
        getByText(/strike/i);
    })
    it('should display ball button', ()=>{
        const {getByText} = render(<Dashboard/>)
        getByText(/ball/i);
    })
    it('should display foul button', ()=>{
        const {getByText} = render(<Dashboard/>)
        getByText(/foul/i);
    })
    it('should display hit button', ()=>{
        const {getByText} = render(<Dashboard/>)
        getByText(/hit/i);
    })
})
