import React, { useContext } from 'react';
import UserItem from './UserItem.js';
import Spinner from '../layout/Spinner.js';
import GithubContext from '../../context/github/githubContext.js';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

// se puede tener un css en un objeto y usarlo en el return ( pero lo normal es usar el app.css)
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;