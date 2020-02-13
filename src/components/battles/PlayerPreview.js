import React from 'react';
import PropTypes from 'prop-types';

export default function PlayerPreview({ username, onReset, label }) {
  return (
    <div className='column player'>
      <h2 className='api-fail'>NO LONGER FUNCTIONAL DUE TO API CHANGES</h2>;
    </div>
  );
}
PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
