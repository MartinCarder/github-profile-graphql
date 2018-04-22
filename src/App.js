import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Profile from './Components/Profile/Profile'
import Repositories from './Components/Repositories/Repositories'
import logo from './logo.svg';
import './App.css';

const GET_USER = gql`
  {
    user(login: "gaearon" ) {
      avatarUrl
      bio
      company
      name
      location
      login
      repositories(first: 20,  orderBy: {field: PUSHED_AT, direction: DESC}) {
        pageInfo{
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
`;

class App extends Component {
  render() {
    return (
      <Query query={GET_USER}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`
          const { user } = data
          return (
            <div className="App">
              <Profile
                avatarUrl={user.avatarUrl}
                bio={user.bio}
                company={user.company}
                location={user.location}
                name={user.name}
              />
              <Repositories repositoriesList={user.repositories}/>
            </div>
          )
        }}
      </Query>

    );
  }
}

export default App;
