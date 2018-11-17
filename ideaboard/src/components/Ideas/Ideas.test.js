import React from 'react';
import { shallow } from 'enzyme';
import Ideas from './Ideas';

describe('Idea', () => {
  let ideasComponent;

  beforeEach(() => {
    ideasComponent = shallow(<Ideas />);
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(ideasComponent.length).toBe(1);
      expect(ideasComponent).toMatchSnapshot();
    });
  });
});
