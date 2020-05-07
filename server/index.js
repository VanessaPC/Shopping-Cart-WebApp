require('@babel/register')({
  babelrc: false,
  presets: ['next/babel', '@babel/preset-env'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
});
require('./server');
