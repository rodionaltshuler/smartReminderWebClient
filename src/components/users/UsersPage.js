import React from 'react';
import UsersContainer from './UsersContainer';

class UsersPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.showUser = this.showUser.bind(this);
  }

  showUser(user) {
    console.log("User " + user.name + " selected");
  }

  render() {
    return <UsersContainer
      title="Smart Reminder users"
      itemActionHandler={this.showUser}
      itemActionCaption="Show"
    />
  }

}

export default UsersPage;
