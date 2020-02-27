import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'
import CounterButton from './CounterButton'

const Counter = props => (
  <>
    <p>This is a simple example of a React component.</p>
    <p aria-live="polite">
      Current count: <strong>{props.count}</strong>
    </p>
    <CounterButton text="Increment" onClick={() => props.increment()} />
    <CounterButton text="Decrement" onClick={() => props.decrement()} />
  </>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  count: state.counter.count
})

const bindedActions = {
  increment,
  decrement
}

export default connect(mapStateToProps, bindedActions)(Counter)
