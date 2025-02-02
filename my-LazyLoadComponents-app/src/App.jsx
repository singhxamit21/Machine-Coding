import React, { Suspense, lazy } from "react";

// Lazy load the component
const LazyComponent = lazy(() => import("./LazyComponent"));

import './App.css';

function App() {
  return (
    <div>
      <h1>React Suspense & Lazy Loading</h1>
      <Suspense fallback={<div>Loading component...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}

export default App
