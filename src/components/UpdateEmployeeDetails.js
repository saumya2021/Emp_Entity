import validator from 'validator' 
import React, { Component } from 'react';
import { Form } from 'reactstrap';
import axios from 'axios';

class UpdateEmployeeDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            empId: 0,
            phone: 0,
            empAddress: "",
            empIdWarn: "",
            empAddressWarn: "",
            empPhoneWarn: ""

        }

        this.changeHandlerEmpId = this.changeHandlerEmpId.bind(this)
        this.changeHandlerAddress = this.changeHandlerAddress.bind(this)
        this.changeHandlerPhone = this.changeHandlerPhone.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }


    changeHandlerEmpId = (event) => {
        this.setState({
            empId: event.target.value,
        })
    }


    changeHandlerAddress = (event) => {
        this.setState({
            empAddress: event.target.value
        })
    }


    changeHandlerPhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }


    validate=()=>{
        let empIdWarn='';
        let empAddressWarn ='';
        let empPhoneWarn = '';

        if(!validator.isMobilePhone(this.state.phone)){
            empPhoneWarn="Invalid Phone Number"
        }
           
        if(!this.state.empId){
            empIdWarn="ID Cannot be blank"
        }

        if(!this.state.empAddress){
          empAddressWarn="Address cannot be blank"
        }

        if(empIdWarn || empAddressWarn || empPhoneWarn){
            this.setState({empIdWarn,empAddressWarn,empPhoneWarn});
            return false;
        }

        return true;

    }






    submitHandler = (event) => {

        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {

        axios.put(`http://localhost:5762/cgemployee/updateEmployee/${this.state.empId}/${this.state.phone}/${this.state.empAddress}`)
        alert("update succesfully")
        console.log("updated successfully")
        }
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.submitHandler}  style={{backgroundColor:'#969696'}} data-testid="updateEmp" aria-required="true">
                    <br></br>
                    <label>Employee Id</label>
                    <input type="text" name="empId" placeholder="Employee Id" value={this.state.empId} onChange={this.changeHandlerEmpId}></input>
                    {this.state.empIdWarn ? <div style={{ color: 'red' }}>{this.state.empIdWarn}</div> : null}
                    <br></br>
                    <br></br>

                    <label>Phone Number</label>
                    <input type="text" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.changeHandlerPhone}></input>
                    <br></br>
                    {this.state.empPhoneWarn ? <div style={{ color: 'red' }}>{this.state.empPhoneWarn}</div> : null}
                    <br></br>

                    <label>Employee Address</label>
                    <input type="text" name="empAddress" placeholder="Employee Address" value={this.state.empAddress} onChange={this.changeHandlerAddress}></input>
                    <br></br>
                    {this.state.empAddressWarn ? <div style={{ color: 'red' }}>{this.state.empAddressWarn}</div> : null}
                    <br></br>

                    <input type="submit" value="Update Info" color="secondary" size="lg" />
                    <br></br>
                </Form>
            </div>
        )
    }
}
export default UpdateEmployeeDetails;