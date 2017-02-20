import React, {PropTypes} from 'react';
import LoadingDots from './LoadingDots';
import MeBar from './MeBar';

const Header = ({loading, me}) => {
  return (
    <div>
      <nav>
        {loading && <LoadingDots interval={100} dots={20}/>}
      </nav>
      <br/>
      <MeBar me={me} />
      <br />
    </div>
  );
};

Header.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  me: React.PropTypes.object
};

export default Header;
