import React from 'react'
import useWindowWith from './useWindowWith'

const Resize = () => {
  const width = useWindowWith()

  return <div>Window Width: {width}</div>
}

export default Resize
