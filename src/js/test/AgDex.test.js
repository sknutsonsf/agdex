import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import AgDex from '../AgDex'

describe('<Message />', () => {
  test('renders a single <p> tag', () => {
    const wrapper = shallow(<AgDex />);
    expect(wrapper.find('h1')).toHaveLength(30);
  });
})
