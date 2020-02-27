import React, { useContext } from 'react'
import CounterButton from './CounterButton'
import CounterContext, {
  actionCreators as counterActionCreators
} from './contexts/CounterContext'

const Counter = () => {
  const { count, dispatch } = useContext(CounterContext)

  return (
    <>
      <p>This is a simple example of a React component.</p>
      <p aria-live="polite">
        Current count: <strong>{count}</strong>
      </p>
      <CounterButton
        text="Increment"
        onClick={() => dispatch(counterActionCreators.increment())}
      />
      <CounterButton
        text="Decrement"
        onClick={() => dispatch(counterActionCreators.decrement())}
      />
    </>
  )
}

export default Counter
