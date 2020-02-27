import React from 'react'
import Counter from './Counter'
import Header from './Header'
import { CounterContextProvider } from './contexts/CounterContext'

const App = () => {
  return (
    <CounterContextProvider>
      <Header />
      <Counter />
    </CounterContextProvider>
  )
}
export default App
