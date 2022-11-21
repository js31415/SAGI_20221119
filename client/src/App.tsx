import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Route } from 'react-router-dom';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Route path="/">
          <Route index element={<>home</>} />
        </Route>
        <Route path="/upload" element={<>upload</>} />
      </ChakraProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
