'use client';

import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '../lib/styledComponentsRegistry';
import theme from '../styles/theme';

/**
 * Dedicated Providers wrapper for app/page.tsx
 * 
 * @param props children components
 * @returns JSX
 */
export default function Providers (props: React.PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        {props.children} 
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};