import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import GetAllEmployee from 'd:/react/emp_entity/src/components/GetAllEmployee';

afterEach(cleanup);

it("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<GetAllEmployee />,div)
})

 it("render Update Employee correctly",()=>{
     const {getByTestId}=render(<GetAllEmployee/>)
     expect(getByTestId('getAllEmp')).toBeInTheDocument()
})

 