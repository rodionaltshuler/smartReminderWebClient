import React from "react";

class AddItem extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {newItemName: ""};

    this.onSave = this.onSave.bind(this);
    this.onItemNameChange = this.onItemNameChange.bind(this);
  }

  onSave(event) {
    console.log("Saving new item: " + this.state.newItemName);
    this.props.addItemHandler(this.state.newItemName);
  }

  onItemNameChange(event) {
    this.setState({newItemName: event.target.value});
  }

  render() {
    return (
      <div className="item-row">
        <input type="text"
               onChange={this.onItemNameChange}
               placeholder="What else to buy?"
               value={this.state.newItemName}
        />

        <input type="submit"
               value="Add item"
               className="btn"
               onClick={this.onSave}/>
      </div>
    );
  }


}

AddItem.propTypes = {
  addItemHandler: React.PropTypes.func.isRequired
};

export default AddItem;

