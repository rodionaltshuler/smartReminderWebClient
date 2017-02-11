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

  render() {
    return (
      <div>
        <table className="table">
          <thead>
          <tr>
            <th>{this.props.currentList ? this.props.currentList.name : "Please log in"}</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          {this.props.items
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
  currentList: React.PropTypes.object,
  me: React.PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.items.filter(item => item.itemsList == ownProps.params.id),
    me: state.me,
    currentList: state.itemLists ?
      state.itemLists.find(itemsList => ownProps.params.id === itemsList._id) :
      null
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);
