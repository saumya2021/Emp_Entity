import React, { Component } from "react";
import axios from "axios";
import { Table, Button, Label, Input, Form } from "reactstrap";

class GetAllEmployee extends Component {
  constructor(props) {
    console.log("Inside constructor");
    super(props);

    this.state = {
      AllEmpData: [],
      errMsg: "",
    };
  }

  /************************************************************************************************** */

  componentDidMount() {
    console.log("Inside componentDidMount of GetAllEmployee");
    axios
      .get("http://localhost:5762/cgemployee/employee")
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          AllEmpData: responseData.data,
        });
      })
      .catch((empError) => {
        console.log(empError);
      });
  }

  handleClick(event) {
    console.log(this.state);
    event.preventDefault();
  }

  /************************************************************************************************** */

  render() {
    console.log("Inside render");
    console.log(this.state.AllEmpData.data);

    return (
      <div data-testid="getAllEmp" aria-required="true">
        <hr></hr>
        <Form onSubmit={this.handleSubmit}>
          <Table bordered dark>
            <thead>
              <tr>
                <th>ID</th>
                <th>EMPName</th>
                <th>EMPPhone</th>
                <th>EMPADDRESS</th>
                <th>Add to Cart</th>
              </tr>
            </thead>
            <tbody>
              {this.state.AllEmpData.map(function (item, key) {
                // if(item.empId === '2')
                return (
                  <tr key={item.empId}>
                    <td>{item.empId}</td>
                    <td>{item.empName}</td>
                    <td>{item.phone}</td>
                    <td>{item.empAddress}</td>
                    <td>
                      <Label Add>
                        <Input type="checkbox" onClick={this.handleClick} />
                        Add
                      </Label>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button>Submit</Button>
        </Form>
        <hr></hr>
      </div>
    );
  }
}

export default GetAllEmployee;
