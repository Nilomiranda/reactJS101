import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import propTypes from 'prop-types'

class Button extends Component {
  render () {
    return <a href="" onClick={this.props.onClick}>{this.props.children}</a>
  }
}

Button.defaultProps = {
  children: 'Define me motherfucker!'
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  children: propTypes.string
}

class App extends Component {
  handleClick() {
    alert('You finally clicked me!! Thank you!!')
  }

  render () {
    return (
      /**
       * Fragment component act as a <div></div>
       * but with no browser default styling
       */
      <Fragment>
        <h1>Hello ReactJS</h1>
        <Button onClick={this.handleClick}>Now, are you clicking me bitch?</Button>
        <Button />
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'))
