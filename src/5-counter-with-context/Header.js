import React from 'react'
import CounterContext from './contexts/CounterContext'

const Header = () => (
  <CounterContext.Consumer>
    {counterState => <h1>Counter: {counterState.count}</h1>}
  </CounterContext.Consumer>
)

export default Header
