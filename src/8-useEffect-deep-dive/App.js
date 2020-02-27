/* eslint-disable no-console */
import React, { useState } from 'react'
import Counter from './Counter'

const App = () => {
  const [isShown, setIsShown] = useState(true)
  const toggleIsShown = () => setIsShown(prevIsShown => !prevIsShown)
  console.log('isShown:', isShown)

  return (
    <div className="container">
      <h1>useEffect Deep Dive</h1>
      <button type="button" className="btn btn-success" onClick={toggleIsShown}>
        {isShown ? 'close' : 'open'}
      </button>
      <hr />
      {isShown && <Counter />}
    </div>
  )
}

export default App
