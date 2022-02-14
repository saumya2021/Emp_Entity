import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import UpdateEmployeeDetails from 'd:/react/emp_entity/src/components/UpdateEmployeeDetails';

afterEach(cleanup);

it("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<UpdateEmployeeDetails />,div)
})

 it("render Update Employee correctly",()=>{
     const {getByTestId}=render(<UpdateEmployeeDetails/>)
     expect(getByTestId('updateEmp')).toBeInTheDocument()
})

 