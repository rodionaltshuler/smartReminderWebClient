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
        <table className="table">
          <tbody>
          {this.props.usersList
            .filter(user => this.props.excludedUserIds.indexOf(user._id) < 0)
            .map(
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
  usersList: React.PropTypes.array.isRequired,
  itemActionHandler: React.PropTypes.func.isRequired,
  itemActionCaption: React.PropTypes.string.isRequired,
  excludedUserIds: React.PropTypes.array.isRequired
};

export default UsersList;
