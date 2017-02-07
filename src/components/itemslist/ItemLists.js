import React from 'react';
import ItemsListRow from './ItemsListRow';

class ItemLists extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.onRemoveItemsList = this.onRemoveItemsList.bind(this);
    this.onShowListContents = this.onShowListContents.bind(this);
  }

  onRemoveItemsList(itemsList) {
    this.props.removeItemHandler(itemsList);
  }

  onShowListContents(itemsList) {
    this.props.showListContentsHandler(itemsList);
  }

  render() {
    return (
      <table className="table">
        <tbody>
        {this.props.itemLists.map(
          itemsList => {
            return (
              <ItemsListRow
                key={itemsList._id}
                itemsList={itemsList}
                removeItemHandler={this.onRemoveItemsList}
                showItemsListHandler={this.onShowListContents}
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
  showListContentsHandler: React.PropTypes.func.isRequired
};

export default ItemLists;
