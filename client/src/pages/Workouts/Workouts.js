import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import Dropdown1 from "../../components/Dropdown1";
import Dropdown2 from "../../components/Dropdown2";
import Dropdown3 from "../../components/Dropdown3";
import Dropdown4 from "../../components/Dropdown4";
import Dropdown5 from "../../components/Dropdown5";
import Dropdown6 from "../../components/Dropdown6";
import Dropdown7 from "../../components/Dropdown7";
import Dropdown8 from "../../components/Dropdown8";

export default class Example extends React.Component {
 // constructor(props) {
 //   super(props);

 //   this.toggleNavbar = this.toggleNavbar.bind(this);
 //   this.state = {
 //     collapsed: true
 //   };
 // }

 // toggleNavbar() {
 //   this.setState({
 //     collapsed: !this.state.collapsed
 //   });
 // }
 render() {
   return (
     <Container>
       <Jumbotron body inverse style={{ backgroundColor: '#424242', borderColor: '#333' }}>

         <Row>
           <Col>
             <Jumbotron body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}>
               <h1 className="lead">Choose Type of Workout</h1>

               <Dropdown1 />
               <Dropdown2 />
               <Dropdown3 />
               <Dropdown4 />
               <Dropdown5 />
               <Dropdown6 />
               <Dropdown7 />
               <Dropdown8 />

             </Jumbotron>

           </Col>
           <Col>
             <Row>
               <div>
               <Jumbotron body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}>
                   <h1 className="display-3">Video Here</h1>
                 </Jumbotron>
               </div>
             </Row>
             <Row>
               <div>
               <Jumbotron body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}>
                   <h1 className="display-3">Chosen Workout</h1>
                   <p className="lead">Category</p>
                   <hr className="my-2" />
                   <p>Workout info Workout info Workout info Workout info Workout info Workout info Workout info
                   Workout info Workout info Workout info Workout info Workout info Workout info Workout info
                   </p>
                   <p className="lead">
                   </p>
                 </Jumbotron>
               </div>

             </Row>
           </Col>

         </Row>
       </Jumbotron>

     </Container>

   );
 }
}