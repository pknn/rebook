import React from 'react';
import enzymeToJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { HomePageComponent } from '.';

const defaultProps = {
  push: jest.fn()
};

describe('<HomePage />', () => {
  it('should render correctly', () => {
    const component = shallow(<HomePageComponent push={defaultProps.push} />);
    expect(enzymeToJson(component)).toMatchSnapshot();
  });
});
