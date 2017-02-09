import React from 'react';
import FacebookLogin from 'react-facebook-login';
import config from '../../serverapi/config';
import {connect} from 'react-redux';
import  * as userActions from '../../actions/userActions';
import {bindActionCreators} from 'redux';

class LoginButton extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook({accessToken, email, id, name}) {
    console.log('Access token: ' + accessToken);
    console.log('Email: ' + email);
    this.props.actions.loginWithFacebook(accessToken);
  }

  render() {
    const loggedUserName = this.props.me ? 'Logged in as ' + this.props.me.name : 'Not logged in';
    return (
        <FacebookLogin
          appId={config.fbAppId}
          fields="name,email"
          scope="public_profile,user_friends,email"
          callback={this.responseFacebook}/>
    );
  }
}

LoginButton.propTypes =  {
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
