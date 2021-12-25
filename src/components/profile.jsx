import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = (props) => {
  const navigate = useNavigate()
  return (
    <Fragment>
      <h1>Profile</h1>
      <button
        onClick={() => {
          navigate('/')
        }}
      >
        Go to Home
      </button>
    </Fragment>
  )
}

export default Profile
