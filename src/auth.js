import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'

import Loading from './components/Loading'

const locationHelper = locationHelperBuilder({})

const userIsAuthenticatedDefaults = {
  // authenticatedSelector: state => (state.user !== undefined && state.user.data !== null),
  authenticatedSelector: state => true,
  authenticatingSelector: state => (state.user !== undefined && state.user.isLoading),
  wrapperDisplayName: 'UserIsAuthenticated'
}

export const userIsAuthenticated = connectedAuthWrapper(userIsAuthenticatedDefaults)

export const userIsAuthenticatedRedir = connectedRouterRedirect({
  ...userIsAuthenticatedDefaults,
  AuthenticatingComponent: Loading,
  redirectPath: '/login'
})

export const userIsAdminRedir = connectedRouterRedirect({
  redirectPath: '/',
  allowRedirectBack: false,
  // authenticatedSelector: state => state.user.data !== null && state.user.data.isAdmin,
  authenticatedSelector: state => true,
  predicate: user => user.isAdmin,
  wrapperDisplayName: 'UserIsAdmin'
})

const userIsNotAuthenticatedDefaults = {
  // Want to redirect the user when they are done loading and authenticated
  // authenticatedSelector: state => state.user.data === null && state.user.isLoading === false,
  // authenticatedSelector: state => (state.user !== undefined && state.user.data === null) && state.user.isLoading === false,
  authenticatedSelector: state => true,
  wrapperDisplayName: 'UserIsNotAuthenticated'
}

export const userIsNotAuthenticated = connectedAuthWrapper(userIsNotAuthenticatedDefaults)

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
  ...userIsNotAuthenticatedDefaults,
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/protected',
  allowRedirectBack: false
})