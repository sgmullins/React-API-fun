import React, { Component } from 'react';
//component imports
import PlayerPreview from './PlayerPreview';
import Instructions from './Instructions';
import PlayerInput from './PlayerInput';

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
