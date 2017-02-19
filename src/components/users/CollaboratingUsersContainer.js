import React, {PropTypes} from 'react';

const CollaboratingsUsersContainer = ({users = [], me = {}}) => {
  if (users && users.length > 1) {
    return (<div>
        Collaborating on this list with: &nbsp;
        {users
          .filter(user => user && user._id != me._id)
          .map(user => user.name)
          .join(',')}
      </div>
    );
  } else {
    return <div></div>;
  }
};

CollaboratingsUsersContainer.propTypes = {
  users: React.PropTypes.array.isRequired,
  me: React.PropTypes.object.isRequired
};

export default CollaboratingsUsersContainer;
