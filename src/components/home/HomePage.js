import React from 'react';
import {connect} from 'react-redux';

class HomePage extends React.Component {

  render() {
    const loggedUserName = this.props.me ? 'Logged in as ' + this.props.me.name : 'Not logged in';
    if (this.props.me) {
      return (<div className="jumbotron">
          <h2>Smart Reminder</h2>
          <br/>
          {loggedUserName}
        </div>
      );
    } else {
      return (
        <div className="jumbotron">
          <h2>Smart Reminder</h2>
          <br/>
          <br />
          Please log in
        </div>
      );
    }
  }
}

HomePage.propTypes = {
  me: React.PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    me: state.me
  };
}

export default connect(mapStateToProps)(HomePage);
