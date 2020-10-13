import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem.js';

const Repos = ({ repos }) => {
  return repos.map((rep) => <RepoItem repo={rep} key={rep.id} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
