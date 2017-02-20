import React from 'react';
import {connect} from 'react-redux';
import  * as itemActions from '../../actions/itemActions';
import {bindActionCreators} from 'redux';
import AddItem from './AddItem';
import ItemRow from './ItemRow';


class ItemsContainer extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.addItemHandler = this.addItemHandler.bind(this);
    this.removeItemHandler = this.removeItemHandler.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadItemsForList(this.props.me, this.props.itemsList._id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.me !== this.props.me) {
      this.props.actions.loadItemsForList(this.props.me, this.props.itemsList._id);
    }
  }

  addItemHandler(itemName) {
    const listId = this.props.itemsList._id;
    this.props.actions.addItem(this.props.me, listId, itemName);
  }

  removeItemHandler(itemId) {
    this.props.actions.removeItem(this.props.me, itemId);
  }

  render() {
    return (
      <div>
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
        <AddItem addItemHandler={this.addItemHandler}/>
      </div>
    );
  }
}

ItemsContainer.propTypes = {
  itemsList: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object,
  me: React.PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.items.filter(item => item.itemsList == ownProps.itemsList._id),
    me: state.me
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
