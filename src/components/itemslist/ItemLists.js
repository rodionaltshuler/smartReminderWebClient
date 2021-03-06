import React from 'react';
import ItemsListRow from './ItemsListRow';

class ItemLists extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.onRemoveItemsList = this.onRemoveItemsList.bind(this);
    this.onShowListContents = this.onShowListContents.bind(this);
    this.onInviteUser = this.onInviteUser.bind(this);
  }

  onInviteUser(itemsList, user) {
    this.props.inviteUserHandler(itemsList, user);
  }

  onRemoveItemsList(itemsList) {
    this.props.removeItemHandler(itemsList);
  }

  onShowListContents(itemsList) {
    this.props.showListContentsHandler(itemsList);
  }

  render() {
    if (this.props.me) {
      return (
        <div>
          {this.props.itemLists.map(
            itemsList => {
              return (
                <ItemsListRow
                  key={itemsList._id}
                  me={this.props.me}
                  itemsList={itemsList}
                  users={itemsList.collaboratingUsers.map(id => this.props.users[id])}
                  removeItemHandler={this.onRemoveItemsList}
                  showItemsListHandler={this.onShowListContents}
                  inviteUserHandler={this.onInviteUser}
                />
              );
            }
          )}
        </div>
      );
    } else {
      return <div>Please log in</div>
    }

  }

}
ItemLists.propTypes = {
  me: React.PropTypes.object,
  users: React.PropTypes.object.isRequired,
  itemLists: React.PropTypes.array.isRequired,
  removeItemHandler: React.PropTypes.func.isRequired,
  showListContentsHandler: React.PropTypes.func.isRequired,
  inviteUserHandler: React.PropTypes.func.isRequired
};

export default ItemLists;
