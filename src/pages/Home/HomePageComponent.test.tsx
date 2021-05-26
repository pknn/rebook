import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';

import HomePageComponent from './HomePageComponent';

describe('<HomePage />', () => {
  it('should render correctly', () => {
    const component = shallow(<HomePageComponent />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
