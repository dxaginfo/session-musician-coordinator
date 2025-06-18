import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query';

import { store } from '@/store';
import theme from '@/theme';
import Layout from '@/components/layout/Layout';
import AuthProvider from '@/context/AuthContext';
import SocketProvider from '@/context/SocketContext';

import '@/styles/globals.css';

// Create a client for React Query
const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }: AppProps) {
  // Detect routes that don't need the main layout
  const isAuthPage = router.pathname.startsWith('/auth');

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
            <SocketProvider>
              {isAuthPage ? (
                <Component {...pageProps} />
              ) : (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              )}
            </SocketProvider>
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;