import React from 'react'

class User extends React.Component {
  render() {
    const name = this.props.user ? this.props.user.name : null;
    const email = this.props.user ? this.props.user.email : null;
    return (
      <div className="pa3 bg-black-05 ma3">
        {email}
        <div className="pt3">
          {this.props.data}&nbsp;
          <span className="red f6 pointer dim" onClick={this.handleDelete}>
            Delete {name}
          </span>
        </div>
      </div>
    )
  }

  handleDelete = () => {
    // TODO: delete post before reloading posts
    this.props.refresh()
    // @todo refresh variables id
    // this.props.refresh({variables: {id: 5}})
  }
}

export default User