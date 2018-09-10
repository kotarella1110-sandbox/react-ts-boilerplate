import initStoryshots from '@storybook/addon-storyshots';
import { setStubbingMode } from 'react-stubber';
import 'jest-styled-components';

setStubbingMode(true);

initStoryshots({});
