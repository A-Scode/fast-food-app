import { createFont, createTamagui, createTokens } from 'tamagui';
import defaultConfig from '@tamagui/config/v3';


const size = {
    0: 0,
    1: 4,
    2: 8,
    true:true,
  };
  const space = {
    ...size,
    '-0': -0,
    '-1': -5
  };
  const defaultFont = createFont({
    family: 'Arial',
    size: {
      1: 14,
      2: 18,
      3: 22
    },
    lineHeight: {
      1: 15,
      2: 20
    },
    weight: {
      4: '300',
      7: '600'
    },
    letterSpacing: {
      4: 0,
      7: -1
    }
  });
  const tokens = createTokens({
    size,
    space,
    font: {
      
    },
    color: {
      lightPurple: '#EDD2F3',
      darkPurple: '#544179'
    },
    radius: {
      0: 0,
      1: 3,
      2: 5,
      3: 10,
      4: 15,
      5: 20
    },
    zIndex: {
      0: 0,
      1: 100,
      2: 200,
      3: 300,
      4: 400,
      5: 500
    }
  });
  const shorthands = {
    ai: 'alignItems',
    bg: 'backgroundColor',
    br: 'borderRadius',
    f: 'flex',
    h: 'height',
    jc: 'justifyContent',
    m: 'margin',
    p: 'padding',
    w: 'width',
   lh: 'lineHeight',
    ta: 'textAlign'
  } as const;
  const media = {
    xs: { maxWidth: 660 },
    gtXs: { minWidth: 660 + 1 },
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    md: { minWidth: 980 },
    gtMd: { minWidth: 980 + 1 },
    lg: { minWidth: 1120 },
    gtLg: { minWidth: 1120 + 1 },
    xl: { minWidth: 1280 },
    xxl: { minWidth: 1420 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' }
  };


const config = createTamagui({
    ...defaultConfig,
  themes: {
    light: {
      background: '#ffffff',
      color: '#000000',
      primary: '#FF5900', 
    },
    dark: {
      background: '#000000',
      color: '#ffffff',
      primary: '#FF5900', 
    },
  },
});

export default config;