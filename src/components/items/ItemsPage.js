import React from 'react';
import {connect} from 'react-redux';
import  * as itemActions from '../../actions/itemActions';
import {bindActionCreators} from 'redux';
import AddItem from './AddItem';
import ItemRow from './ItemRow';


class ItemsPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.addItemHandler = this.addItemHandler.bind(this);
    this.removeItemHandler = this.removeItemHandler.bind(this);
    this.findListName = this.findListName.bind(this);
  }

  addItemHandler(itemName) {
    const listId = this.props.params.id;
    this.props.actions.addItem(listId, itemName);
  }

  removeItemHandler(itemId) {
    this.props.actions.removeItem(itemId);
  }

  findListName(listId) {
    const itemsList = this.props.itemLists.find(itemsList => itemsList._id === listId);
    return itemsList? itemsList.name : '#' + listId;
  }

  render() {
    return (
      <div>
        <h2>{this.findListName(this.props.params.id)}</h2>

        {this.props.items.map(
          item => {
            return (
              <ItemRow
                key={item._id}
                item={item}
                removeItemHandler={() => this.removeItemHandler(item._id)}
              />
            );
          }
        )}

        <AddItem addItemHandler={this.addItemHandler}/>
      </div>
    );
  }
}

ItemsPage.propTypes = {
  params: React.PropTypes.object.isRequired,
  items: React.PropTypes.array.isRequired,
  itemLists: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.items,
    itemLists: state.itemLists
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);
