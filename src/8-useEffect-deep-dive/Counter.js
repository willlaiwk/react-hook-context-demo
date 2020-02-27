/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import CounterButton from './CounterButton'

function useUndefied() {
  useEffect(() => {
    console.log('useUndefied: Effect!!')

    return () => console.log('useUndefied: Clean!!')
  })
}

function useEmptyValue() {
  useEffect(() => {
    console.log('useEmptyValue: Effect!!')

    return () => console.log('useEmptyValue: Clean!!')
  }, [])
}

function useCountLlstener(value) {
  useEffect(() => {
    console.log('useCountLlstener: Effect:', value)

    return () => console.log('useCountLlstener: Clean!!')
  }, [value])
}

function useInputLlstener(value) {
  useEffect(() => {
    console.log('useInputLlstener: Effect:', value)

    return () => console.log('useInputLlstener: Clean!!')
  }, [value])
}

const Counter = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  console.info('========== Render ==========')
  useUndefied()
  useEmptyValue()
  useCountLlstener(count)
  useInputLlstener(text)
  return (
    <>
      <h1>Counter</h1>
      <p>This is a simple example of a React component.</p>
      <p aria-live="polite">
        Current count: <strong>{count}</strong>
      </p>
      <CounterButton text="Increment" onClick={increment} />
      <CounterButton text="Decrement" onClick={decrement} />
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
    </>
  )
}

export default Counter
