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
    return (
      <table className="table myTable">
        <tbody>
        {this.props.itemLists.map(
          itemsList => {
            return (
              <ItemsListRow
                key={itemsList._id}
                itemsList={itemsList}
                removeItemHandler={this.onRemoveItemsList}
                showItemsListHandler={this.onShowListContents}
                inviteUserHandler={this.onInviteUser}
              />
            );
          }
        )}
        </tbody>
      </table>
    );
  }

}
ItemLists.propTypes = {
  itemLists: React.PropTypes.array.isRequired,
  removeItemHandler: React.PropTypes.func.isRequired,
  showListContentsHandler: React.PropTypes.func.isRequired,
  inviteUserHandler: React.PropTypes.func.isRequired
};

export default ItemLists;
