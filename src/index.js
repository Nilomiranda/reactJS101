import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Button from './Button'

import './style.scss'

class App extends Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render () {
    console.log(this.state.counter)
    return (
      /**
       * Fragment component act as a <div></div>
       * but with no browser default styling
       */
      <Fragment>
        <h1>Hello ReactJS</h1>
        <h2 className="counter">{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Make me count ok?</Button>
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'))
