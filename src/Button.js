import React from 'react'
import propTypes from 'prop-types'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.children}</button>
  )
}

Button.defaultProps = {
  children: 'Tell me what I am for'
}

Button.propTypes = {
  children: propTypes.string,
  onClick: propTypes.func.isRequired
}

export default Button
