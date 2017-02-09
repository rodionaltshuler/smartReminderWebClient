import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import MeBar from '../profile/MeBar';

const Header = ({loading}) => {
  const user = {name: 'Rodion', oauth: 664522183622806};
  return (
    <div>
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/lists" activeClassName="active">My lists</Link>
        {loading && <LoadingDots interval={100} dots={20}/>}
      </nav>
      <br/>
      <MeBar user={user} />
      <br />
    </div>
  );
};

Header.propTypes = {
  loading: React.PropTypes.bool.isRequired
};

export default Header;
