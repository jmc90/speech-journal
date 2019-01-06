import React from 'react'
import { withUser } from '../../context/UserProvider'
import { NavLink } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
  } from 'reactstrap'

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { token, logOut } = this.props
    return (
      <div>
        <Navbar dark expand="md">
          {token && <NavLink activeClassName="text-primary" className="text-white" to="/journal">Journal</NavLink>}
          <NavbarToggler className="bg-info" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="px-2">
                {!token ? <NavLink activeClassName="text-primary" className="text-white" to="/signin">Sign In</NavLink> : <NavLink activeClassName="text-primary" className="text-white" to="/entryhistory">View Entries</NavLink>}
              </NavItem>
              <NavItem className="px-2">
                {!token ? <NavLink activeClassName="text-primary" className="text-white" to="/register">Register</NavLink> : <NavLink className="text-white" to="/" onClick={logOut}>Logout</NavLink>}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withUser(NavbarContainer)

// import React from 'react'
// import { Link } from "react-router-dom"
// import { withUser } from '../../context/UserProvider'


// const Navbar = (props) => {
//   const { isAuthenticated, logOut } = props
//   return (
//     <div>
//       { !isAuthenticated && <Link to="/">Landing Page</Link>}
//       { !isAuthenticated && <Link to="/signin">Sign In</Link>}
//       { !isAuthenticated && <Link to="/register">Register</Link>}
//       { isAuthenticated && <Link to="/journal">Journal</Link>}
//       { isAuthenticated && <Link to="/entryhistory">View Entries</Link>}
//       { isAuthenticated && <Link to="/" onClick={logOut}>Logout</Link>}
//     </div>
//   )
// }

// export default withUser(Navbar)
