import React from 'react';
import enzymeToJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import HomePageComponent, { HomePageComponentProps } from './HomePageComponent';

const defaultProps: HomePageComponentProps = {
  handlePageLoad: jest.fn()
};

describe('<HomePage />', () => {
  it('should render correctly', () => {
    const component = shallow(<HomePageComponent {...defaultProps} />);
    expect(enzymeToJson(component)).toMatchSnapshot();
  });
});
