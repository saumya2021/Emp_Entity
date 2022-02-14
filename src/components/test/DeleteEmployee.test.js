import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import DeleteEmployee from 'd:/react/emp_entity/src/components/DeleteEmployee';

afterEach(cleanup);

it("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<DeleteEmployee />,div)
})

 it("render Delete Employee correctly",()=>{
     const {getByTestId}=render(<DeleteEmployee/>)
     expect(getByTestId('deleteEmployee')).toBeInTheDocument()
})

 