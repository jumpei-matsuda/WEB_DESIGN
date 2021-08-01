import { createTheme } from '@material-ui/core';

const defaultTheme = createTheme();
export const theme = {
  ...defaultTheme,
  width: {
    full: '100vw',
  },
  animation: {
    fadeIn: {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  },
  fontFamily: {
    base: 'Sawarabi Mincho, sans-serif',
  },
  color: {
    navy: '#061b94',
    yellow: '#c8b432',
    rightGray: '#BFBFBF',
    gray: '#989797',
    black: '#000',
    white: '#fff',
    red: '#7D160D',
    rightRed: 'rgba(203,12,12,.73)',
  },
  marginHeader: '5rem',
};

export type Theme = typeof theme;
