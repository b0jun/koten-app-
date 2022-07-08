import React from 'react';
import { SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './pages/Home';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

if (__DEV__) {
  import('react-query-native-devtools').then(({ addPlugin }) => {
    addPlugin({ queryClient });
  });
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
