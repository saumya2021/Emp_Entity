import React, { Component, Fragment } from 'react'
import axios from "axios";
import { Button, Label, Container, Form } from 'reactstrap';

class GetEmployeeById extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empId: "",
            details: [],
            empIdWarn: ""
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    changeHandler = (event) => {
        this.setState({
            empId: event.target.value
        })
    }


    validate = () => {
        let empIdWarn = '';

        if (!this.state.empId) {
            empIdWarn = "ID Cannot be blank"
        }

        if (empIdWarn) {
            this.setState({ empIdWarn });
            return false;
        }

        return true;

    }





    submitHandler = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {


            axios.get(`http://localhost:5762/cgemployee/employee/${this.state.empId}`)
                .then((empdata) => {
                    console.log(empdata);
                    this.setState({
                        details: empdata.data
                    })
                })
                .catch((empError) => { console.log(empError) })

            alert(`${this.state.empId} Details extracted successfully`);
            console.log(`this is empId ${this.state.empId}`)

        }

    }


    render() {
        console.log(this.state.details)
        const detail = this.state.details ? (<div>
            <div className="card col-md-9 offset-md-2 offset-md-1" >
                <h2 className="text-center">Employee Details</h2>

                <div className="card-body" style={{ overflow: 'scroll' }}>
                    <div className="row">
                        <label>Employee ID : </label>
                        <div>{this.state.details.empId}</div>
                    </div>
                    <div className="row">
                        <label>Employee Name : </label>
                        <div>{this.state.details.empName}</div>
                    </div>
                    <div className="row">
                        <label>Employee Address : </label>
                        <div>{this.state.details.empAddress}</div>
                    </div>
                </div>
            </div>
        </div>) : (<div><p> NO Data Exists</p></div>)
       


        return (
            <div  style={{backgroundColor:'#969696'}} data-testid="getEmpById" aria-required="true">
                <Fragment>
                    <div >
                        <div className="container">
                            <div className="row">
                                <div className="card col-md-9 offset-md-2 offset-md-1">

                                    <div className="card-body">
                                        <Form>
                                            <div className="form-group">
                                                <Label>Employee Id </Label>
                                                <input type="text" name="empId" placeholder="Employee Id" value={this.state.empId} className="form-control" onChange={this.changeHandler}></input>
                                                {/* <input type="submit" value="get"  color="secondary" size="lg" /> */}
                                                {this.state.empIdWarn ? <div style={{ color: 'red' }}>
                                                    {this.state.empIdWarn}
                                                </div> : null}
                                            </div>
                                            <Container className="text-center">
                                                <Button outline color="success" onClick={this.submitHandler}>Get Details</Button>
                                                {' '}
                                                {/* <Button onClick={this.handleCancel} outline color="danger">Cancel</Button> */}
                                            </Container>
                                        </Form>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </Fragment>

                {detail}
            </div>
        )
    }
}

export default GetEmployeeById
