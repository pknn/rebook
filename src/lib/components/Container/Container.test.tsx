import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

import Container from './index';

const mockChildren: JSX.Element = <h1>Hello</h1>;

describe('<Container />', () => {
  it('should render correctly', () => {
    const component = shallow(<Container>{mockChildren}</Container>);

    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
