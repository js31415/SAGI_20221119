import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/home.page';
import UploadPage from 'pages/upload.page';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </ChakraProvider>
  </QueryClientProvider>
);
