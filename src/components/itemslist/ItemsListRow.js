import React from 'react';
import UsersContainer from '../users/UsersContainer';
import CollaboratingUsersContainer from '../users/CollaboratingUsersContainer';

class ItemsListRow extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.removeItemsList = this.removeItemsList.bind(this, this.props.itemsList);
    this.showItemsList = this.showItemsList.bind(this, this.props.itemsList);
    this.inviteUser = this.inviteUser.bind(this);
    this.toggleCollaboratingUsers = this.toggleCollaboratingUsers.bind(this);
    this.state = {
      collaboratingUsersExpanded: false
    };
  }

  toggleCollaboratingUsers() {
    this.setState({
      collaboratingUsersExpanded: !this.state.collaboratingUsersExpanded
    });
  }

  inviteUser(user) {
    this.props.inviteUserHandler(this.props.itemsList, user);
  }

  showItemsList(itemsList) {
    this.props.showItemsListHandler(itemsList);
  }

  removeItemsList(itemsList) {
    this.props.removeItemHandler(itemsList);
  }

  render() {
    const itemsList = this.props.itemsList;

    const expandedUsers = this.state.collaboratingUsersExpanded ?
      (
        <div className="item-row">
          <UsersContainer
            title="Invite users"
            itemActionHandler={this.inviteUser}
            itemActionCaption="Invite"
            excludedUserIds={this.props.itemsList.collaboratingUsers}
          />
        </div>
      )
      : null;

    const itemRow = (
      <div className="item-container">
        <div className="item-row">
          <div className="item-title"> {itemsList.name} </div>
          <input type="submit" className="btn" value="Open" onClick={this.showItemsList}/>
          <input type="submit" className="btn"
                 value={this.state.collaboratingUsersExpanded ? "Hide users" : "Invite users"}
                 onClick={this.toggleCollaboratingUsers}/>
          <input type="submit" className="btn btn-danger" value="Remove" onClick={this.removeItemsList}/>
        </div>
        <div className="flex-wrap">
          <CollaboratingUsersContainer me={this.props.me} users={this.props.users}/>
        </div>
        {expandedUsers}
      </div>
    );

    return itemRow;
  }

}

ItemsListRow.propTypes = {
  me: React.PropTypes.object.isRequired,
  users: React.PropTypes.array.isRequired,
  itemsList: React.PropTypes.object.isRequired,
  removeItemHandler: React.PropTypes.func.isRequired,
  showItemsListHandler: React.PropTypes.func.isRequired,
  inviteUserHandler: React.PropTypes.func.isRequired,
  collaboratingUsersExpanded: React.PropTypes.bool
};

export default ItemsListRow;
