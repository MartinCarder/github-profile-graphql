import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'
import Profile from './Components/Profile/Profile'
import Repositories from './Components/Repositories/Repositories'

export const GET_USER = gql`
  {
    user(login: "gaearon") {
      avatarUrl
      bio
      company
      name
      location
      login
      repositories(first: 50, orderBy: { field: PUSHED_AT, direction: DESC }) {
        pageInfo {
          endCursor
          startCursor
        }
        nodes {
          id
          name
          description
        }
      }
    }
  }
`

export const ComponentWrapper = ({ loading, error, data }) => {
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  const { user } = data
  return (
    <div className="App">
      <Profile {...user} />
      <Repositories repositoriesList={user.repositories} />
    </div>
  )
}

ComponentWrapper.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.shape({
      message: PropTypes.string.isRequired,
    }),
    PropTypes.bool,
  ]),
  data: PropTypes.shape({
    user: PropTypes.shape({
      repositories: PropTypes.object.isRequired,
    }),
  }),
}

class App extends Component {
  render() {
    return <Query query={GET_USER}>{props => <ComponentWrapper {...props} />}</Query>
  }
}

export default App
