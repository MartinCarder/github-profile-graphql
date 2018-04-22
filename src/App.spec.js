import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import createMockedNetworkFetch from 'apollo-mocknetworkinterface'
import { mount, shallow } from 'enzyme'
import App, { GET_USER, ComponentWrapper } from './App'
import { Query } from 'react-apollo'
import Profile from './Components/Profile/Profile'
import Repositories from './Components/Repositories/Repositories'

const createResponse = () => {
  return {
    data: {
      user: {
        id: 1,
        avatarUrl: '',
        bio: '',
        company: '',
        name: '',
        location: '',
        login: '',
        repositories: {
          pageInfo: {
            endCursor: '',
            startCursor: '',
          },
          nodes: [],
        },
      },
    },
  }
}

const mockedNetworkFetch = createMockedNetworkFetch(createResponse, { timeout: 100 })
const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:3000', fetch: mockedNetworkFetch }),
  cache: new InMemoryCache({
    addTypename: false,
  }),
})

describe('<App />', () => {
  const data = {
    user: {
      repositories: { nodes: [] },
      name: 'martin carder',
      avatarUrl: 'http://',
      login: 'martincarder',
    },
  }

  it('should be the correct query', () => {
    expect(GET_USER).toMatchSnapshot()
  })

  it('snapshot of App', () => {
    const wrapper = mount(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    )
    const query = wrapper.find(Query).prop('children')
    const queryWrapper = shallow(query({ loading: false, data: data, error: null }))

    expect(queryWrapper).toMatchSnapshot()
  })

  describe('<ComponentWrapper />', () => {
    it('renders correctly when loading', () => {
      const wrapper = shallow(<ComponentWrapper loading={true} />)
      expect(wrapper.text()).toEqual('Loading...')
    })

    it('renders correctly when erroring', () => {
      const error = {
        message: 'error message',
      }
      const wrapper = shallow(<ComponentWrapper loading={false} error={error} />)
      expect(wrapper.text()).toEqual(`Error! ${error.message}`)
    })

    it('renders correctly when data', () => {
      const wrapper = shallow(<ComponentWrapper loading={false} error={false} data={data} />)

      expect(wrapper.find(Profile).props()).toEqual(data.user)
      expect(wrapper.find(Repositories).prop('repositoriesList')).toEqual(data.user.repositories)
    })
  })
})
