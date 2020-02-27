import React, { useContext } from 'react'
import CounterButton from './CounterButton'
import CounterContext from './contexts/CounterContext'

const Counter = () => {
  const { count, increment, decrement } = useContext(CounterContext)

  return (
    <>
      <p>This is a simple example of a React component.</p>
      <p aria-live="polite">
        Current count: <strong>{count}</strong>
      </p>
      <CounterButton text="Increment" onClick={() => increment()} />
      <CounterButton text="Decrement" onClick={() => decrement()} />
    </>
  )
}

export default Counter
