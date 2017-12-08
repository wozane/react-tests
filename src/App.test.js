import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  const wrapper = shallow(<App />)

  it('should have `th` "Items"', () => {
    expect(wrapper.contains(<th>Items</th>)).toBe(true)
  })

  it('should have button element', () => {
    expect(wrapper.containsMatchingElement(<button>Add item</button>)).toBe(true)
  })

  it('`button` should be disabled', () => {
    const button = wrapper.find('button').first()
    expect(button.props().disabled).toBe(true)
  })
})
