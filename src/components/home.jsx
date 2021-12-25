import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const navigate = useNavigate()
  return (
    <Fragment>
      <h1>Home</h1>
      <button
        onClick={() => {
          navigate('/profile')
        }}
      >
        Go to Profile
      </button>
    </Fragment>
  )
}

export default Home
