import React from 'react';
import ItemsListRow from './ItemsListRow';

class ItemLists extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.onRemoveItemsList = this.onRemoveItemsList.bind(this);
  }

  onRemoveItemsList(itemsList) {
    this.props.removeItemHandler(itemsList);
  }

  render() {
    return (
      <table className="table">
        <thead>
        <tr>
          <th>List name</th>
          <th>&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        {this.props.itemLists.map(
          itemsList => {
            return (
              <ItemsListRow
                key={itemsList._id}
                itemsList={itemsList}
                removeItemHandler={this.onRemoveItemsList}
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
  removeItemHandler: React.PropTypes.func.isRequired
};

export default ItemLists;
