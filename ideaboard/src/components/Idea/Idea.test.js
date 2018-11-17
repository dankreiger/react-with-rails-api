import React from 'react';
import { shallow } from 'enzyme';
import Idea from './Idea';

describe('Idea', () => {
  let ideaComponent;

  beforeEach(() => {
    ideaComponent = shallow(<Idea />);
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(ideaComponent.length).toBe(1);
      expect(ideaComponent).toMatchSnapshot();
    });
  });
});
