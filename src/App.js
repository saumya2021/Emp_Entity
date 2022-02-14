
 import './App.css';


import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from './components/Home';
import Header from './components/Header';
import Menu from './components/Menu';
import UpdateEmployeeDetails from './components/UpdateEmployeeDetails';
import GetAllEmployee from './components/GetAllEmployee';
import GetEmployeeById from './components/GetEmployeeById';
import DeleteEmployee from './components/DeleteEmployee';
import AddEmployee from './components/AddEmployee'
import Footer2 from './components/Footer2'
import GetEmpStrength from './components/GetEmpStrength';

function App() {

  return (<div>
    <Router>
      
      <Container className="text-center">
        <Header />
        <Row>

          <Col md={4}>
            <Menu/> 
            
            {/* Menu having link to all the components */}
        </Col>

          <Col md={8}>
          <Route path="/" component={Home} exact />
          <Route path="/getAllEmp" component={GetAllEmployee} exact /> 
          <Route path="/getEmpById" component={GetEmployeeById} exact /> 
          <Route path="/deleteEmp" component={DeleteEmployee} exact /> 
          <Route path="/addEmp" component={AddEmployee} exact /> 
          <Route path="/updateEmpDetails" component={UpdateEmployeeDetails} exact /> 
          <Route path="/empStrength" component={GetEmpStrength} exact /> 
        
          </Col>

        </Row>
    <Footer2/>
      </Container>
    </Router>
   
  </div >
  );
}


export default App;
