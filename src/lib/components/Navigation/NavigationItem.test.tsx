import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Route } from 'router/routesMap';

import NavigationItem from './NavigationItem';

const mockRoute = (title: string, path: string): Route => ({
  title,
  path,
  component: jest.fn().mockReturnValue(<></>)
});

describe('<NavigationItem />', () => {
  describe('when it is the current route', () => {
    it('should render correctly', () => {
      const component = shallow(
        <NavigationItem route={mockRoute('mockTitle', 'mockPath')} isCurrent />
      );

      expect(shallowToJson(component)).toMatchSnapshot();
    });
  });
  describe('when it is not the current route', () => {
    it('should render correctly', () => {
      const component = shallow(
        <NavigationItem
          route={mockRoute('mockTitle', 'mockPath')}
          isCurrent={false}
        />
      );

      expect(shallowToJson(component)).toMatchSnapshot();
    });
  });
});
