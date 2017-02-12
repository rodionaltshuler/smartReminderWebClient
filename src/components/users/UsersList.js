import React from 'react';
import UserRow from './UserRow';

class UsersList extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onItemAction = this.onItemAction.bind(this);
  }

  onItemAction(user) {
    this.props.itemActionHandler(user);
  }

  render() {
    return (
      <div>
        <h2>{this.props.listCaption}</h2>
        <table className="table">
          <tbody>
          {this.props.usersList.map(
            user => {
              return (
                <UserRow
                  key={user._id}
                  user={user}
                  actionCaption={this.props.itemActionCaption}
                  userClickHandler={() => this.onItemAction(user)}
                />
              );
            }
          )}
          </tbody>
        </table>
      </div>
    );
  }

}
UsersList.propTypes = {
  listCaption: React.PropTypes.string.isRequired,
  usersList: React.PropTypes.array.isRequired,
  itemActionHandler: React.PropTypes.func.isRequired,
  itemActionCaption: React.PropTypes.string.isRequired
};

export default UsersList;
