import React, { Component } from 'react'
import { withUser } from '../../context/UserProvider'
import RegisterForm from './RegisterForm'

class Register extends Component  {
  constructor() {
    super() 
    this.state = {
      firstName: "",
      username: "",
      password: ""
    }
  }
  
  handleChange = e => this.setState({[e.target.name]: e.target.value})

  clearInputs = () => {
    this.setState({
        username: "",
        password: ""
    })
  }

  handleRegister = e => {
    e.preventDefault()
    console.log(this.state)
    const userInfo = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName
    }
    this.props.register(userInfo)
    // .then()
    // .catch(err => {
    //   console.dir(err)
    //   this.setState({errorMessage: err.response.data.errMsg})
    // }) 
    this.clearInputs()
  }

  render() {
    return (
      <div>
        <RegisterForm
          handleChange={this.handleChange}
          handleRegister={this.handleRegister}
          firstName={this.state.firstName}
          username={this.state.username}
          password={this.state.password}
          errorMessage={this.props.registerErrorMessage} />
      </div>
    )
  }
  
}

export default withUser(Register)
