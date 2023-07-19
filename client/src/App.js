import React from 'react'
import {useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState('')

  // [] tells it to run only onece when rendered
  useEffect(() => {
    fetch('/sayHi')
      .then(
        res => res.json()
        )
      .then(data => setData(data))
  }, []); 

  return (
    <div>
      {data ? <h1>{data.message}</h1> : 'Loading...'}
    </div>
  )
}

export default App
