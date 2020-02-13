import React from 'react';
import PropTypes from 'prop-types';

export default class PlayerInput extends React.Component {
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
