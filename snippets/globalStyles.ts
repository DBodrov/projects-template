import {css} from '@emotion/react';
import {createTheme} from 'neutrino-ui';
import SourceRegularTTF from 'assets/fonts/source-sans-pro-v12-latin_cyrillic-regular.ttf';
import SourceRegularWoff from 'assets/fonts/source-sans-pro-v12-latin_cyrillic-regular.woff';
import SourceRegularWoff2 from 'assets/fonts/source-sans-pro-v12-latin_cyrillic-regular.woff2';

import SourceBoldTtf from 'assets/fonts/source-sans-pro-v12-latin_cyrillic-600.ttf';
import SourceBoldWoff from 'assets/fonts/source-sans-pro-v12-latin_cyrillic-600.woff';
import SourceBoldWoff2 from 'assets/fonts/source-sans-pro-v12-latin_cyrillic-600.woff2';

import SquadHeavyTtf from 'assets/fonts/Squad-Heavy.ttf';
import SquadHeavyWoff from 'assets/fonts/Squad-Heavy.woff';
import SquadHeavyWoff2 from 'assets/fonts/Squad-Heavy.woff2';

import SquadBoldTtf from 'assets/fonts/Squad-Bold.ttf';
import SquadBoldWoff from 'assets/fonts/Squad-Bold.woff';
import SquadBoldWoff2 from 'assets/fonts/Squad-Bold.woff2';

export const globalStyles = css(
  css`
    @font-face {
      font-family: 'Source Sans Pro';
      src: url(${SourceRegularTTF}) format('truetype'), url(${SourceRegularWoff}) format('woff'),
        url(${SourceRegularWoff2}) format('woff2');
      font-style: normal;
      font-weight: normal;
    }

    @font-face {
      font-family: 'Source Sans Pro Bold';
      src: url(${SourceBoldTtf}) format('truetype'), url(${SourceBoldWoff}) format('woff'),
        url(${SourceBoldWoff2}) format('woff2');
      font-style: normal;
      font-weight: bold;
    }

    @font-face {
      font-family: 'Squad Heavy';
      src: url(${SquadHeavyTtf}) format('truetype'), url(${SquadHeavyWoff}) format('woff'),
        url(${SquadHeavyWoff2}) format('woff2');
      font-style: normal;
      font-weight: bold;
    }

    @font-face {
      font-family: Squad;
      src: url(${SquadBoldTtf}) format('truetype'), url(${SquadBoldWoff}) format('woff'),
        url(${SquadBoldWoff2}) format('woff2');
      font-style: normal;
      font-weight: normal;
    }
  `,
  {
    ':root': {
      '--color-primary': '#52ae30',
      '--color-primary-dark': '#18740B',
      '--color-secondary': '#FF6600',
      '--color-secondary-dark': '#D63D0C',
      '--color-border': '#C5C5C5',
      '--color-text': '#494949',
      '--color-text-lead': '#767676',
      '--color-background': '#fff',
      '--color-error': '#CC5200',
      '--color-text-error': '#CC5200',
      '--color-text-label': '#7D828B',
      '--border-radius': '32px',
    },
    'html, body': {
      margin: 0,
      padding: 0,
      width: '100%',
      height: '100%',
      fontFamily: ['Source Sans Pro'],
      fontSize: '16px',
      fontWeight: 'normal',
      color: 'var(--color-text)',
      backgroundColor: 'var(--color-background)',
    },
    '*': {boxSizing: 'border-box'},
    '#app': {width: '100%', height: '100%'},
  },
);

export const theme = createTheme({
  colors: {
    mainColors: {
      primary: '#52ae30',
      primaryDark: '#18740B',
      secondary: '#FF6600',
      secondaryDark: '#D63D0C',
    },
    feedbackColors: {
      error: '#FF6600'
    },
    pageElementsColors: {
      border: 'var(--color-border)'
    }
  },
  globals: {
    borderRadius: '24px',
  },
});
