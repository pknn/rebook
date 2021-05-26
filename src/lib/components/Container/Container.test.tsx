import { shallow } from 'enzyme';
import React from 'react';

import Container from './index';

const mockChildren: JSX.Element = <h1>Hello</h1>;

describe('<Container />', () => {
  it('should render correctly', () => {
    const shallowMounted = shallow(<Container>{mockChildren}</Container>);

    expect(shallowMounted).toMatchSnapshot();
  });
});
