import React, { Component } from 'react';

export default class Loading extends Component {
  state = {
    content: 'Loading',
  };
  render() {
    return <p>{this.state.content}</p>;
  }
}
