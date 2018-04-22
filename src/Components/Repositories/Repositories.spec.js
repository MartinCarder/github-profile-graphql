import { shallow } from 'enzyme'
import React from 'react'
import Repositories from './Repositories'
import Repository from './Repository'

describe('<Repositories />', () => {
  const repos = {
    nodes: [
      {
        id: '1234',
        name: 'Repo one',
        description: 'This is repo one!',
      },
      {
        id: '1235',
        name: 'Repo two',
        description: 'This is repo two!',
      },
    ],
  }
  it('renders correct number of Repositories', () => {
    const wrapper = shallow(<Repositories repositoriesList={repos} />)
    expect(wrapper.find(Repository).length).toEqual(2)
  })
})
