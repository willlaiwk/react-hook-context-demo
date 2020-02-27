import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

const CounterContext = createContext()

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const counterState = {
    count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1)
  }

  return (
    <CounterContext.Provider value={counterState}>
      {children}
    </CounterContext.Provider>
  )
}

CounterContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

CounterContextProvider.defaultProps = {
  children: null
}

export default CounterContext
