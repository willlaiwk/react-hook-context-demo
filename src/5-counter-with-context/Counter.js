import React from 'react'
import CounterButton from './CounterButton'
import CounterContext from './contexts/CounterContext'

const Counter = () => (
  <CounterContext.Consumer>
    {counterState => (
      <>
        <p>This is a simple example of a React component.</p>
        <p aria-live="polite">
          Current count: <strong>{counterState.count}</strong>
        </p>
        <CounterButton
          text="Increment"
          onClick={() => counterState.increment()}
        />
        <CounterButton
          text="Decrement"
          onClick={() => counterState.decrement()}
        />
      </>
    )}
  </CounterContext.Consumer>
)

export default Counter
