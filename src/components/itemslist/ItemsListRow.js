import React from 'react';

class ItemsListRow extends React.Component {

  constructor(context, props) {
    super(context, props);
    const itemsList = props.itemsList;
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(itemsList) {
    console.log("Removing " + JSON.stringify(itemsList));
    this.props.removeItemHandler(itemsList);
  }

  render() {
    const index = this.props.index;
    const itemsList = this.props.itemsList;
    return (
      <li key={index}>
        {itemsList.name}
        <input type="submit" value="Remove" onClick={() => this.removeItem(itemsList)}/>
      </li>);
  }

}

ItemsListRow.propTypes = {
  index: React.PropTypes.number.isRequired,
  itemsList: React.PropTypes.object.isRequired,
  removeItemHandler: React.PropTypes.func.isRequired
};

export default ItemsListRow;
