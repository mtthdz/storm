'use client';

import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './_lib/styledComponentsRegistry';
import theme from './_styles/theme';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        {props.children} 
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers