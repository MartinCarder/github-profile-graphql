import React from 'react'
import { ProfileImg } from './Profile.styles.js'

const Profile = ({ avatarUrl, bio, company, location, name, login }) => {
  return (
    <div>
      <ProfileImg img={avatarUrl} />
      <p data-id='name'>{ name }</p>
      <p data-id='login'>{login}</p>
      { bio &&
        (
          <p data-id='bio'>{bio}</p>
        )
      }
      { company &&
        (
          <p data-id='company'>{company}</p>
        )
      }
      { location &&
        (
          <p data-id='location'>{location}</p>
        )
      }
    </div>
  )
}

export default Profile
