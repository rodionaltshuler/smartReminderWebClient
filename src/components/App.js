import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
      return (
        <div className="container-fluid">
          <Header loading={this.props.loading} me={this.props.me}/>
          {this.props.children}
        </div>
      );
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    me: state.me
  };
}
export default connect(mapStateToProps)(App);
