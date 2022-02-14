import React, { Component } from 'react'
import axios from "axios";
import { Card, Container} from 'reactstrap';

export class DeleteEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empId: "",
            empIdWarn: ""

        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

 /************************************************************************************************** */
    changeHandler = (event) => {
        this.setState({
            empId: event.target.value

        })
    }

 /************************************************************************************************** */

    submitHandler = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            if(window.confirm("Are you sure?")){
            axios.delete(`http://localhost:5762/cgemployee/deleteEmployee/${this.state.empId}`)
            alert(`empId ${this.state.empId} Deleted Succesfully`)
        }
    }

    }

 /************************************************************************************************** */

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

 /************************************************************************************************** */





    render() {
        console.log(`{this.state.emp}`)
        return (
            <div>
                <Container>
                    <hr></hr>

                    <Card style={{backgroundColor:'#969696'}} data-testid="deleteEmployee" aria-required="true" >


                        <form onSubmit={this.submitHandler}  >
                            <label className="h3 text-center mb-4 light">Enter the Employee Id to Delete </label>
                            <br></br>
                            <input type="text" name="empId" placeholder="Employee Id" value={this.state.empId} onChange={this.changeHandler}></input>
                            <br></br>
                            {this.state.empIdWarn?<div style={{color:'red'}}>
                            {this.state.empIdWarn}
                           </div>:null}
                            <br></br>
                            <br></br>
                            <input type="submit" value="Delete Employee" color="secondary" size="lg" ></input>
                            <br></br>
                            <br></br>
                        </form>
                    </Card>
                    <hr></hr>
                </Container>
            </div>
        )
    }
}

export default DeleteEmployee
