import React from 'react';
import FacebookLogin from 'react-facebook-login';
import config from '../../serverapi/config';
import {connect} from 'react-redux';
import  * as userActions from '../../actions/userActions';
import {bindActionCreators} from 'redux';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook({accessToken, email, id, name}) {
    console.log('Access token: ' + accessToken);
    this.props.actions.loginWithFacebook(accessToken);
  }

  render() {
    const loggedUserName = this.props.me ? 'Logged in as ' + this.props.me.name : 'Not logged in';
    return (
      <div className="jumbotron">
        <h2>Smart Reminder</h2>
        <br/>
        {loggedUserName}
        <br />
        <br />
        <FacebookLogin
          appId={config.fbAppId}
          autoLoad={true}
          fields="name,email"
          callback={this.responseFacebook}/>
      </div>
    );
  }
}

HomePage.propTypes =  {
  me: React.PropTypes.object,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    me: state.me
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
