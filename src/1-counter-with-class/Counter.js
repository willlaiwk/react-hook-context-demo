import React from 'react'
import CounterButton from './CounterButton'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`
  }

  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  decrement() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }

  render() {
    return (
      <>
        <h1>Counter</h1>
        <p>This is a simple example of a React component.</p>
        <p aria-live="polite">
          Current count: <strong>{this.state.count}</strong>
        </p>
        <CounterButton text="Increment" onClick={this.increment} />
        <CounterButton text="Decrement" onClick={this.decrement} />
      </>
    )
  }
}

export default Counter
