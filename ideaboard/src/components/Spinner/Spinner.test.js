import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner', () => {
  let spinnerComponent;

  beforeEach(() => {
    spinnerComponent = shallow(<Spinner />);
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(spinnerComponent.length).toBe(1);
      expect(spinnerComponent).toMatchSnapshot();
    });
  });
});
