import React, { Component } from 'react';
import { FaUserFriends, FaMountain } from 'react-icons/fa';
import { GiChampions } from 'react-icons/gi';
import PropTypes from 'prop-types';

function Instructions() {
  return (
    <div className='instruction-container'>
      <h1 className='center-text header-lg'>Instructions</h1>
      <ol className='battle-instructions container-sm grid center-text'>
        <li>
          <h3 className='header-sm'>
            <span className='slide'>Enter Two MP Users</span>
          </h3>
          <FaUserFriends className='battle-icons' size={140} />
        </li>
        <li>
          <h3 className='header-sm'>
            <span className='slide'>Battle For The Mountain</span>
          </h3>
          <FaMountain className='battle-icons' size={140} />
        </li>
        <li>
          <h3 className='header-sm '>
            <span className='slide'>See the Winners</span>
          </h3>
          <GiChampions className='battle-icons' size={140} />
        </li>
      </ol>
    </div>
  );
}

class PlayerInput extends React.Component {
  state = {
    username: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  };

  handleChange = e => {
    this.setState({
      username: e.target.value,
    });
  };
  render() {
    return (
      <form action='' className='column player' onSubmit={this.handleSubmit}>
        <label htmlFor='username' className='player-label'>
          {this.props.label}
        </label>
        <div className='row player-inputs'>
          <input
            type='text'
            className='input'
            placeholder='MountainProject Username'
            id='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button className='btn' type='submit' disabled={!this.state.username}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

function PlayerPreview({ username, onReset, label }) {
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

export default class Battle extends Component {
  state = {
    playerOne: null,
    playerTwo: null,
  };
  handleSubmit = (id, player) => {
    this.setState({
      [id]: player,
    });
  };
  render() {
    const { playerOne, playerTwo } = this.state;

    return (
      <React.Fragment>
        <Instructions />
        <div className='players-container'>
          <h1 className='center-text header-lg'>
            <span className='slide'>Potential Kings of the Mountain</span>
          </h1>
          <div className='row space-around'>
            {playerOne === null ? (
              <PlayerInput
                label='Player One'
                onSubmit={player => this.handleSubmit('playerOne', player)}
              />
            ) : (
              <PlayerPreview
                username={playerOne}
                onReset={() => ({})}
                label={'Player One'}
              />
            )}
            {playerTwo === null ? (
              <PlayerInput
                label='Player Two'
                onSubmit={player => this.handleSubmit('playerTwo', player)}
              />
            ) : (
              <PlayerPreview
                username={playerTwo}
                onReset={() => ({})}
                label={'Player Two'}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
