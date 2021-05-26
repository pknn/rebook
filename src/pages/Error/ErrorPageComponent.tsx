import React, { useEffect } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import { useStore } from 'react-redux';

type ComponentProps = FallbackProps;

const ErrorPageComponent: React.FC<ComponentProps> = ({
  error,
  resetErrorBoundary
}) => {
  const store = useStore();
  const location = useLocation();

  useEffect(() => {
    return function cleanup() {
      resetErrorBoundary();
    };
  }, [resetErrorBoundary, location.pathname]);

  return (
    <div>
      <h1>Error has occured</h1>
      <h2>Application Version: {store.getState().metadata.version}</h2>
      <span>
        {error.name}: {error.message}
      </span>
    </div>
  );
};

export default ErrorPageComponent;
