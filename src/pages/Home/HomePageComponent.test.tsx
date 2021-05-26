import React from 'react';
import enzymeToJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import HomePageComponent from './HomePageComponent';

describe('<HomePage />', () => {
  it('should render correctly', () => {
    const component = shallow(<HomePageComponent />);
    expect(enzymeToJson(component)).toMatchSnapshot();
  });
});
