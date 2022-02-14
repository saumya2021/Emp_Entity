import React, { Component } from 'react'
import axios from "axios";

export class GetEmpStrength extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            strength : 0
             
        }
    }

    componentDidMount() {
        console.log("Inside componentDidMount of GetAllEmployee")
        axios.get("http://localhost:5762/cgemployee/strength")
            .then((empStrength) => {
                console.log(empStrength);
                this.setState({
                    strength: empStrength
                })


            })
            .catch((empError) => { console.log(empError) })
    }

    





    render() {
        return (
            <div className="text-center" style={{backgroundColor:'#969696'}} data-testid="getEmpStrength" aria-required="true">
                 {/* <Label>Employee Id </Label> */}
                 {/* <input type="text" name="strength" placeholder="Employee Strength" value={this.state.strength.render}></input> */}
                <h3>Number of Employee in the Organisation is: {this.state.strength.data} </h3>                
            </div>
        )
    }
}

export default GetEmpStrength
