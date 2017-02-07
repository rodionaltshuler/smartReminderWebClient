import React from 'react';
import {connect} from 'react-redux';
import  * as itemListsActions from '../../actions/itemListsActions';
import {bindActionCreators} from 'redux';
import ItemLists from './ItemLists';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class ItemListsPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      unsavedItemsListName: "",
      errors: {},
      saving: false
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onRemoveItemsList = this.onRemoveItemsList.bind(this);
    this.onShowListContents = this.onShowListContents.bind(this);
    this.showSaved = this.showSaved.bind(this);
  }

  onNameChange(event) {
    const unsavedItemsListName = event.target.value;
    this.setState({unsavedItemsListName});
  }

  onClickSave() {
    this.setState({saving: true});
    this.props.actions.addItemsList(this.state.unsavedItemsListName)
      .then(() =>
        this.showSaved())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  showSaved() {
    toastr.success('Items list ' + this.state.unsavedItemsListName + ' saved');
    this.setState({saving: false, unsavedItemsListName: ''})
  }

  onRemoveItemsList(itemsList) {
    if (itemsList) {
      console.log("OnRemoveItemsList arg: " + JSON.stringify(itemsList));
      this.props.actions.removeItemsList(itemsList)
        .then(() => {
          toastr.warning('deleted');
        })
        .catch(error => {
          toastr.error(error);
        });
    }
  }

  onShowListContents(itemsList) {
    if (itemsList) {
      console.log("onShowListContents arg: " + JSON.stringify(itemsList));
      browserHistory.push('/lists/' + itemsList._id);
    }
  }

  render() {
    return (
      <div>
        <h2>My lists</h2>
        <ItemLists
          itemLists={this.props.itemLists}
          removeItemHandler={this.onRemoveItemsList}
          showListContentsHandler={this.onShowListContents}/>
        <h2>Add List</h2>
        <input type="text"
               onChange={this.onNameChange}
               value={this.state.unsavedItemsListName}/>

        <input
          type="submit"
          disabled={this.state.saving}
          className="btn"
          value={this.state.saving ? 'Saving...' : 'Save'}
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
