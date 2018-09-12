import * as styledComponents from 'styled-components';
import ThemeInterface from 'components/theme/interface';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
