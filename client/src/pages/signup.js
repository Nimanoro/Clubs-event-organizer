import React from 'react'
import {useEffect, useState} from 'react'

function SignUp() {
    const [data, setData] = useState('')

    useEffect(() => {
        fetch('/signupPage')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);



  return (
    <div>
       {data ? <h1>{data.message}</h1> : 'Loading...'}
    </div>
  )
}

export default SignUp
