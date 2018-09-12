import * as React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';

const setup = () => {
  const props = {
    title: 'Welcome to React',
  };

  const wrapper = shallow(<App {...props} />);

  return {
    wrapper,
  };
};

describe('App', () => {
  it('renders welcome message', () => {
    const { wrapper } = setup();
    const welcome = 'Welcome to React';
    expect(
      wrapper
        .find('AppTitle')
        .children()
        .text()
    ).toBe(welcome);
  });
});
