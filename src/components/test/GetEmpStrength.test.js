import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import GetEmpStrength from 'd:/react/emp_entity/src/components/GetEmpStrength';

afterEach(cleanup);

it("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<GetEmpStrength />,div)
})

 it("render Update Employee correctly",()=>{
     const {getByTestId}=render(<GetEmpStrength/>)
     expect(getByTestId('getEmpStrength')).toBeInTheDocument()
})

 