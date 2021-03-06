import React from 'react';
import {connect} from 'react-redux';
import  * as itemListsActions from '../../actions/itemListsActions';
import {bindActionCreators} from 'redux';
import ItemLists from './ItemLists';
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
    this.onInviteUser = this.onInviteUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.me) {
      if (this.props.me !== nextProps.me) {
        this.props.actions.loadItemLists(nextProps.me);
      }
    }
  }

  onNameChange(event) {
    const unsavedItemsListName = event.target.value;
    this.setState({unsavedItemsListName});
  }

  onClickSave() {
    this.setState({saving: true});
    this.props.actions.addItemsList(this.props.me, this.state.unsavedItemsListName)
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

  onInviteUser(itemsList, user) {
    this.props.actions.shareListWithUser(this.props.me, itemsList, user)
      .then(() => {
        toastr.success(user.name + ' now has access to ' + itemsList.name);
      })
      .catch(error => {
        toastr.error(error);
      });
  }

  onRemoveItemsList(itemsList) {
    if (itemsList) {
      console.log("OnRemoveItemsList arg: " + JSON.stringify(itemsList));
      this.props.actions.removeItemsList(this.props.me, itemsList)
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
    }
  }

  render() {
    console.log("ItemListsPage: render, me is " + this.props.me);
    const addList = this.props.me ?
      (
        <div className="item-row">
          <br />
          <input type="text"
                 placeholder="Type list title here"
                 onChange={this.onNameChange}
                 value={this.state.unsavedItemsListName}/>

          <input
            type="submit"
            disabled={this.state.saving}
            className="btn"
            value={this.state.saving ? 'Saving...' : 'Add another list'}
            onClick={this.onClickSave}/>
        </div>
      )
      : null;

    return (
      <div>
        <ItemLists
          me={this.props.me}
          users={this.props.users}
          itemLists={this.props.itemLists}
          removeItemHandler={this.onRemoveItemsList}
          showListContentsHandler={this.onShowListContents}
          inviteUserHandler={this.onInviteUser}
        />
        {addList}
      </div>
    );
  }
}

ItemListsPage.propTypes = {
  itemLists: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired,
  users: React.PropTypes.object.isRequired,
  me: React.PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    itemLists: state.itemLists,
    users: state.users.cache,
    me: state.me
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemListsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListsPage);
