import React from 'react';

class ItemsListRow extends React.Component {

  constructor(context, props) {
    super(context, props);
  }

  render() {
    const itemsList = this.props.itemsList;
    return (
      <li>
        <a href={'/lists/' + itemsList._id}>{itemsList.name}</a>
        <input type="submit" value="Remove" onClick={this.props.removeItemHandler}/>
      </li>);
  }

}

ItemsListRow.propTypes = {
  itemsList: React.PropTypes.object.isRequired,
  removeItemHandler: React.PropTypes.func.isRequired
};

export default ItemsListRow;
