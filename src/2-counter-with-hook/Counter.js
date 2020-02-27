import React, { useState, useEffect } from 'react'
import CounterButton from './CounterButton'

/**
 * Custom Hook for setting document title
 * @param {string} title document title
 */
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}

const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  useDocumentTitle(`You clicked ${count} times`)

  return (
    <>
      <h1>Counter</h1>
      <p>This is a simple example of a React component.</p>
      <p aria-live="polite">
        Current count: <strong>{count}</strong>
      </p>
      <CounterButton text="Increment" onClick={increment} />
      <CounterButton text="Decrement" onClick={decrement} />
    </>
  )
}

export default Counter
