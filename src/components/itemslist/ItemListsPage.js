import React from 'react';
import {connect} from 'react-redux';
import  * as itemListsActions from '../../actions/itemListsActions';
import {bindActionCreators} from 'redux';

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
    this.props.actions.addItemsList(this.state.itemsList);
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
               value={this.state.itemsList.name}/>

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

function mapDispatchToProps(dispatch ) {
  return {
    actions: bindActionCreators(itemListsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListsPage);
