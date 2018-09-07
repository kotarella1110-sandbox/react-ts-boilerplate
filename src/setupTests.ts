import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

// https://github.com/storybooks/storybook/issues/1011
jest.mock('@storybook/addon-info', () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {},
}));

enzyme.configure({ adapter: new Adapter() });
