import type { AppProps } from 'next/app';

import { EntriesProvider } from '@/context/entries';
import { UIProvider } from '@/context/ui';

import { SnackbarProvider } from 'notistack'; // libreria npm (MUI) https://github.com/iamhosseindhv/notistack
import { CssBaseline, ThemeProvider } from '@mui/material';

import { lightTheme, darkTheme } from '../themes';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  );
}
