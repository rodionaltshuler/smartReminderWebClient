import React from "react";

class ItemRow extends React.Component {

  constructor(context, props) {
    super(context, props);
  }

  render() {
    return (
      <div className="item-row">
        <div className="item-title">{this.props.item.name}</div>
        <input type="submit" className="btn" value="Done" onClick={this.props.removeItemHandler}/>
      </div>
    );
  }
}

ItemRow.propTypes = {
  item: React.PropTypes.object.isRequired,
  removeItemHandler: React.PropTypes.func.isRequired
};

export default ItemRow;
