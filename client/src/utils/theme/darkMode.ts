import { palette } from './themeConfig';

export const darkTheme = {
  colors: {
    backgroundPrimary: palette.black,
    backgroundSecondary: palette.lightBlack,

    fontPrimary: palette.white,
    fontSecondary: palette.lightWhite,

    primary: palette.react,
    secondary: palette.secondary,

    error: palette.error,
    success: palette.success,
  },
  boxShadow: {
    input: `1px 1px 4px 1px ${palette.react};`,
  },
};
