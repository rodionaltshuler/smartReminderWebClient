import React from "react";

class ItemRow extends React.Component {

  constructor(context, props) {
    super(context, props);
  }

  render() {
    return (<tr>
      <td>{this.props.item.name}</td>
      <td><input type="submit" value="Done" onClick={this.props.removeItemHandler}/></td>
    </tr>);
  }
}

ItemRow.propTypes = {
  item: React.PropTypes.object.isRequired,
  removeItemHandler: React.PropTypes.func.isRequired
};

export default ItemRow;
