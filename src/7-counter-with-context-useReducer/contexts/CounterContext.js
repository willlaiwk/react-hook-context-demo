import React, { useReducer, createContext } from 'react'
import PropTypes from 'prop-types'

// ---- ActionTypes -----
const INCREMENT_COUNT = 'INCREMENT_COUNT'
const DECREMENT_COUNT = 'DECREMENT_COUNT'

// ---- Actions -----
export const actionCreators = {
  increment: () => ({ type: INCREMENT_COUNT }),
  decrement: () => ({ type: DECREMENT_COUNT })
}

// ---- Reducer -----
const initialState = {
  count: 0
}

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT_COUNT: {
      return { ...state, count: state.count + 1 }
    }

    case DECREMENT_COUNT: {
      return { ...state, count: state.count - 1 }
    }

    default:
      throw new Error('Unknown action.type...')
  }
}

// ---- Context -----
const CounterContext = createContext()

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const contextState = { ...state, dispatch }

  return (
    <CounterContext.Provider value={contextState}>
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
