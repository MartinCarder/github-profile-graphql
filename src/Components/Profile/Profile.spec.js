import { shallow } from 'enzyme'
import React from 'react'
import Profile from './Profile'
import { ProfileImg } from './Profile.styles.js'

describe('<Profile />', () => {
  const data = {
    avatarUrl: 'http://test/test.jpg',
    bio: 'hello',
    company: 'some company',
    location: 'London',
    name: 'Martin Carder',
    login: 'martincarder',
  }

  it('renders correct details', () => {
    const wrapper = shallow(<Profile {...data} />)

    expect(wrapper.find('[data-id="name"]').text()).toEqual(data.name)

    expect(wrapper.find('[data-id="login"]').text()).toEqual(data.login)

    expect(wrapper.find('[data-id="location"]').text()).toEqual(data.location)

    expect(wrapper.find('[data-id="company"]').text()).toEqual(data.company)

    expect(wrapper.find('[data-id="bio"]').text()).toEqual(data.bio)
  })

  it('renders image', () => {
    const wrapper = shallow(<Profile {...data} />)
    const image = wrapper.find(ProfileImg)
    expect(image).toHaveStyleRule('background', `url('${data.avatarUrl}') no-repeat center center`)
  })

  it('Renders correctly when empty data', () => {
    const emptyData = {
      ...data,
      bio: '',
      company: '',
      location: '',
    }

    const wrapper = shallow(<Profile {...emptyData} />).find('p')
    expect(wrapper.length).toEqual(2)
  })
})
