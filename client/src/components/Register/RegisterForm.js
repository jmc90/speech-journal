import React from 'react'
import { Link } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'


const RegisterForm = ({ handleChange, handleRegister, firstName, username, password, errorMessage }) => {
  return (
    <div className="page d-flex justify-content-center align-items-center">
      <Form className="register-signin bg-info text-center rounded" onSubmit={handleRegister}>
        <h1>Register</h1>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input 
            type="text"
            name="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={handleChange}
            required />
        </FormGroup>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input 
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleChange}
            required />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input 
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            required />
        </FormGroup>
        <Button>Register</Button>
        <Link className="d-block" to="/signin">Already Registered?</Link>
        {
          errorMessage &&
          <p style={{color: "red"}}>{errorMessage}</p>
        }

      </Form>
    </div>
  )
}

export default RegisterForm
