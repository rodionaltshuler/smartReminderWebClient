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

  componentDidMount() {
    this.props.actions.loadItemsForList(this.props.me, this.props.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.me !== this.props.me) {
      this.props.actions.loadItemsForList(this.props.me, this.props.params.id);
    }
  }

  addItemHandler(itemName) {
    const listId = this.props.params.id;
    this.props.actions.addItem(this.props.me, listId, itemName);
  }

  removeItemHandler(itemId) {
    this.props.actions.removeItem(this.props.me, itemId);
  }

  findListName(listId) {
    const itemsList = this.props.itemLists.find(itemsList => itemsList._id === listId);
    return itemsList ? itemsList.name : 'Please log in';
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
          <tr>
            <th>{this.findListName(this.props.params.id)}</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          {this.props.items
            .filter(item => item.itemsList === this.props.params.id)
            .map(
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
          </tbody>
        </table>
        <br/>
        <AddItem addItemHandler={this.addItemHandler}/>
      </div>
    );
  }
}

ItemsPage.propTypes = {
  params: React.PropTypes.object.isRequired,
  items: React.PropTypes.array.isRequired,
  itemLists: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired,
  me: React.PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.items,
    itemLists: state.itemLists,
    me: state.me
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);
