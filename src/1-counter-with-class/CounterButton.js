import React from 'react'
import PropTypes from 'prop-types'

const CounterButton = ({ onClick, text }) => (
  <button
    type="button"
    className="btn btn-primary btn-lg"
    style={{ marginRight: '10px' }}
    onClick={e => {
      if (onClick && typeof onClick === 'function') {
        onClick(e)
      }
    }}>
    {text}
  </button>
)

CounterButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
}

CounterButton.defaultProps = {
  onClick: undefined,
  text: ''
}

export default CounterButton
