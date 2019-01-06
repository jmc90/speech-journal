import React, { Component } from 'react'
import axios from 'axios'
const todoAxios = axios.create();

todoAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const UserContext = React.createContext()

class UserProvider extends Component {
  constructor() {
    super()
    this.state = {
      user: JSON.parse(localStorage.getItem("user")) || {},
      token: localStorage.getItem("token") || "",
      entries: [],
      singleEntry: {},
      signInErrorMessage: "",
      registerErrorMessage: ""
    }
  }

  register = userInfo => {
   axios.post('/auth/register', userInfo).then(res => {
      const { user, token } = res.data
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("token", token)
      this.setState({
        user: user,
        token: token,
        signInErrorMessage: "",
        registerErrorMessage: ""
      })
    })
    .catch(err => this.handleError(err.response.data.errMsg, 'register'))
  }

  signIn = userInfo => {
    axios.post('/auth/signin', userInfo).then(res => {
      const { token, user } = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      this.setState({
        user: user,
        token: token,
        signInErrorMessage: "",
        registerErrorMessage: ""
      })
      this.getUserEntries()
    })
    .catch(err => this.handleError(err.response.data.errMsg, 'signIn'))
  }

  handleError = (err, errRoute) => {
    if (errRoute === 'signIn') {
      this.setState({
        signInErrorMessage: err
    })
    } else if (errRoute === 'register') {
      this.setState({
        registerErrorMessage: err
      })
    }
  }
    

  logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.setState({
        entries: [],
        singleEntry: {},
        user: {},
        token: ""
    })
  }

  getUserEntries = ()=> {
    todoAxios.get('/api/entry').then(res => {
      let data = res.data.reverse()
      this.setState({
        entries: data
      })
      return res
    })
    .catch(err => console.log(err))
  }

  getSingleEntry = entryId => {
    todoAxios.get(`/api/entry/${entryId}`).then(res => {
      this.setState({
        singleEntry: res.data
      })
      return res
    })
    .catch(err => console.log(err))
  }

  addEntry = post => {
    todoAxios.post('/api/entry', post).then(res => {
      this.setState(prevState => {
        return {
          entries: [...prevState.entries, res.data]
        }
      })
      return res
    })
    .catch(err => console.log(err))
  }

  deleteEntry = entryId => {
    todoAxios.delete(`/api/entry/${entryId}`).then(res => {
      if (res.data === "Successfully deleted entry!") {
        this.setState(prevState => {
          return {
            entries: prevState.entries.filter(entry => entry._id !== entryId)
          }
        })
      }
      return res
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          register: this.register,
          signIn: this.signIn,
          logOut: this.logOut,
          getUserEntries: this.getUserEntries,
          getSingleEntry: this.getSingleEntry,
          addEntry: this.addEntry,
          deleteEntry: this.deleteEntry
        }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider


export const withUser = C => props => (
  <UserContext.Consumer>
    {value => <C {...props} {...value} />}
  </UserContext.Consumer>
)