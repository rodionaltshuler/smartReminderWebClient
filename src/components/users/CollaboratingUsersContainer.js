import React, {PropTypes} from 'react';

const CollaboratingsUsersContainer = ({me, itemsList}) => {
  return (
    <div>
      {itemsList.collaboratingUsers
        .filter(id => id != me._id)
        .join(", ")}
    </div>
  );
};

CollaboratingsUsersContainer.propTypes = {
  itemsList: React.PropTypes.object.isRequired,
  me: React.PropTypes.object.isRequired
};

export default CollaboratingsUsersContainer;
