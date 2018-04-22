import React from 'react'
import { ProfileImg } from './Profile.styles.js'

const Profile = ({ avatarUrl, bio, company, location, name, login }) => {
  return (
    <div>
      <ProfileImg img={avatarUrl} />
      { name } { login } { bio && bio } { company && company } { location && location }
    </div>
  )
}

export default Profile
