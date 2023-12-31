import React from 'react'
import {useEffect, useState} from 'react'

function Home() {
    const [data, setData] = useState('')

    useEffect(() => {
        fetch('/homePage')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);



  return (
    <div>
       {data ? <h1 className="text-3xl font-bold">{data.message}</h1> : 'Loading...'}
    </div>
  )
}

export default Home
