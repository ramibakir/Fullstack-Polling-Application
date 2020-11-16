import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from './src/styles/theme';
import Routes from './src/routes/Routes';
import Theme from './src/styled/Theme';

const App = () => (
  <>
    <Theme>
      <CSSReset />
      <Routes />
    </Theme>
  </>
);

export default App;
