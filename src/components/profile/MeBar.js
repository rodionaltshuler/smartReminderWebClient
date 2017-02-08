import React from 'react';
import {connect} from 'react-redux';
import  * as itemActions from '../../actions/itemActions';
import {bindActionCreators} from 'redux';

class MeBar extends React.Component {

  constructor(props, context) {
    super(props, context);
  }


  render() {
    const user = this.props.user;
    return (
      <div>
        <img className="img-circle"
             src={'http://graph.facebook.com/' + user.oauth + '/picture?type=square'}
             width='36px' height='36px'
        />
        &nbsp; {user.name}
      </div>
    );
  }

}

MeBar.propTypes = {
  user: React.PropTypes.object.required
};

export default MeBar;
