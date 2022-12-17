import 'styled-components';
import { ThemeType } from './themeVariants';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
