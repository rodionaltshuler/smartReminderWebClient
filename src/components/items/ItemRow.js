import React from "react";

class ItemRow extends React.Component {

  constructor(context, props) {
    super(context, props);
  }

  render() {
    return (<div>
      {this.props.item.name}
      <input type="submit" value="Remove" onClick={this.props.removeItemHandler}/>
    </div>);
  }
}

ItemRow.propTypes = {
  item: React.PropTypes.object.isRequired,
  removeItemHandler: React.PropTypes.func.isRequired
};

export default ItemRow;
