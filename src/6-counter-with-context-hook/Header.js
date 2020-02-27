import React, { useContext } from 'react'
import CounterContext from './contexts/CounterContext'

const Header = () => {
  const { count } = useContext(CounterContext)

  return <h1>Counter: {count}</h1>
}

export default Header
