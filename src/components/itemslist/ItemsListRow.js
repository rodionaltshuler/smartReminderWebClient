import React from 'react';

class ItemsListRow extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.removeItemsList = this.removeItemsList.bind(this, this.props.itemsList);
  }

  removeItemsList(itemsList) {
    this.props.removeItemHandler(itemsList);
  }

  render() {
    const itemsList = this.props.itemsList;
    return (
      <li>
        <a href={'/lists/' + itemsList._id}>{itemsList.name}</a>
        <input type="submit" value="Remove" onClick={this.removeItemsList}/>
      </li>);
  }

}

ItemsListRow.propTypes = {
  itemsList: React.PropTypes.object.isRequired,
  removeItemHandler: React.PropTypes.func.isRequired
};

export default ItemsListRow;
