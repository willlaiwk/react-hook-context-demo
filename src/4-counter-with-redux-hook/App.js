import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import Counter from './Counter'
import Header from './Header'

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Counter />
    </Provider>
  )
}
export default App
