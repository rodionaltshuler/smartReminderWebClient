import React from 'react';

class ItemsListRow extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.removeItemsList = this.removeItemsList.bind(this, this.props.itemsList);
    this.showItemsList = this.showItemsList.bind(this, this.props.itemsList);
  }

  showItemsList(itemsList) {
    this.props.showItemsListHandler(itemsList);
  }

  removeItemsList(itemsList) {
    this.props.removeItemHandler(itemsList);
  }

  render() {
    const itemsList = this.props.itemsList;
    return (
      <tr>
        <td>{itemsList.name}</td>
        <td><input type="submit" value="Open" onClick={this.showItemsList}/></td>
        <td><input type="submit" value="Remove" onClick={this.removeItemsList}/></td>
      </tr>
    );
  }

}

ItemsListRow.propTypes = {
  itemsList: React.PropTypes.object.isRequired,
  removeItemHandler: React.PropTypes.func.isRequired,
  showItemsListHandler: React.PropTypes.func.isRequired
};

export default ItemsListRow;
