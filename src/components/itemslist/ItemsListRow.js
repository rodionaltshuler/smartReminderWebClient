import React from 'react';
import UsersContainer from '../users/UsersContainer';

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

    const itemRow = (
      <tr>
        <td>{itemsList.name}</td>
        <td><input type="submit" className="btn" value="Open" onClick={this.showItemsList}/></td>
        <td><input type="submit" className="btn" value={this.state.collaboratingUsersExpanded ? "Hide users" : "Invite users"}
                   onClick={this.toggleCollaboratingUsers}/></td>
        <td><input type="submit" className="btn btn-danger" value="Remove" onClick={this.removeItemsList}/></td>
      </tr>
    );

    const expandedUsers = this.state.collaboratingUsersExpanded ?
      (
        <tr>
          <UsersContainer
            title="Invite users"
            itemActionHandler={this.inviteUser}
            itemActionCaption="Invite"
            excludedUserIds={this.props.itemsList.collaboratingUsers}
          />
        </tr>
      )
      : null;

    return (
      <div className="bottom-border">
        {itemRow}
        {expandedUsers}
      </div>
    );
  }

}

ItemsListRow.propTypes = {
  itemsList: React.PropTypes.object.isRequired,
  removeItemHandler: React.PropTypes.func.isRequired,
  showItemsListHandler: React.PropTypes.func.isRequired,
  inviteUserHandler: React.PropTypes.func.isRequired,
  collaboratingUsersExpanded: React.PropTypes.bool
};

export default ItemsListRow;
