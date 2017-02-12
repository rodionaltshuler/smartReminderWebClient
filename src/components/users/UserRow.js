import React from 'react';

class UserRow extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onUserClicked = this.onUserClicked.bind(this, this.props.user);
  }

  onUserClicked(user) {
    this.props.userClickHandler(user);
  }

  render() {
    return (
      <tr>
        <td>{this.props.user.name}</td>
        <td><input type="submit"
                   className="btn"
                   value={this.props.actionCaption}
                   onClick={this.onUserClicked}/></td>
      </tr>
    );
  }

}

UserRow.propTypes = {
  user: React.PropTypes.object.isRequired,
  actionCaption: React.PropTypes.string.isRequired,
  userClickHandler: React.PropTypes.func.isRequired
};

export default UserRow;
