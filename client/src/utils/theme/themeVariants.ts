import { darkTheme } from './darkMode';

export enum Theme {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

export type ThemeType = typeof darkTheme;

export const themeVariants = {
  [Theme.DARK]: darkTheme,
  // [Theme.LIGHT]: lightTheme,
};
