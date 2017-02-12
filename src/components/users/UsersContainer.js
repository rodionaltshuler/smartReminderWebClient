import React from 'react';
import {connect} from 'react-redux';
import  * as userActions from '../../actions/userActions';
import {bindActionCreators} from 'redux';
import UsersList from './UsersList';

class UsersContainer extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      searching: false,
      searchString: ""
    };

    this.onClickSearch = this.onClickSearch.bind(this);
    this.onSearchStringChange = this.onSearchStringChange.bind(this);
  }

  onClickSearch() {
    this.props.actions.getUsersByName(this.props.me, this.state.searchString);
  }

  onSearchStringChange(event) {
    this.setState({
      searchString: event.target.value
    });
  }

  render() {
    return (
      <div>
        <br />
        <h3>{this.props.title}</h3>
        <input type="text"
               onChange={this.onSearchStringChange}
               value={this.state.searchString}/>

        <input
          type="submit"
          disabled={this.state.searching}
          className="btn"
          value={this.state.searching ? 'Searching...' : 'Search'}
          onClick={this.onClickSearch}/>


        <UsersList
          usersList={this.props.users}
          itemActionHandler={this.props.itemActionHandler}
          itemActionCaption={this.props.itemActionCaption}
          excludedUserIds={this.props.excludedUserIds}
        />
      </div>
    );
  }
}

UsersContainer.propTypes = {
  title: React.PropTypes.string.isRequired,
  itemActionHandler: React.PropTypes.func.isRequired,
  itemActionCaption: React.PropTypes.string.isRequired,
  actions: React.PropTypes.object.isRequired,
  users: React.PropTypes.array,
  me: React.PropTypes.object,
  excludedUserIds: React.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.users,
    me: state.me
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
