import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import HomePage from './components/HomePage/HomePage';

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
