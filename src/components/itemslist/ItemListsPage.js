import React from 'react';
import {connect} from 'react-redux';
import  * as itemListsActions from '../../actions/itemListsActions';
import {bindActionCreators} from 'redux';

class ItemListsPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      unsavedItemsListName: ""
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNameChange(event) {
    const unsavedItemsListName = event.target.value;
    this.setState({ unsavedItemsListName });
  }

  onClickSave() {
    this.props.actions.addItemsList(this.state.unsavedItemsListName);
  }

  listRow(itemsList, index) {
    return <div key={index}>{itemsList.name}</div>;
  }

  render() {
    return (
      <div>
        <h1>Your lists</h1>
        {this.props.itemLists.map(this.listRow)}
        <h2>Add List</h2>
        <input type="text"
               onChange={this.onNameChange}
               value={this.state.unsavedItemsListName}/>

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}/>
      </div>
    );
  }
}

ItemListsPage.propTypes = {
  itemLists: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    itemLists: state.entities.itemLists
  };
}

function mapDispatchToProps(dispatch ) {
  return {
    actions: bindActionCreators(itemListsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListsPage);
