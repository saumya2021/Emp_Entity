import React, { Component } from 'react'
import axios from "axios";
import { Container, Card, Row, Col, FormGroup, Input, Label  } from "reactstrap";
import validator from 'validator'

export class AddEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {

            empName: "",
            empAddress: "",
            email: "",
            gender: 0,
            doj: 0,
            dob: 0,
            phone: 0,
            designation: 0,
            leavesAvailable: 0,


            empNameWarn: "",
            empAddressWarn: "",
            emailWarn: "",
            genderWarn: 0,
            dojWarn: 0,
            dobWarn: 0,
            phoneWarn: 0,
            designationWarn: 0,
            leavesAvailableWarn: 0,

            empObj: {
                "empId": 0,
                "empName": "",
                "empAddress": "",
                "email": "",
                "gender": 0,
                "doj": 0,
                "dob": 0,
                "phone": 0,
                "designation": 0,
                "leavesAvailable": 0
            }

        }

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }
 /************************************************************************************************** */
    handleChange(event) {

        // const { name, value, type, checked } = event.target;

        this.setState({ [event.target.name]: event.target.value });
    }

 /************************************************************************************************** */

    validate = () => {
        let empNameWarn = "";
        let empAddressWarn = "";
        let emailWarn = "";
        let genderWarn = 0;
        let dojWarn = 0;
        let dobWarn = 0;
        let phoneWarn = 0;
        let designationWarn = 0;
        let leavesAvailableWarn = 0;

        if (!this.state.empAddress) {
            empAddressWarn = "Address cannot be blank"
        }

        if (!this.state.empName) {
            empNameWarn = "Name Cannot be blank"
        }

        if (!this.state.email) {
            emailWarn = "Email cannot be blank"
        }

        if (!this.state.gender) {
            genderWarn = "Select a gender"
        }

        if (!this.state.doj) {
            dojWarn = "Insert Date of Joining"
        }

        if (!this.state.dob) {
            dobWarn = "Insert Date of Birth"
        }


        if (!this.state.phone) {
            phoneWarn = "Invalid Phone Number"
        }

        if (!validator.isMobilePhone(this.state.phone)) {
            phoneWarn = "Invalid Phone Number"
        }

        if (!this.state.designation) {
            designationWarn = "Select your respective designation"
        }

        if (!this.state.leavesAvailable) {
            leavesAvailableWarn = "Leaves cannot be blank"
        }


        if (empAddressWarn || emailWarn || phoneWarn || dojWarn || dobWarn || designationWarn || leavesAvailableWarn || genderWarn || empNameWarn) {
            this.setState({empAddressWarn, emailWarn, phoneWarn, dojWarn, dobWarn, designationWarn, leavesAvailableWarn, genderWarn, empNameWarn });
            return false;
        }
        return true;
    }

 /************************************************************************************************** */

    handleSubmit(event) {

        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {

            let tempEmpObj = {
                "empName": this.state.empName,
                "empAddress": this.state.empAddress,
                "email": this.state.email,
                "gender": this.state.gender,
                "doj": this.state.doj,
                "dob": this.state.dob,
                "phone": this.state.phone,
                "designation": this.state.designation,
                "leavesAvailable": this.state.leavesAvailable
            };

            this.setState({ empObj: tempEmpObj });

            axios.post("http://localhost:5762/cgemployee/addemployee", tempEmpObj)

                .then((empDataRes) => {

                    console.log("Data inserted succesfully " +

                        empDataRes.data.message);
                })

                .catch((erroResp) => {
                    console.log(" There is error in insert op  :" +

                        erroResp.data)
                })

            alert(`${this.state.empName} added successfully Emp`)
        }
}

 /************************************************************************************************** */

    render() {


        return (
            <div>
                <hr></hr>
                <Container >

                    <Card color="secondary">
                    <form onSubmit={this.handleSubmit}>
                    <label for="fname" className="h3 text-center mb-4 light"><br></br>Enter the Employee Details to add employee </label>
                    <Row form>
                    <Col md={6}>
                    <FormGroup>
                    <label>Name</label>
                    <input type="text" name="empName" onChange={this.handleChange} placeholder="Employee Name"></input>
                    {this.state.empNameWarn ? <div style={{ color: 'red' }}>{this.state.empNameWarn}</div> : null}
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup> 
                    <label>Email</label>  
                    <input type="text" name="email" onChange={this.handleChange} placeholder="Email"></input>
                    {this.state.emailWarn ? <div style={{ color: 'red' }}>{this.state.emailWarn}</div> : null}
                    </FormGroup>
                    </Col>
                    </Row>



                    <Row form>
                    <Col md={6}>
                    <FormGroup>
                    <label>Gender</label>
                    <select name="gender" onChange={this.handleChange}>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                    {this.state.genderWarn ? <div style={{ color: 'red' }}>{this.state.genderWarn}</div> : null}
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>   
                    <label>Date of Birth</label>
                    <input type="date" name="dob" onChange={this.handleChange} placeholder="Date of Birth"></input>
                    {this.state.dobWarn ? <div style={{ color: 'red' }}>{this.state.dobWarn}</div> : null}
                    </FormGroup>
                    </Col>
                    </Row>


                   
                    <Row form>
                    <Col md={6}>
                    <FormGroup>
                    <label>Phone No</label>
                    <input type="tel" name="phone" onChange={this.handleChange} placeholder="Contact number"></input>
                    {this.state.phoneWarn ? <div style={{ color: 'red' }}>{this.state.phoneWarn}</div> : null}                  </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>   
                    <label>Date of Joining</label>
                    <input type="date" name="doj" onChange={this.handleChange} placeholder="Date of Joining"></input>
                    {this.state.dojWarn ? <div style={{ color: 'red' }}>{this.state.dojWarn}</div> : null}
                    </FormGroup>
                    </Col>
                    </Row>


                    {/* <Row form> */}
                    <FormGroup row>
                    <Label sm={2}>Address</Label>
                    <Col sm={10}>
                    <Input type="text" name="empAddress" onChange={this.handleChange} placeholder="Employee Address"/>
                    {this.state.empAddressWarn ? <div style={{ color: 'red' }}>{this.state.empAddressWarn}</div> : null}                
                    </Col>
                    </FormGroup>
                    {/* </Row> */}

                    <Row form>
                    <Col md={6}>
                    <FormGroup>
                    <label>Designation</label>
                        <select name="designation" onChange={this.handleChange}>
                            <option value="DEVELOPER">Developer</option>
                            <option value="ANALYST">Analyst</option>
                            <option value="SUPERVISOR">Supervisor</option>
                            <option value="MANAGER">Manager</option>
                            <option value="CLERK">Clerk</option>
                        </select>
                    {this.state.designationWarn ? <div style={{ color: 'red' }}>{this.state.designationWarn}</div> : null}               
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>   
                    <label>Leaves Available</label>
                    <input type="text" name="leavesAvailable" onChange={this.handleChange} placeholder="Leaves Available"></input>
                    {this.state.leavesAvailableWarn ? <div style={{ color: 'red' }}>{this.state.leavesAvailableWarn}</div> : null}
                        
                    </FormGroup>
                    </Col>
                    </Row>


                <input type="submit" value="Add Employee" color="secondary" size="lg" />
                        <br></br>
                        <br></br>
                    </form>
                    </Card>

                </Container>
                <hr></hr>
            </div>
        )
    }
}

export default AddEmployee
