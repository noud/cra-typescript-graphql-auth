import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Route } from 'react-router'

import './App.css';
import Dashboard from './Dashboard'
import UserPage from './UserPage'

import { logout } from '../actions/user'
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir, userIsAdminRedir,
userIsAuthenticated, userIsNotAuthenticated } from '../auth'
import LoginComponent from './Login'

import AdminComponent from './Admin'
import ProtectedComponent from './Protected'
// import Home from './Home'

const getUserName = user => {
  if (user && user.data) {
    return `Welcome ${user.data.name}`
  }
  return `Not logged in`
}

// Need to apply the hocs here to avoid applying them inside the render method
const Login = userIsNotAuthenticatedRedir(LoginComponent)
const Protected = userIsAuthenticatedRedir(ProtectedComponent)
const Admin = userIsAuthenticatedRedir(userIsAdminRedir(AdminComponent))

// Only show login when the user is not logged in and logout when logged in
// Could have also done this with a single wrapper and `FailureComponent`
const UserName = ({ user }) => (<div className="username">{getUserName(user)}</div>)
const LoginLink = userIsNotAuthenticated(() => <NavLink activeClassName="active" exact to="/login">Login</NavLink>)
const LogoutLink = userIsAuthenticated(
  ({ logout }) => (
    // eslint-disable-next-line
    <a href="#" onClick={() => logout()}>Logout</a>
  )
)

function App({ user, logout }) {
// function App() {
    return (
    <Router>
      <div>
        <nav className="navigation">
          <NavLink activeClassName="active" exact to="/">Home</NavLink>
          <NavLink activeClassName="active" exact to="/protected">Protected</NavLink>{/* protected */}
          <NavLink activeClassName="active" exact to="/admin">Admin</NavLink>
          <NavLink activeClassName="active" exact to="/user">Profile</NavLink>{/* protected */}
        </nav>
        <nav className="authNavigation">
          <LoginLink />
          <LogoutLink logout={logout} />
          <UserName user={user} />
        </nav>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/protected" component={Protected}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/user" component={UserPage} />
          <Route path="/" component={Dashboard} />
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { logout })(App)
// export default (App)