import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let appComponent;

  beforeEach(() => {
    appComponent = shallow(<App />);
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(appComponent.length).toBe(1);
      expect(appComponent).toMatchSnapshot();
    });
  });
});
