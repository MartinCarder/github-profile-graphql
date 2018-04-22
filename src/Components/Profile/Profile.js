import React from 'react'
import PropTypes from 'prop-types'
import { ProfileImg } from './Profile.styles.js'

const Profile = ({ avatarUrl, bio, company, location, name, login }) => {
  return (
    <div>
      <ProfileImg img={avatarUrl} />
      <p data-id="name">{name}</p>
      <p data-id="login">{login}</p>
      {bio && <p data-id="bio">{bio}</p>}
      {company && <p data-id="company">{company}</p>}
      {location && <p data-id="location">{location}</p>}
    </div>
  )
}

Profile.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  bio: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
}

export default Profile
