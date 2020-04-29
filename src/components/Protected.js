import React from 'react'
import { connect } from 'react-redux'

const Protected = ({ authData }) => {
  return (
    <div>{`This is a protected page, you must be logged in if you are seeing this. Welcome ${authData && authData.name}`}</div>
  )
}

// const userData = state !== undefined  && state.user !== undefined ? state.user.data : undefined
const userData = undefined

export default connect(state => ({ authData: userData }))(Protected)