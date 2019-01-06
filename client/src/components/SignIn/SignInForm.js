import React from 'react'
import { Link } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'


const SignInForm = ({ handleChange, handleSignIn, username, password, errorMessage }) => {
  return (
    <div className="page d-flex justify-content-center align-items-center">
      <Form className="register-signin bg-info text-center rounded" onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
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
            id="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            required />
        </FormGroup>
        <Button>Sign In</Button>
        <Link className="d-block" to="/register">Don't have an account?</Link>
        {
          errorMessage &&
          <p style={{color: "red"}}>{errorMessage}</p>
        }
      </Form>
      {/* <div>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleChange} />
          <input
            type="text"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange} />
          <button>Sign In</button>
        </form>
        <Link to="/register">Register</Link>
      </div>
      <p>{authErr}</p> */}
    </div>
  )
}

export default SignInForm
