import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import  * as itemListsActions from '../../actions/itemListsActions';

class ItemListsPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      itemsList: {
        name: ""
      }
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNameChange(event) {
    const list = this.state.itemsList;
    list.name = event.target.value;
    this.setState({itemsList: list});
  }

  onClickSave() {
    this.props.dispatch(itemListsActions.addList(this.state.itemsList));
  }

  render() {
    return (
      <div>
        <h1>Your lists</h1>
        <h2>Add Items List</h2>
        <input type="text"
               onChange={this.onNameChange}
               value={this.state.itemsList.name}/>

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    itemLists: state.itemLists
  };
}

export default connect(mapStateToProps)(ItemListsPage);
