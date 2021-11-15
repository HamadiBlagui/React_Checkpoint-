import React from 'react';
import {Form} from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Please Fill In This Application</h1>
      <Form className="container">
        <Form.Group className="FirstName" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter First Name" />
    </Form.Group>

   
        <Form.Group className="LastName" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Last Name" />
    </Form.Group>
    
  <Form.Group className="Emailaddress" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     <h7> Never share your email with anyone else.</h7>
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="Password">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check className="Check"    type="checkbox" label="Check me out" />
  </Form.Group>
  <button class="btn btn-animate"> Submit
</button>
</Form>
      
    </div>
  );
}




export default App;
