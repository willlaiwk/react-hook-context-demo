import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'
import CounterButton from './CounterButton'

const Counter = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <>
      <p>This is a simple example of a React component.</p>
      <p aria-live="polite">
        Current count: <strong>{count}</strong>
      </p>
      <CounterButton text="Increment" onClick={() => dispatch(increment())} />
      <CounterButton text="Decrement" onClick={() => dispatch(decrement())} />
    </>
  )
}

export default Counter
