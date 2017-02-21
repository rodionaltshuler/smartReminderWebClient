import React from 'react';
import LoginButton from './LoginButton';

class MeBar extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const user = this.props.me;
    if (user) {
      //logged in
      return (
        <div>
          <img className="img-circle"
               src={'https://graph.facebook.com/' + user.oauth + '/picture?type=square'}
               width='36px' height='36px'
          />
          &nbsp; {user.name}
        </div>
      );
    } else {
      //not logged in
      return (
        <div>
          <LoginButton />
          <br />
        </div>
      );
    }

  }

}

MeBar.propTypes = {
  me: React.PropTypes.object
};

export default MeBar;
