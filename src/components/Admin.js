import React from 'react'
import { connect } from 'react-redux'

const Admin = ({ authData }) => {
  return <div>{`Welcome admin user: ${authData && authData.name}. You must be logged in as an admin if you are seeing this page.`}</div>
}

// const userData = state !== undefined  && state.user !== undefined ? state.user.data: nnull
const userData = undefined

export default connect(state => ({ authData: userData }))(Admin)