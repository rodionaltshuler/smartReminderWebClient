import React from "react";
import {connect} from 'react-redux';
import  * as itemListsActions from '../../actions/itemListsActions';
import {bindActionCreators} from 'redux';


class AddItem extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      itemsList: props.itemsList,
      newItem: {
        name: ""
      }
    };

    this.onSave.bind(this);
    this.onItemNameChange.bind(this);
  }

  onSave(event) {
    //TODO remove item action
  }

  onItemNameChange(event) {
    //TODO input changed
  }


  render() {
    return (
      <div>
        <input type="text"
               onChange={this.onItemNameChange}
               value={this.state.newItem.name}/>

        <input type="submit"
               value="Add"
               onClick={this.onSave}/>
      </div>
    );
  }


}

AddItem.PropTypes = {
  //itemsList: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  //TODO
  return null;
}

function mapDispatchToProps(dispatch) {
  //TODO
  return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
