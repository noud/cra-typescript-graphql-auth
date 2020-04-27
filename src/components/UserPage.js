import React from 'react'
import { graphql } from 'react-apollo'
import { loader } from 'graphql.macro';

import User from '../components/User'

class UserPage extends React.Component {
  render() {
    const id = this.props.data.variables.id;
    const user  = this.props.data['apolloSingleUser'];
    return (
      <div className="w-100 flex justify-center">
          <div className="w-100" style={{ maxWidth: 400 }}>
              <User key={id} user={user} refresh={() => this.props.data.refetch()} />
          </div>
      </div>
    )
  }
}

const UserQuery = loader('../graphql/user.gql');

export default graphql(UserQuery, {
  // The variable $keyword for the query is computed from the
  // React props passed to this container.
  options: (props) => ({
    variables: { id: 5 },
  })})(UserPage)