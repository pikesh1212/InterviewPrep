import React, { Suspense } from 'react';

// Simulate a lazy-loaded component with a timeout
const LazyLoadedComponent = React.lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./LazyComponent'));
    }, 3000); // Simulated delay of 3 seconds
  })
);

function LazyContainer() {
  return (
    <div className="App">
      <h1 className="text-center">React Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading component...</div>}>
        <LazyLoadedComponent />
      </Suspense>
    </div>
  );
}

export default LazyContainer;
