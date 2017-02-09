import React from 'react';
import {Link} from 'react-router';
import FacebookLogin from 'react-facebook-login';
import config from '../../serverapi/config';

class HomePage extends React.Component {

  static responseFacebook({accessToken, email, id, name}) {
    console.log('Access token: ' + accessToken);
  }

  render() {
    return (
      <div className="jumbotron">
        <h2>Smart Reminder</h2>
        <br/>
        <FacebookLogin
          appId={config.fbAppId}
          autoLoad={true}
          fields="name,email"
          callback={HomePage.responseFacebook}/>
      </div>
    );
  }
}

export default HomePage;
