import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import GetEmployeeById from 'd:/react/emp_entity/src/components/GetEmployeeById';

afterEach(cleanup);

it("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<GetEmployeeById />,div)
})

 it("render Update Employee correctly",()=>{
     const {getByTestId}=render(<GetEmployeeById/>)
     expect(getByTestId('getEmpById')).toBeInTheDocument()
})

 