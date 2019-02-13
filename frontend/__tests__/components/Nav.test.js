import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../../components/Nav/Nav';

describe('round', () => {
  let mockProps;
  let nav;

  beforeEach(() => {
    mockProps = {};
    nav = shallow(<Nav {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(nav).toMatchSnapshot();
  });
});
