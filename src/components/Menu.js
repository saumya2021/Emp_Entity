import React from 'react';
import { ListGroup} from 'reactstrap';

// {useState}


import { Link } from 'react-router-dom';


 const Menu = (props) => {

//     const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen(prevState => !prevState);




    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action="">Home</Link>

            <Link className="list-group-item list-group-item-action" tag="a" to="/getEmpById" action="">Get Employee By Id</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/getAllEmp" action="">Get All Employee</Link>

            <Link className="list-group-item list-group-item-action" tag="a" to="/addEmp" action="">Add Employee</Link>

            <Link className="list-group-item list-group-item-action" tag="a" to="/updateEmpDetails" action="">
                Update Employee Details

                {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        Update Employee Details
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem><Link className="list-group-item list-group-item-action" tag="a" to="/updateEmpPhone" action="">Update Phone </Link></DropdownItem>
                        <DropdownItem><Link className="list-group-item list-group-item-action" tag="a" to="/updateEmpAddress" action="">Update Address</Link></DropdownItem>
                    </DropdownMenu>
                </Dropdown> */}

            </Link>

            <Link className="list-group-item list-group-item-action" tag="a" to="/empStrength" action="">Employee Strength</Link>

            <Link className="list-group-item list-group-item-action" tag="a" to="/deleteEmp" action="">Delete Employee</Link>

        </ListGroup>
    );

}

export default Menu;