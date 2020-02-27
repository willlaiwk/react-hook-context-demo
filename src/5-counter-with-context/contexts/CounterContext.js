import React, { createContext } from 'react'
import PropTypes from 'prop-types'

const CounterContext = createContext()

export class CounterContextProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  decrement() {
    this.setState(prevState => ({ count: prevState.count - 1 }))
  }

  render() {
    const counterState = {
      count: this.state.count,
      increment: this.increment,
      decrement: this.decrement
    }

    return (
      <CounterContext.Provider value={counterState}>
        {this.props.children}
      </CounterContext.Provider>
    )
  }
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
