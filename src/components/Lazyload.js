
import React, { Suspense } from 'react';
import Loader from './Loader'; // Import your loader component

const withLazyLoad = (importComponent) => {
  const LazyComponent = React.lazy(importComponent);

  return (props) => (
    <Suspense fallback={<Loader />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default withLazyLoad;
