import { shallow } from 'enzyme'
import React from 'react'
import Repository from './Repository'

describe('<Repository />', () => {
  it('Displays repositories details', () => {
    const name = 'React'
    const description = 'Predictable state container for JavaScript apps'
    const wrapper = shallow(<Repository name={name} description={description} />)
    const details = wrapper.children()

    expect(details.at(0).text()).toEqual(name)
    expect(details.at(1).text()).toEqual(description)
  })
})
