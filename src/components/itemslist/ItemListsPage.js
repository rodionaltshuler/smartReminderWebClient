import React from 'react';
import {connect} from 'react-redux';
import  * as itemListsActions from '../../actions/itemListsActions';
import {bindActionCreators} from 'redux';
import ItemsListRow from './ItemsListRow';

class ItemListsPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      unsavedItemsListName: ""
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onRemoveItemsList = this.onRemoveItemsList.bind(this);
  }

  onNameChange(event) {
    const unsavedItemsListName = event.target.value;
    this.setState({unsavedItemsListName});
  }

  onClickSave() {
    this.props.actions.addItemsList(this.state.unsavedItemsListName);
  }

  onRemoveItemsList(itemsList) {
    if (itemsList) {
      console.log("OnRemoveItemsList arg: " + JSON.stringify(itemsList));
      this.props.actions.removeItemsList(itemsList);
    }
  }

  render() {
    return (
      <div>
        <h1>Your lists</h1>
        <ul>
          {this.props.itemLists.map(
            itemsList => {
              return (
                <ItemsListRow
                  key={itemsList._id}
                  index={itemsList._id}
                  itemsList={itemsList}
                  removeItemHandler={this.onRemoveItemsList}
                />
              );
            }
          )}
        </ul>
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
    itemLists: state.itemLists
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemListsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListsPage);
